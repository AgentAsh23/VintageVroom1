// src/app/browse/page.tsx
import Link from 'next/link';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';

const cars = [
  {
    id: 1,
    name: 'Classic Ford Mustang',
    year: 1967,
    price: 2500000, // Price in Rupees
    image: '/images/mustang.jpg',
    description: 'A classic American muscle car with a powerful V8 engine.',
  },
  {
    id: 2,
    name: 'Chevrolet Camaro',
    year: 1969,
    price: 2800000,
    image: '/images/camaro.jpg',
    description: 'An iconic muscle car known for its performance and style.',
  },
  {
    id: 3,
    name: 'Volkswagen Beetle',
    year: 1970,
    price: 1200000,
    image: '/images/beetle.jpg',
    description: 'The classic compact car that has stood the test of time.',
  },
  {
    id: 4,
    name: 'Porsche 911',
    year: 1980,
    price: 8000000,
    image: '/images/porsche911.jpg',
    description: 'A timeless sports car that combines luxury with performance.',
  },
  {
    id: 5,
    name: 'Jaguar E-Type',
    year: 1961,
    price: 6500000,
    image: '/images/jaguar-e-type.jpg',
    description: 'An elegant sports car with stunning design and performance.',
  },
  {
    id: 6,
    name: 'MGB Roadster',
    year: 1965,
    price: 1500000,
    image: '/images/mgb-roadster.jpg',
    description: 'A charming British roadster with a great driving experience.',
  },
  {
    id: 7,
    name: 'Dodge Charger',
    year: 1970,
    price: 3000000,
    image: '/images/dodge-charger.jpg',
    description: 'A powerful muscle car known for its speed and style.',
  },
  {
    id: 8,
    name: 'Ferrari 308',
    year: 1975,
    price: 7000000,
    image: '/images/ferrari-308.jpg',
    description: 'A stunning Italian sports car that turns heads everywhere.',
  },
  // Additional cars
  {
    id: 9,
    name: 'Ambassador Mark III',
    year: 1982,
    price: 500000,
    image: '/images/ambassador.jpg',
    description: 'An iconic Indian car known for its spacious interiors and robust build.',
  },
  {
    id: 10,
    name: 'Fiat 1100 Delight',
    year: 1954,
    price: 900000,
    image: '/images/fiat-1100.jpg',
    description: 'A classic sedan with a unique design and nostalgic charm.',
  },
  {
    id: 11,
    name: 'Morris Oxford Series II',
    year: 1958,
    price: 800000,
    image: '/images/morris-oxford.jpg',
    description: 'A vintage British car that became popular in India for its elegance.',
  },
  {
    id: 12,
    name: 'Tata Sierra',
    year: 1991,
    price: 1200000,
    image: '/images/tata-sierra.jpg',
    description: 'A beloved Indian SUV with a distinctive design and rugged capability.',
  },
  {
    id: 13,
    name: 'Maruti 800',
    year: 1983,
    price: 600000,
    image: '/images/maruti-800.jpg',
    description: 'The car that revolutionized the Indian automobile industry.',
  },
  {
    id: 14,
    name: 'Mahindra Classic',
    year: 1996,
    price: 1300000,
    image: '/images/mahindra-classic.jpg',
    description: 'An off-road vehicle that is loved for its ruggedness and reliability.',
  },
  {
    id: 15,
    name: 'Hindustan 14',
    year: 1954,
    price: 750000,
    image: '/images/hindustan-14.jpg',
    description: 'An elegant sedan that represents the Indian automotive heritage.',
  },
];

const BrowseCars = () => {
  return (
    <MaxWidthWrapper>
      <div className="py-8">
        <h1 className="text-4xl font-bold mb-6 text-center">Browse Vintage Cars</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <div key={car.id} className="border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
              <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{car.name} ({car.year})</h2>
                <p className="text-gray-700">{car.description}</p>
                <p className="mt-2 text-lg font-bold text-red-600">Price: ₹{car.price.toLocaleString()}</p>
                <Link
                  href={`/cars/${car.id}`} 
                  className="mt-4 inline-block bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500 transition">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-xl font-semibold text-gray-800">Can’t find your dream car?</p>
          <p className="mt-2 text-gray-600">Reach out to us, and we’ll help you hunt it down!</p>
          <Link href="/contact" className="mt-4 inline-block bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500 transition">
            Contact Us
          </Link>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default BrowseCars;
