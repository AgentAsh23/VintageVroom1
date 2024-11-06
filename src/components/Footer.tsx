import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'

const Footer = () => {
  return (
    <footer className='bg-gray-900 h-24 relative text-gray-100'>
      <MaxWidthWrapper>
        <div className='border-t border-gray-700' />

        <div className='h-full flex flex-col md:flex-row md:justify-between justify-center items-center py-4'>
          <div className='text-center md:text-left pb-2 md:pb-0'>
            <p className='text-sm'>
              &copy; {new Date().getFullYear()} VintageVroom. All rights reserved.
            </p>
          </div>

          <div className='flex items-center justify-center'>
            <div className='flex space-x-8'>
              <Link
                href='#'
                className='text-sm text-gray-400 hover:text-red-600'>
                Terms of Service
              </Link>
              <Link
                href='#'
                className='text-sm text-gray-400 hover:text-red-600'>
                Privacy Policy
              </Link>
              <Link
                href='#'
                className='text-sm text-gray-400 hover:text-red-600'>
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}

export default Footer
