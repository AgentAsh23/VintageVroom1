# VintageVroom - E-commerce Website

Welcome to VintageVroom! This is a fully functional e-commerce website built with Next.js, designed to provide a seamless shopping experience for users. The website integrates with the Fake Store API and utilizes Kinde for authentication and user data management.

# Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Authentication](#authentication)
- [Email Verification](#email-verification)
- [License](#license)

# Features

- Responsive design based on provided Figma layouts
- User authentication with Kinde
- Email verification for user accounts
- Product browsing and detailed product pages

# Tech Stack

- Frontend: Next.js, React, Tailwind CSS
- Authentication: Kinde
- State Management: React Context

# Installation

1. Clone the repository:
   git clone https://github.com/yourusername/vintagevroom.git
   cd vintagevroom

2. Install the dependencies:
   npm install

3.Set up environment variables in a .env.local file:
  NEXT_PUBLIC_KINDE_CLIENT_ID=your_kinde_client_id
  NEXT_PUBLIC_KINDE_REDIRECT_URI=http://localhost:3000
  ADMIN_EMAIL=your_admin_email

4. Start the development server:
  npm run dev
  Open your browser and visit http://localhost:3000.

# Usage
○ Visit the home page to browse products.
○ Click on a product to view details and add it to your shopping cart.
○ Sign up or log in to manage your profile and make purchases.

# Authentication
○ Kinde is used for user authentication. 
○ Users can sign up, log in, and manage their accounts securely. All sensitive routes are protected, ensuring only authenticated users can access them.

# Email Verification
○ After signing up, a verification email will be sent to the user's email address. 
○ Users must verify their email to complete their registration process.

# License
○ This project is licensed under the MIT License. See the LICENSE file for details.