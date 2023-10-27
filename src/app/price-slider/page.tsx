'use client'
import React, { useState } from 'react';

interface SubscriptionPlan {
  name: string;
  price: string;
  range: string;
}

const SubscriptionPlanSlider: React.FC = () => {
  const [sliderValue, setSliderValue] = useState<number>(1);

  // Define your subscription plans
  const subscriptionPlans: SubscriptionPlan[] = [
    { name: 'Essential', price: '900 AED', range: '0-49999 AED' },
    { name: 'Pro', price: '1600 AED', range: '50000-99999 AED' },
    { name: 'Pro+', price: '2300 AED', range: '100000-174999 AED' },
    { name: 'Custom', price: '~', range: '175000+ AED' },
  ];

  // Function to select the appropriate subscription plan based on the slider value
  const getSelectedPlan = (value: number): SubscriptionPlan => {
    if (value >= 175000) {
      return subscriptionPlans[3];
    } else if (value >= 100000) {
      return subscriptionPlans[2];
    } else if (value >= 50000) {
      return subscriptionPlans[1];
    } else {
      return subscriptionPlans[0];
    }
  };

  const selectedPlan = getSelectedPlan(sliderValue);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(e.target.value));
  };

  return (
    <div className="flex justify-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-violet-300">{selectedPlan.name}</h2>
          <h1 className="card-title text-3xl">{selectedPlan.price}/month</h1>
          
          <p className="text-sm mt-4">if you had</p><p className='text-violet-300'> {sliderValue} AED</p><p className="text-sm"> expenses for the month ( dynamically calculated)</p>
          <div className="w-full max-w-lg mx-auto p-4">
          <input
  type="range"
  min="1"
  max="500001"
  value={sliderValue}
  className="w-full"
  id="price-ranger"
  onChange={handleSliderChange}
/>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlanSlider;
