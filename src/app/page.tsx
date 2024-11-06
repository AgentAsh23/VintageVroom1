import { Icons } from '@/components/Icons';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { buttonVariants } from '@/components/ui/button';
import { Check, Star } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='bg-gray-900 text-gray-100'>
      <section>
        <MaxWidthWrapper className='pb-24 pt-10 sm:pb-32'>
          <div className='relative mx-auto text-center flex flex-col items-center'>
            <h1 className='relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-white text-5xl md:text-6xl lg:text-7xl'>
              Own a Piece of History with{' '}
              <span className='bg-red-600 px-2 text-white'>Vintage</span>{' '}
              Cars
            </h1>
            <p className='mt-8 text-lg max-w-prose text-center text-gray-300'>
              Discover and own classic cars that capture timeless elegance and lasting power.
            </p>

            <ul className='mt-8 space-y-2 text-left font-medium flex flex-col items-center'>
              <div className='space-y-2'>
                <li className='flex gap-1.5 items-center text-left'>
                  <Check className='h-5 w-5 shrink-0 text-red-600' />
                  Wide Selection of Authentic Vintage Cars
                </li>
                <li className='flex gap-1.5 items-center text-left'>
                  <Check className='h-5 w-5 shrink-0 text-red-600' />
                  Restoration & Customization Services
                </li>
                <li className='flex gap-1.5 items-center text-left'>
                  <Check className='h-5 w-5 shrink-0 text-red-600' />
                  Warranty & Satisfaction Guarantee
                </li>
              </div>
            </ul>

            <div className='mt-12 flex flex-col items-center gap-5'>
              <div className='flex -space-x-4'>
                <img
                  className='inline-block h-10 w-10 rounded-full ring-2 ring-gray-700'
                  src='/users/user-1.png'
                  alt='user image'
                />
                <img
                  className='inline-block h-10 w-10 rounded-full ring-2 ring-gray-700'
                  src='/users/user-2.png'
                  alt='user image'
                />
                <img
                  className='inline-block h-10 w-10 rounded-full ring-2 ring-gray-700'
                  src='/users/user-3.png'
                  alt='user image'
                />
                <img
                  className='inline-block h-10 w-10 rounded-full ring-2 ring-gray-700'
                  src='/users/user-4.jpg'
                  alt='user image'
                />
                <img
                  className='inline-block object-cover h-10 w-10 rounded-full ring-2 ring-gray-700'
                  src='/users/user-5.jpg'
                  alt='user image'
                />
              </div>

              <div className='flex flex-col justify-center items-center'>
                <div className='flex gap-0.5'>
                  <Star className='h-4 w-4 text-red-600 fill-red-600' />
                  <Star className='h-4 w-4 text-red-600 fill-red-600' />
                  <Star className='h-4 w-4 text-red-600 fill-red-600' />
                  <Star className='h-4 w-4 text-red-600 fill-red-600' />
                  <Star className='h-4 w-4 text-red-600 fill-red-600' />
                </div>

                <p>
                  <span className='font-semibold'>1,050</span> satisfied customers
                </p>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

