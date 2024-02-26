import React from 'react';
import avatar1 from '../assets/cardimages/avatar1.webp';
import avatar2 from '../assets/cardimages/avatar2.jpeg';
import avatar3 from '../assets/cardimages/avatar3.avif';

const CustomersPage = () => {
    // Sample data for customers
    const customers = [
        { id: 1, name: 'Saurabh Yadav', email: 'saurabh@gmail.com', membershipType: 'Student', photo: avatar1 },
        { id: 2, name: 'Meghal Sadhu', email: 'meghal@gmail.com', membershipType: 'Student', photo: avatar2 },
        { id: 3, name: 'Rishi Patel', email: 'rishi@gmail.com', membershipType: 'Employee', photo: avatar3 },
        // Add more customer data as needed
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-5xl text-center font-bold text-black my-5">Our Readers</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {customers.map(customer => (
                    <div key={customer.id} className="bg-yellow-300 shadow-md rounded-md p-4">
                        <div className="flex items-center justify-center mb-4">
                            <img src={customer.photo} alt={customer.name} className="w-20 h-20 rounded-full" />
                        </div>
                        <h2 className="text-lg font-semibold mb-2">{customer.name}</h2>
                        <p className="text-gray-600 mb-2">{customer.email}</p>
                        <p className="text-gray-600 mb-2">{customer.membershipType}</p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300 ease-in-out">
                            View Details
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CustomersPage;
