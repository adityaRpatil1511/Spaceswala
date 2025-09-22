import React from 'react';
import {
  CreditCardIcon,
  SparklesIcon,
  HomeIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'; 


const services = [
  {
    title: 'Pay on Credit',
    description: 'Pay your rent using Credit Card',
    icon: CreditCardIcon,
  },
  {
    title: 'Housing Premium',
    description: 'Instant access to zero brokerage properties',
    icon: SparklesIcon,
  },
  {
    title: 'Home Loans',
    description: 'Lowest Interest rate offers',
    icon: HomeIcon,
  },
  {
    title: 'Housing Protect',
    description: 'Protection against cyber frauds',
    icon: ShieldCheckIcon,
  },
];

export default function HousingEdge() {
  return (
    <section className="bg-white py-10 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
              SpaceWala Edge
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-1">
              Explore property related services
            </p>
          </div>
          <button className="text-purple-600 border border-purple-600 rounded-md px-4 py-2 text-sm hover:bg-purple-50 transition whitespace-nowrap">
            Explore Services →
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-5 flex flex-col space-y-4"
              >
                <div className="bg-purple-100 rounded-full p-3 w-fit">
                  <Icon className="h-8 w-8 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