<section className='bg-gray-800 py-24'>
  <MaxWidthWrapper className='flex flex-col items-center gap-16 sm:gap-32'>
    <h2 className='text-5xl font-bold text-center text-white'>What Our Customers Say</h2>
    <div className='mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16'>
      <div className='flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20'>
        <div className='flex gap-0.5 mb-2'>
          <Star className='h-5 w-5 text-red-600 fill-red-600' />
          <Star className='h-5 w-5 text-red-600 fill-red-600' />
          <Star className='h-5 w-5 text-red-600 fill-red-600' />
          <Star className='h-5 w-5 text-red-600 fill-red-600' />
          <Star className='h-5 w-5 text-red-600 fill-red-600' />
        </div>
        <div className='text-lg leading-8 text-gray-300'>
          <p>
            "VintageVroom transformed my vintage car dreams into reality! Their impeccable service and attention to detail made the purchase process a breeze."
          </p>
        </div>
        <div className='flex gap-4 mt-2'>
          <img
            className='rounded-full h-12 w-12 object-cover'
            src='/users/user-1.png'
            alt='user'
          />
          <div className='flex flex-col'>
            <p className='font-semibold'>Jonathan</p>
            <div className='flex gap-1.5 items-center text-gray-400'>
              <Check className='h-4 w-4 stroke-[3px] text-red-600' />
              <p className='text-sm'>Verified Purchase</p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20'>
        <div className='flex gap-0.5 mb-2'>
          <Star className='h-5 w-5 text-red-600 fill-red-600' />
          <Star className='h-5 w-5 text-red-600 fill-red-600' />
          <Star className='h-5 w-5 text-red-600 fill-red-600' />
          <Star className='h-5 w-5 text-red-600 fill-red-600' />
          <Star className='h-5 w-5 text-red-600 fill-red-600' />
        </div>
        <div className='text-lg leading-8 text-gray-300'>
          <p>
            "I never thought I could own a classic car until I found VintageVroom. Their restoration work is nothing short of magic!"
          </p>
        </div>
        <div className='flex gap-4 mt-2'>
          <img
            className='rounded-full h-12 w-12 object-cover'
            src='/users/user-4.jpg'
            alt='user'
          />
          <div className='flex flex-col'>
            <p className='font-semibold'>Josh</p>
            <div className='flex gap-1.5 items-center text-gray-400'>
              <Check className='h-4 w-4 stroke-[3px] text-red-600' />
              <p className='text-sm'>Verified Purchase</p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20'>
        <div className='flex gap-0.5 mb-2'>
          <Star className='h-5 w-5 text-red-600 fill-red-600' />
          <Star className='h-5 w-5 text-red-600 fill-red-600' />
          <Star className='h-5 w-5 text-red-600 fill-red-600' />
          <Star className='h-5 w-5 text-red-600 fill-red-600' />
          <Star className='h-5 w-5 text-red-600 fill-red-600' />
        </div>
        <div className='text-lg leading-8 text-gray-300'>
          <p>
            "I had an amazing experience with VintageVroom! They guided me through the entire process and helped me find my dream car."
          </p>
        </div>
        <div className='flex gap-4 mt-2'>
          <img
            className='rounded-full h-12 w-12 object-cover'
            src='/users/user-2.png'
            alt='user'
          />
          <div className='flex flex-col'>
            <p className='font-semibold'>Sarah</p>
            <div className='flex gap-1.5 items-center text-gray-400'>
              <Check className='h-4 w-4 stroke-[3px] text-red-600' />
              <p className='text-sm'>Verified Purchase</p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20'>
        <div className='flex gap-0.5 mb-2'>
          <Star className='h-5 w-5 text-red-600 fill-red-600' />
          <Star className='h-5 w-5 text-red-600 fill-red-600' />
          <Star className='h-5 w-5 text-red-600 fill-red-600' />
          <Star className='h-5 w-5 text-red-600 fill-red-600' />
          <Star className='h-5 w-5 text-red-600 fill-red-600' />
        </div>
        <div className='text-lg leading-8 text-gray-300'>
          <p>
            "The attention to detail at VintageVroom is incredible. They helped me restore my grandfather's car, and it looks brand new!"
          </p>
        </div>
        <div className='flex gap-4 mt-2'>
          <img
            className='rounded-full h-12 w-12 object-cover'
            src='/users/user-3.png'
            alt='user'
          />
          <div className='flex flex-col'>
            <p className='font-semibold'>Emily</p>
            <div className='flex gap-1.5 items-center text-gray-400'>
              <Check className='h-4 w-4 stroke-[3px] text-red-600' />
              <p className='text-sm'>Verified Purchase</p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20'>
        <div className='flex gap-0.5 mb-2'>
          <Star className='h-5 w-5 text-red-600 fill-red-600' />
          <Star className='h-5 w-5 text-red-600 fill-red-600' />
          <Star className='h-5 w-5 text-red-600 fill-red-600' />
          <Star className='h-5 w-5 text-red-600 fill-red-600' />
          <Star className='h-5 w-5 text-red-600 fill-red-600' />
        </div>
        <div className='text-lg leading-8 text-gray-300'>
          <p>
            "From start to finish, the process was smooth and enjoyable. I highly recommend VintageVroom for anyone looking to buy a vintage car!"
          </p>
        </div>
        <div className='flex gap-4 mt-2'>
          <img
            className='rounded-full h-12 w-12 object-cover'
            src='/users/user-5.jpg'
            alt='user'
          />
          <div className='flex flex-col'>
            <p className='font-semibold'>Michael</p>
            <div className='flex gap-1.5 items-center text-gray-400'>
              <Check className='h-4 w-4 stroke-[3px] text-red-600' />
              <p className='text-sm'>Verified Purchase</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MaxWidthWrapper>
</section>

      <section className='py-24'>
        <MaxWidthWrapper className='text-center'>
          <h2 className='text-5xl font-bold text-white'>Did You Know?</h2>
          <p className='mt-4 text-lg text-gray-300'>
            Vintage cars are not just automobiles; they are a piece of history! Here are some fun facts:
          </p>
          <ul className='mt-6 text-lg text-gray-300'>
            <li>🚗 The first automobile was invented in 1885!</li>
            <li>🎉 Classic cars appreciate in value over time.</li>
            <li>🔧 Many vintage cars can be restored to their original glory!</li>
          </ul>
        </MaxWidthWrapper>
      </section>

      <section className='bg-gray-800 py-24'>
        <MaxWidthWrapper className='text-center'>
          <h2 className='text-5xl font-bold text-white'>Frequently Asked Questions</h2>
          <div className='mt-8 max-w-2xl mx-auto text-left'>
            <div className='mb-4'>
              <h3 className='text-lg font-semibold text-white'>What is a vintage car?</h3>
              <p className='text-gray-300'>
                A vintage car is generally considered to be any car manufactured between 1919 and 1930. 
              </p>
            </div>
            <div className='mb-4'>
              <h3 className='text-lg font-semibold text-white'>Do you offer financing options?</h3>
              <p className='text-gray-300'>
                Yes, we offer flexible financing options to help you purchase your dream vintage car.
              </p>
            </div>
            <div className='mb-4'>
              <h3 className='text-lg font-semibold text-white'>Can I sell my vintage car to you?</h3>
              <p className='text-gray-300'>
                Absolutely! We buy vintage cars in any condition. Reach out to us for a valuation.
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>      
    </div>
  );
}
