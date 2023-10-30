'use client'
import React, { useState } from 'react';
import { alpha, Box } from "@mui/system";
import { Stack, Grid } from "@mui/material";
import Typography from '@/components/typography';
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { WarningButton } from '@/components/WarningButton';

interface SubscriptionPlan {
  name: string;
  price: string;
  range: string;
}

const Page: React.FC = () => {
  const [sliderValue, setSliderValue] = useState<number>(1);

  // Define your subscription plans
  const subscriptionPlans: SubscriptionPlan[] = [
    { name: 'Essential', price: '900 AED', range: '0-49999 AED' },
    { name: 'Pro', price: '1600 AED', range: '50000-99999 AED' },
    { name: 'Pro+', price: '2300 AED', range: '100000-174999 AED' },
    { name: 'Custom', price: '~', range: '175000+ AED' },
  ];

  const sampleData = [
    { text: "All limited links" },
    { text: "Own analytics platform" },
    { text: "Chat support" },
    { text: "Optimize hashtags" },
    { text: "Unlimited users" },
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
  const buttonText = "Get started"; // Sample button text

  const renderCard = (title: string, description: string, price: string, priceLabel: string) => (
    <Grid item xs={12} sm={6} md={4} key={title}>
      <Box
        sx={{
          border: 1,
          borderRadius: "10px",
          borderColor: "#E9EEBD",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          transition: "transform 0.2s",
          "&:hover": {
            transform: "scale(1.1)",
          },
        
        }}
      >
        <Box sx={{ backgroundColor: alpha("#f5f5f5", 0.5), p: 3, height: '100%' }}>
          <Stack spacing={1}>
            <Typography variant="h4" sx={{ fontWeight: 900 }} align="center" color="#034A75">
              {title}
            </Typography>
            <Typography type="description" align="center" color="#034A75">
              {description}
            </Typography>
            <Stack direction={`row`} justifyContent={`center`} alignItems={`center`} sx={{ color: "#034A75" }}>
              <Typography variant="h3">
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
          <Stack direction="column" spacing={2}>
            {title === 'Tax' && sampleData.map((item, index) => (
              <Stack direction="row" spacing={1} key={index}>
                <CheckCircleOutlineIcon sx={{ color: 'grey' }} />
                <Typography type="list-item">{item.text}</Typography>
              </Stack>
            ))}
            {title === 'Accounting' && (
              <Stack direction="row" spacing={1}>
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
              </Stack>
            )}
            {title === 'CFO' && (
             <Stack direction="row" spacing={1}  sx={{ height: '150px' }}>
             <Typography variant="h3" color="#034A75" align="center" sx={{ padding: '15px' }} >
               Coming Soon...
             </Typography>
           </Stack>
           
            )}
            <Stack alignItems="center">
              <WarningButton
                variant="outlined"
                size="large"
                sx={{
                  width: 200,
                  border: 2,
                  "&:hover": {
                    border: 2,
                    transform: "scale(1.1)",
                    borderColor: "#F4CA40",
                  },
                  textTransform: "none",
                  color: "#F4CA40",
                  borderColor: "#F4CA40",
                }}
              >
                {buttonText}
              </WarningButton>
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
    <Box sx={{ paddingLeft: { xs: 0, md: 30 }, paddingRight: { xs: 0, md: 30 } }}>
    <Box sx={{ height: containerHeight  }}>
      <Grid container spacing={4} >
        {renderCard('Tax', 'Ideal for growing business that need more support', '$899', '/mobiled annually')}
        {renderCard('Accounting', selectedPlan.name, selectedPlan.price, '/month')}
        {renderCard('CFO', 'Ideal for small business', '', '')}
      </Grid>
    </Box>
  </Box>
  );
}

export default Page;