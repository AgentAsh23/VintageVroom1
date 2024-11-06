import Link from 'next/link';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';

const AboutUs = () => {
  return (
    <MaxWidthWrapper>
      <div className='py-10 px-5'>
        <h1 className='text-4xl font-bold text-center text-red-600'>About Us</h1>
        <p className='mt-5 text-lg text-center text-gray-700'>
          Welcome to <span className='font-semibold text-red-600'>VintageVroom</span>! 
          We’re not just a car dealership; we’re a passionate community of vintage car enthusiasts who believe every classic car holds a unique story waiting to be rediscovered.
        </p>

        <div className='mt-10'>
          <h2 className='text-2xl font-semibold text-center'>Our Story</h2>
          <p className='mt-4 text-lg text-gray-700'>
            Founded by a dedicated group of car aficionados, VintageVroom was born from the dream of reviving classic cars and bringing them back to the roads they were meant to grace. 
            Every vintage car in our collection is not just a vehicle; it’s a piece of history, an echo of the roads traveled and the stories lived.
          </p>
          <img src='/images/classic-cars.jpg' alt='Classic Cars' className='mt-6 w-full h-96 object-cover rounded-lg shadow-lg' />
        </div>

        <div className='mt-10'>
          <h2 className='text-2xl font-semibold text-center'>What We Do</h2>
          <p className='mt-4 text-lg text-gray-700'>
            At VintageVroom, we specialize in sourcing, restoring, and selling vintage cars that capture the essence of bygone eras. 
            Whether you’re a seasoned collector or a first-time buyer, we’re here to help you find that perfect ride that speaks to your soul.
          </p>
          <p className='mt-2 text-lg text-gray-700'>
            Our expert team meticulously ensures that each car is in top-notch condition, so you can hit the road with confidence and style.
          </p>
          <img src='/images/restoration-process.jpg' alt='Restoration Process' className='mt-6 w-full h-96 object-cover rounded-lg shadow-lg' />
        </div>

        <div className='mt-10'>
          <h2 className='text-2xl font-semibold text-center'>Join Our Community</h2>
          <p className='mt-4 text-lg text-gray-700'>
            VintageVroom isn’t just about cars; it’s about creating connections. Join us for exciting events, meet-ups, and workshops where you can share your passion for vintage cars with fellow enthusiasts. 
            Connect with us on social media, and don’t forget to check out our blog for valuable tips on vintage car maintenance and restoration!
          </p>
        </div>

        <div className='mt-10'>
          <h2 className='text-2xl font-semibold text-center'>Meet Our Dream Team</h2>
          <div className='flex flex-col items-center mt-4'>
            <div className='flex space-x-5'>
              <div className='text-center'>
                <img src='/images/Shreyash More.jpg' alt='Shreyash More' className='w-24 h-24 rounded-full shadow-lg'/>
                <h3 className='mt-2 font-semibold'>Shreyash More</h3>
                <p className='text-gray-600'>Founder & Vintage Car Expert</p>
              </div>
              <div className='text-center'>
                <img src='/images/Nikita Malhotra.jpg' alt='Nikita Malhotra' className='w-24 h-24 rounded-full shadow-lg'/>
                <h3 className='mt-2 font-semibold'>Nikita Malhotra</h3>
                <p className='text-gray-600'>Restoration Specialist</p>
              </div>
              <div className='text-center'>
                <img src='/images/Hardeek Sharma.jpg' alt='Hardeek Sharma' className='w-24 h-24 rounded-full shadow-lg'/>
                <h3 className='mt-2 font-semibold'>Hardeek Sharma</h3>
                <p className='text-gray-600'>Community Manager</p>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-10 text-center'>
          <Link href='/browse'>
            <button className='bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition'>
              Explore Our Stunning Inventory
            </button>
          </Link>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default AboutUs;
