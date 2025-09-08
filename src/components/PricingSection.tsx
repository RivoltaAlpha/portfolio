import React from 'react'
import { Check } from 'lucide-react'
export function PricingSection() {
  const plans = [
    {
      name: 'Basic',
      price: '$499',
      description: 'Perfect for small projects',
      features: [
        'Single service',
        '14-day delivery',
        '2 revisions',
        'Email support',
      ],
      isPopular: false,
      buttonText: 'Get Started',
    },
    {
      name: 'Professional',
      price: '$999',
      description: 'Ideal for growing businesses',
      features: [
        'Two services',
        '10-day delivery',
        '5 revisions',
        'Priority email support',
        '30-day maintenance',
      ],
      isPopular: true,
      buttonText: 'Choose Professional',
    },
    {
      name: 'Enterprise',
      price: '$2499',
      description: 'For large-scale projects',
      features: [
        'All services',
        '7-day delivery',
        'Unlimited revisions',
        '24/7 phone support',
        '90-day maintenance',
        'Custom integrations',
      ],
      isPopular: false,
      buttonText: 'Contact Us',
    },
  ]
  return (
    <>
    <section id="pricing" className="py-20 px-4 bg-[#1d2842]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing Plans</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect package that fits your project requirements
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg overflow-hidden ${plan.isPopular ? 'transform scale-105 z-10' : ''}`}
            >
              {plan.isPopular && (
                <div className="bg-blue-600 text-white py-2 text-center font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-bold text-gray-800">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 ml-1 mb-1">/ project</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <Check size={20} className="text-green-500 mr-2" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="#contact"
                  className={`block text-center py-3 px-4 rounded-md font-medium ${plan.isPopular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'} transition-colors`}
                >
                  {plan.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
        </>
  )
}
