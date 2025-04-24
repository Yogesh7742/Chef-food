// AboutPage.js
import React from "react";
import BestRestaurants from "../components/BestRestaurants";

const About = () => {
  return (
    <>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="py-16 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg my-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            About Swiggy
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            India's largest and most loved food delivery platform
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
            Our Story
          </h2>
          <div className="space-y-6 text-lg text-gray-600">
            <p>
              Chef's Food is not just a meal, it’s an experience. Every dish is
              crafted with love and precision by our skilled chefs, using the
              freshest ingredients and time-honored recipes
            </p>
            <p>
              It's a perfect blend of rich flavors, authentic spices, and
              premium quality — that brings you the true joy of delicious food.
            </p>
            <p>
              Whether it's a spicy Indian curry, a freshly prepared Italian
              pasta, or a hearty healthy soup — Chef's Food brings flavors that
              make every bite memorable. It’s where great taste meets great
              care, all plated with passion and soul.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-orange-600 text-white py-16 rounded-lg mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
            <div className="p-6">
              <p className="text-5xl font-extrabold">10M+</p>
              <p className="mt-2 text-lg font-medium">Monthly Orders</p>
            </div>
            <div className="p-6">
              <p className="text-5xl font-extrabold">200+</p>
              <p className="mt-2 text-lg font-medium">Cities</p>
            </div>
            <div className="p-6">
              <p className="text-5xl font-extrabold">150K+</p>
              <p className="mt-2 text-lg font-medium">Restaurant Partners</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
            Our Mission
          </h2>
          <div className="space-y-6 text-lg text-gray-600">
            <p>
              At Swiggy, we're on a mission to revolutionize food delivery in
              India by providing lightning-fast delivery, an unparalleled
              selection of restaurants, and a seamless ordering experience.
            </p>
            <p>
              We believe in delivering more than just food - we deliver
              experiences, convenience, and happiness to millions of customers
              every day.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-12 bg-gray-50 rounded-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Leadership Team
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <TeamMember
              name="Sriharsha Majety"
              role="Co-founder & CEO"
              bio="Drives CHEF Food vision and overall strategy"
            />
            <TeamMember
              name="Nandan Reddy"
              role="Co-founder"
              bio="Leads product and technology initiatives"
            />
            <TeamMember
              name="Rahul Bothra"
              role="CFO"
              bio="Oversees financial strategy and operations"
            />
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
            Our Values
          </h2>
          <div className="space-y-8">
            <ValueItem
              title="Customer First"
              description="We obsess over our customers and work backwards to solve their problems."
            />
            <ValueItem
              title="Ownership"
              description="We take end-to-end responsibility for outcomes and deliver with excellence."
            />
            <ValueItem
              title="Innovation"
              description="We challenge the status quo and continuously look for better ways to do things."
            />
            <ValueItem
              title="Integrity"
              description="We do the right thing, even when no one is watching."
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          <span className="block">Join us in our journey</span>
          <span className="block text-orange-600">
            to revolutionize food delivery
          </span>
        </h2>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700"
            >
              Explore Careers
            </a>
          </div>
          <div className="ml-3 inline-flex">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-orange-700 bg-orange-100 hover:bg-orange-200"
            >
              Partner with us
            </a>
          </div>
        </div>
      </div>
    </div>
    <BestRestaurants/>
    </>
  );
};

// Team Member Component
const TeamMember = ({ name, role, bio }) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <div className="flex items-center">
          <div className="flex-shrink-0 bg-orange-500 rounded-md p-3">
            <svg
              className="h-10 w-10 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <div className="ml-4">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              {name}
            </h3>
            <p className="text-sm text-orange-600">{role}</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-500">{bio}</p>
        </div>
      </div>
    </div>
  );
};

// Value Item Component
const ValueItem = ({ title, description }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-orange-600">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
};

export default About;
