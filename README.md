Bookstore Web Application
A modern, responsive bookstore web application built with React, Framer Motion for animations, and MobX for state management. The app includes features like login, shopping cart, dynamic banner, customer reviews, and a user-friendly design.

Table of Contents
Features

Tech Stack

Installation

Usage

Folder Structure

Contributing

License

Features
Responsive Design: Optimized for desktop, tablet, and mobile devices.

Animated Hero Section: Smooth transitions and animations using Framer Motion.

State Management with MobX: Efficient state management for shopping cart and user authentication.

Social Media Integration: Links to social media accounts on the banner.

Login Modal: Allows users to log in with a simple authentication flow.

Customer Reviews: Displays customer feedback with a dynamic slider.

Interactive Navigation: User-friendly navigation with clear call-to-actions.

Tech Stack
React: JavaScript library for building user interfaces.

Framer Motion: Animation library for React.

MobX: State management for React applications.

React Router: For navigation between different pages.

SCSS: CSS preprocessor for styling.

Installation
Prerequisites
Ensure you have the following installed:

Node.js (v14 or later)

npm (or yarn)

Steps to Install
Clone the repository:
git clone https://github.com/your-username/bookstore-webapp.git

Navigate to the project directory:
cd bookstore-webapp

Install dependencies:
npm install

Run the development server:
npm start

This will start the application on http://localhost:3000.

Usage
Login: Click on the "Log in" button in the header to open the login modal.
Shop Books: Navigate to the "Bookshop" page to browse books.
Cart: Add items to the cart and navigate to the cart page to view your selections.
Social Media: Follow the bookstore on Facebook, Instagram, and LinkedIn via the footer.

Folder Structure
Here’s an overview of the project folder structure:

/bookstore-webapp
│
├── /public               # Static assets like images, icons, etc.
├── /src
│   ├── /assets           # Images, icons, etc.
│   ├── /components       # React components (Banner, Header, Footer, etc.)
│   ├── /pages            # Pages like Home, About, Shop, etc.
│   ├── /stores           # MobX state management stores
│   ├── /styles           # SCSS files for styling
│   └── /App.js           # Main app component
│
├── .gitignore            # Files to ignore in Git
├── package.json          # Project metadata and dependencies
├── README.md             # This file
└── /node_modules         # Project dependencies (auto-generated)


Fork the repository.

Create a new branch (git checkout -b feature-branch).

Make your changes.

Commit your changes (git commit -am 'Add new feature').

Push to your branch (git push origin feature-branch).

Open a pull request to merge your changes.

License
This project is licensed under the MIT License - see the LICENSE file for details.
