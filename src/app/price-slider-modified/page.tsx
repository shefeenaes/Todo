'use client'
import React, { useState } from 'react';
import { alpha, Box } from "@mui/system";
import { Stack, Grid } from "@mui/material";
import Typography from '@/components/typography';
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { WarningButton } from '@/components/button';
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import MainSection from '@/components/main-section';
interface SubscriptionPlan {
  name: string;
  price: string;
  range: string;
}
interface TaxPlanType {
  name: string;
  price: string;
  range: string;
}

const Page: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Accounting');
  const [sliderValue, setSliderValue] = useState<number>(1);

  // Define your subscription plans
  const subscriptionPlans: SubscriptionPlan[] = [
    { name: 'Essential', price: '900 AED', range: '0-49999 AED' },
    { name: 'Pro', price: '1600 AED', range: '50000-99999 AED' },
    { name: 'Pro+', price: '2300 AED', range: '100000-174999 AED' },
    { name: 'Custom', price: '~', range: '175000+ AED' },
  ];

  const TaxData:TaxPlanType[] = [
    { name: "VAT registration" ,price: '600 AED', range: 'One time'},
    { name: "Vat review & filing",price: '1250 AED', range: 'Quarterly' },
    { name: "CT registeration" ,price: '500 AED', range: 'One time'},
    
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

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const selectedPlan = getSelectedPlan(sliderValue);
  const buttonText = "Get started"; // Sample button text

const renderCard = (title: string, description: string, price: string, priceLabel: string) => (
  <Grid item xs={12} sm={6} md={11} key={title}>
    <Box
      sx={{
        border: 1,
        width: title === 'Tax' ? '400px' : '400px', // Set the desired width
        minHeight: title === 'Tax' ? '600px' : '400px', // Set the desired height
        borderRadius: "10px",
        borderColor: "#E9EEBD",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        transition: "transform 0.2s",
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <Box sx={{ backgroundColor: alpha("#f5f5f5", 0.5),p:3, height: '100%' }}>
        <Stack spacing={1}>
          <Typography variant="h4"  sx={{ fontWeight: 900 }} align="center" color="#034A75">
            {title}
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 500 }} align="center" color="#034A75">
            {description}
          </Typography>
          <Stack direction={`row`} justifyContent={`center`} alignItems={`center`} sx={{ color: "#034A75" }}>
            <Typography variant="h4">
              {price}
            </Typography>
            <Typography variant="body1">{priceLabel}</Typography>
          </Stack>
        </Stack>
      </Box>
      <Box sx={{
        p: 2,
        height: '300px', // Set your desired height here
      }}>
        <Stack direction="column" >
        {title === 'Tax' && TaxData.map((item, index) => (
          <div key={index} className="mb-4 overflow-hidden">
            <div className="w-full max-w-lg p-1 stats bg-gray-200 text-gray-content overflow-hidden">
              <div className="stat overflow-hidden">
                <div className="stat-value text-base text-gray-600">{item.name}</div>
                <div className="stat-actions">
                <button className="btn btn-sm btn-success ">{item.price}</button>

                </div>
              </div>
              <div className="stat overflow-hidden">
                <div className="stat-actions">
                  <button className="btn btn-sm">{item.range}</button>
                </div>
              </div>
            </div>
          </div>
        ))}   
    
          {title === 'Accounting' && (
            <div>
              <div className="w-full max-w-lg mx-auto p-4">
                <Typography variant="body2" color="#034A75" gutterBottom>
                  If you had
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 600 }} color="#034A75">
                  {sliderValue} AED
                </Typography>
                <Typography variant="body2" color="#034A75" gutterBottom>
                  expenses for the month (dynamically calculated)
                </Typography>
                <div className='py-5'>
                  <input
                    id="price-ranger"
                    min="0"
                    max="500001"
                    type="range"
                    value={sliderValue}
                    className="w-full bg-gray-200 range range-accent range-sm"
                    onChange={handleSliderChange}
                  />
                </div>
              </div>
            </div>
          )}
          
          {title === 'CFO' && (
            <Stack direction="row" spacing={1} sx={{ height: '150px' }}>
              <Typography variant="h3" color="#034A75" align="center" sx={{ padding: '15px' }}>
                Coming Soon...
              </Typography>
            </Stack>
          )}
          <Stack alignItems="center">
          <WarningButton>{buttonText}</WarningButton>

           
          </Stack>
        </Stack>
      </Box>
    </Box>
  </Grid>
);


  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(e.target.value));
  };

  const containerHeight = {
    xs: 'auto', // For extra small screens (mobile)
    md: 'auto',  // For medium and larger screens
  };

  // Render the three boxes within a container with the same height
  return (
    <>
      <div className="join" style={{ display: 'flex', justifyContent: 'center', paddingBottom: '80px' }}>
        <input
          key={1}
          className={`join-item btn btn-square px-4 py-2 ${activeTab === 'Accounting' ? 'active' : ''}`}
          type="radio"
          name="options"
          aria-label={'Accounting'}
          onClick={() => handleTabClick('Accounting')}
        />
        <input
          key={2}
          className={`join-item btn btn-square px-4 py-2 ${activeTab === 'Tax' ? 'active' : ''}`}
          type="radio"
          name="options"
          aria-label={'Tax'}
          onClick={() => handleTabClick('Tax')}
        />
        <input
          key={3}
          className={`join-item btn btn-square px-4 py-2 ${activeTab === 'CFO' ? 'active' : ''}`}
          type="radio"
          name="options"
          aria-label={'CFO'}
          onClick={() => handleTabClick('CFO')}
        />
      </div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center', // Center align the tab buttons
       
        }}
      >
        <Box sx={{ height: containerHeight }}>
        <Grid container >
  {activeTab === 'Tax' && (
    <>
    <Grid item xs={12} sm={6} md={12}>
      {renderCard('Tax', '', '', '')}
    </Grid>
    
    </>
  )}
  {activeTab === 'Accounting' && (
    <>
      <Grid item xs={12} sm={6} md={12}>
        {renderCard('Accounting', selectedPlan.name, selectedPlan.price, '/month')}
      </Grid>
    </>
  )}
  {activeTab === 'CFO' && (
    <Grid item xs={12} sm={6} md={12}>
      {renderCard('CFO', 'Ideal for small business', '', '')}
    </Grid>
  )}
</Grid>
        </Box>
      </Box>
    </>
  );
  
};

export default Page;
