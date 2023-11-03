'use client'
import React, { useState } from 'react';
import { alpha, Box } from "@mui/system";
import { Stack, Grid } from "@mui/material";
import Typography from '@/components/typography';
import { WarningButton } from '@/components/button';
import { Columns } from 'lucide-react';

interface SubscriptionPlan {
  name: string;
  price: string;
  desc:string;

}
interface TaxPlanType {
  name: string;
  price: string;
  range: string;
}

const PriceSubscriptionPlan: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Bookkeeping');
  const [sliderValue, setSliderValue] = useState<number>(1);

  // Define your subscription plans
  const subscriptionPlans: SubscriptionPlan[] = [
    { name: 'Essential', price: '900 AED' ,desc:'For enetities thats just getting started'},
    { name: 'Pro', price: '1600 AED', desc:'For entities with simplified requirements'},
    { name: 'Pro+', price: '2300 AED',desc:'For entities with detailed needs' },
    { name: 'Custom', price: ' ' ,desc:'Let us built a customized strategy to fit your needs'},
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
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(e.target.value));
  };

  const selectedPlan = getSelectedPlan(sliderValue);
  const buttonText = "Get started"; // Sample button text

const renderCard = (title: string, subscription: string, price: string, desc: string) => (
  <Grid item xs={12} sm={6} md={12} key={title}>
      <Box sx={{ backgroundColor: alpha("#f5f5f5", 0.5),p:3,   height: title === 'Tax' ? '60px' : '100%',  }}>
        <Stack spacing={1}>
          <Typography variant="h4"  sx={{ fontWeight: 900 }} align="center" color="#1A4742">
            {title}
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 500 }} align="center" color="#1A4742">
            {subscription} 
          </Typography>
          <Stack direction={`row`} justifyContent={`center`} alignItems={`center`} sx={{ color: "#1A4742" }}>
            <Typography variant="h4">
              {price}
            </Typography>
            {title === 'Bookkeeping' && subscription !== 'Custom' && (
              <Typography variant="body1"  color="#1A4742">
                &nbsp;/ month
              </Typography>
            )}
            </Stack>
          <Typography variant="h6"  align="center" color="#1A4742">{desc}</Typography>
        </Stack>
      </Box>
      <Box sx={{p: 5,height: '300px'}}>
        <Stack direction="column" >
          {title === 'Tax' && (
              <Grid container spacing={3}>
                {TaxData.map((item, index) => (
                  <Grid item xs={4} key={index}>
                    <Box className=" bg-slate-200  p-20 rounded-3xl">
                      <div className="mb-3">
                        <Typography variant="h5"  sx={{ fontWeight: 900 }} align="left" color="#1A4742">
                          {item.name}
                        </Typography>
                      </div>
                      <div className="mt-3">
                        <button className="btn btn-sm btn-success text-white" style={{ backgroundColor: '#1A4742' }}> {item.price}</button>
                      </div>

                      <div className="mt-3"> 
                        <Typography variant="h6" color="#1A4742" gutterBottom>
                      ( {item.range} )
                        </Typography>
                      </div>
                    
                    
                    </Box>
                  </Grid>
                ))}
              </Grid>
          )}
          {title === 'Bookkeeping' && (
              <div className="w-full max-w-md   text-center">
                <Typography variant="body1" color="#1A4742" gutterBottom>
                  If you had
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 600 }} color="#1A4742">
                  {sliderValue === 175001 ? '175000+ AED' : `${sliderValue} AED`}
                </Typography>
                <Typography variant="body1" color="#1A4742" gutterBottom>
                  expenses for the month
                </Typography>
                <div className="py-5" style={{ width: '400px'}}>
                  <input
                    id="price-ranger"
                    min="0"
                    max="175001"
                    type="range"
                    value={sliderValue}
                    className="w-full bg-gray-200 range range-accent range-sm"
              
                    onChange={handleSliderChange}
                  />
                </div>
              </div>
          )}
          {title === 'CFO' && (
              <Stack direction="row" spacing={1} sx={{ height: '150px' }}>
                <Typography variant="h3" color="#1A4742" align="center" >
                  Coming Soon...
                </Typography>
              </Stack>
          )}
            <Stack alignItems="center"  sx={{ paddingTop: '20px', color:"#1A4742"}}>
              <WarningButton>{buttonText}</WarningButton>
            </Stack>
          </Stack>
      </Box>
      
    </Grid>
  );
  
 

  return (
    <>
      <div className="join flex justify-center py-5 px-4">
           <input
          key={2}
          className={`join-item btn btn-square px-4 py-2 text-white ${activeTab === 'Bookkeeping' ? 'active' : ''}`}
          style={{ backgroundColor: '#1A4742' }}
          type="radio"
          name="options"
          aria-label={'Tax'}
          onClick={() => handleTabClick('Tax')}
        />
        <input
          key={1}
          className={`join-item btn btn-square px-4 py-2 text-white ${activeTab === 'Tax' ? 'active' : ''}`}
          style={{ backgroundColor: '#1A4742' }}
          type="radio"
          name="options"
          aria-label={'Bookkeeping'}
          onClick={() => handleTabClick('Bookkeeping')}
        />
     
        <input
          key={3}
          className={`join-item btn btn-square px-4 py-2 text-white${activeTab === 'CFO' ? 'active' : ''}`}
          style={{ backgroundColor: '#1A4742' }}
          type="radio"
          name="options"
          aria-label={'CFO'}
        onClick={() => handleTabClick('CFO')}
        />
      </div>
      <Box sx={{display: 'flex',justifyContent: 'center',}}>
        <Grid>
          {activeTab === 'Tax' && (
            <Grid item xs={12} sm={10} md={12}>
              {renderCard('Tax', '', '', '')}
            </Grid>
          )}
          {activeTab === 'Bookkeeping' && (
            <Grid item xs={12} sm={12} md={12}>
              {renderCard('Bookkeeping', selectedPlan.name, selectedPlan.price, selectedPlan.desc)}
            </Grid>
          )}
          {activeTab === 'CFO' && (
            <Grid item xs={12} sm={12} md={12}>
              {renderCard('CFO', '', '', '')}
            </Grid>
          )}
        </Grid>
      </Box>
    </>
  );
  
};

export default PriceSubscriptionPlan;
