import { createUploadthing, type FileRouter } from 'uploadthing/next'
import { z } from 'zod'
import sharp from 'sharp'

const f = createUploadthing()

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: '4MB' } })
    .input(z.object({ configId: z.string().optional() }))
    .middleware(async ({ input }) => {
      return { input }
    })
    .onUploadComplete(async ({ metadata, file }) => {
      const { configId } = metadata.input

      // Fetch the uploaded file from the URL
      const res = await fetch(file.url)
      const buffer = await res.arrayBuffer()

      // Use sharp to extract image metadata
      const imgMetadata = await sharp(buffer).metadata()
      const { width, height } = imgMetadata

      // Since there's no database, we don't need to save the configuration
      if (!configId) {
        // You can return some metadata like image URL, width, height, etc.
        return { imageUrl: file.url, width, height }
      } else {
        // Since we're not using the database, we can just return updated metadata
        return { imageUrl: file.url, width, height }
      }
    }),
} satisfies FileRouter

export type OurFileRouter = typeof ourFileRouter
