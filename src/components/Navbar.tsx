import Link from 'next/link';
import MaxWidthWrapper from './MaxWidthWrapper';
import { buttonVariants } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const isAdmin = user?.email === process.env.ADMIN_EMAIL;

  return (
    <nav className='sticky z-[100] h-16 inset-x-0 top-0 w-full border-b border-gray-800 bg-gray-900/90 backdrop-blur-lg transition-all'>
      <MaxWidthWrapper>
        <div className='flex h-16 items-center justify-between'>
          <Link href='/' className='flex z-40 font-bold text-xl text-white'>
            Vintage<span className='text-red-600'>Vroom</span>
          </Link>

          <div className='h-full flex items-center space-x-4'>
            <Link
              href='/'
              className='text-gray-300 hover:text-red-600'>
              Home
            </Link>
            <Link
              href='/browse'
              className='text-gray-300 hover:text-red-600'>
              Browse Cars
            </Link>
            <Link
              href='/about'
              className='text-gray-300 hover:text-red-600'>
              About Us
            </Link>
            <Link
              href='/contact'
              className='text-gray-300 hover:text-red-600'>
              Contact
            </Link>
            {user ? (
              <>
                <Link
                  href='/api/auth/logout'
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                    className: 'text-gray-300 hover:text-red-600',
                  })}>
                  Sign out
                </Link>
                {isAdmin && (
                  <Link
                    href='/dashboard'
                    className={buttonVariants({
                      size: 'sm',
                      variant: 'ghost',
                      className: 'text-gray-300 hover:text-red-600',
                    })}>
                    Dashboard ✨
                  </Link>
                )}
                <Link
                  href='/profile'
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                    className: 'text-gray-300 hover:text-red-600',
                  })}>
                  My Profile
                </Link>
              </>
            ) : (
              <>
                <Link
                  href='/api/auth/register'
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                    className: 'text-gray-300 hover:text-red-600',
                  })}>
                  Sign up
                </Link>

                <Link
                  href='/api/auth/login'
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                    className: 'text-gray-300 hover:text-red-600',
                  })}>
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}

export default Navbar;
