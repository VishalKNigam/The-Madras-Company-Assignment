import React from 'react';

const Plans = () => {
  return (
    <div className='py-[100px]'>
      <div className='max-w-[1240px] md:grid grid-cols-3 gap-6 mx-auto'>
        <div className='shadow-xl h-[500px] hover:scale-105 duration-500 p-6'>
          <h2 className="text-3xl font-bold mb-4">Basic Plan</h2>
          <p className="text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
          <p className="text-lg mb-4">Price: $10/month</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Subscribe</button>
        </div>
        <div className='shadow-xl h-[500px] hover:scale-105 duration-500 bg-gray-200 p-6'>
          <h2 className="text-3xl font-bold mb-4">Standard Plan</h2>
          <p className="text-lg mb-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
          <p className="text-lg mb-4">Price: $20/month</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Subscribe</button>
        </div>
        <div className='shadow-xl h-[500px] hover:scale-105 duration-500 p-6'>
          <h2 className="text-3xl font-bold mb-4">Premium Plan</h2>
          <p className="text-lg mb-4">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
          <p className="text-lg mb-4">Price: $30/month</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Plans;
