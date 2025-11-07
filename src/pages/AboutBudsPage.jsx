import React from 'react';

const AboutBudsPage = () => {
  return (
    <div className="bg-gray-50 py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            About Buds
          </h1>
          <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
            Full transparency into our business model, revenue streams, and the value we provide to our partners and members.
          </p>
        </div>

        <div className="mt-12 lg:mt-16">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">Our Monetization Model</h2>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Buds operates on a hybrid model that combines a standard coalition loyalty program with a premium, high-margin revenue stream. This model is designed to be sustainable, scalable, and mutually beneficial for our partners, members, and our platform.
          </p>
        </div>

        <div className="mt-12 lg:mt-16">
          <h3 className="text-2xl font-bold text-gray-900">The 80/20 Split: Standard vs. Premium Rewards</h3>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-gray-900">Standard Buds (80% of Catalog)</h4>
              <p className="mt-2 text-gray-600">The foundation of our loyalty program is a standard coalition model where partners contribute to a shared reward pool. This allows us to offer a wide variety of rewards to all Buds members at no cost to the platform.</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="font-bold text-green-500 mr-2">✓</span>
                  <span><span className="font-bold">Funding Source:</span> Partner-donated inventory (overstock and promotional items)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-green-500 mr-2">✓</span>
                  <span><span className="font-bold">Availability:</span> All Buds members</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-green-500 mr-2">✓</span>
                  <span><span className="font-bold">Economics:</span> 100% margin (cost to Buds is €0)</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-gray-900">Buds Pro Exclusives (20% of Catalog)</h4>
              <p className="mt-2 text-gray-600">The premium tier of our program, Buds Pro, offers exclusive access to high-end products and experiences. This is where we generate the majority of our revenue and provide a unique value proposition for our top members and brand partners.</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="font-bold text-green-500 mr-2">✓</span>
                  <span><span className="font-bold">Funding Source:</span> Brand sponsorships and Buds procurement</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-green-500 mr-2">✓</span>
                  <span><span className="font-bold">Availability:</span> Only Buds Pro members (Our Top 10% of Customers)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-green-500 mr-2">✓</span>
                  <span><span className="font-bold">Economics:</span> Variable margin, high profitability</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 lg:mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center">Revenue Streams</h3>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-gray-900">1. Brand Sponsorships</h4>
              <p className="mt-2 text-gray-600">Brands pay premium fees for access to our high-value audience and exclusive placement in the Buds Pro catalog. This is our primary revenue driver.</p>
              <p className="mt-4 text-lg font-semibold text-gray-700">Primary Revenue Source</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-gray-900">2. Premium Merchandise Margin</h4>
              <p className="mt-2 text-gray-600">We generate a margin on the sale of premium products in the Buds Pro catalog, often through a hybrid model of credits and cash co-pays.</p>
              <p className="mt-4 text-lg font-semibold text-gray-700">Secondary Revenue Source</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutBudsPage;
