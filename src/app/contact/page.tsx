// src/app/contact/page.tsx
import MaxWidthWrapper from '@/components/MaxWidthWrapper';

const Contact = () => {
  return (
    <MaxWidthWrapper>
      <div className="py-8 text-center">
        <h1 className="text-4xl font-bold mb-6 text-red-600">Get in Touch with Vintage Vroom!</h1>
        <p className="mb-4 text-gray-700">
          We’re always excited to hear from fellow vintage car enthusiasts! Whether you have a question, feedback, or just want to chat about classic cars, fill out the form below, and we'll hit the road to connect with you!
        </p>
        
        <form className="max-w-md mx-auto space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Enter your name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50 p-2"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="yourname@example.com"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50 p-2"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              placeholder="Tell us about your vintage car dreams!"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50 p-2"
            />
          </div>

          <button
            type="submit"
            className="inline-block bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500 transition">
            🚗 Rev Up Your Message!
          </button>
        </form>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800">Follow Us on Social Media!</h2>
          <p className="text-gray-600">Join our community of vintage car lovers and stay updated on the latest news!</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-red-600 hover:text-red-400">Facebook</a>
            <a href="#" className="text-red-600 hover:text-red-400">Instagram</a>
            <a href="#" className="text-red-600 hover:text-red-400">Twitter</a>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Contact;
