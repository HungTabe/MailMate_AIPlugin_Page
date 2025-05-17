import * as React from 'react';
import { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppTheme from '../../../shared-theme/AppTheme';
import SideMenu from '../../components/SideMenu';
import AppNavbar from '../../components/AppNavbar';
import Stack from '@mui/material/Stack';
import Header from '../../components/Header';
import { Box } from '@mui/material';
import { alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import AddressForm from './components/AddressForm';
import Info from './components/Info';
import InfoMobile from './components/InfoMobile';
import PaymentForm from './components/PaymentForm';
import Review from './components/Review';
import SitemarkIcon from './components/SitemarkIcon';

const steps = ['Customer details', 'Payment details', 'Review your order'];

function getStepContent(step, planType, setPlanType) {
  switch (step) {
    case 0:
      return <AddressForm planType={planType} setPlanType={setPlanType} />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

export default function MAILMate_Checkout_page(props) {
  const [activeStep, setActiveStep] = useState(0);
  const [planType, setPlanType] = useState(''); // State cho subscription
  const [totalPrice, setTotalPrice] = useState('0.000 VND'); // State cho tổng giá
  const [error, setError] = useState(''); // State cho lỗi

  // Cập nhật totalPrice dựa trên planType
  useEffect(() => {
    const priceMap = {
      Free: 0,
      Pro: 49,
      Business: 79,
    };
    const price = priceMap[planType] || 0;
    setTotalPrice(`${price.toFixed(3)} VND`);
  }, [planType]);

  const handleNext = () => {
    setActiveStep(activeStep + 2);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleCheckout = () => {
    if (!planType) {
      setError('Vui lòng chọn một gói đăng ký.');
      return;
    }
    setError('');
    handleNext();
  };

  const handlePlaceOrder = async () => {
    if (!planType) {
      setError('Vui lòng chọn một gói đăng ký.');
      return;
    }

    // Lấy token từ localStorage
    const token = localStorage.getItem('token');
    if (!token) {
      setError('Vui lòng đăng nhập để tiếp tục thanh toán.');
      return;
    }

    setError('');
    try {
      const planTypeMap = {
        Free: 0,
        Pro: 1,
        Business: 2,
      };
      const amount = parseFloat(totalPrice.replace(' VND', '')) || 0;
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/Payment/create-payment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          userId: '5CB49C06-3A58-4726-978D-1512B32D0A7E', // Backend sẽ lấy từ JWT
          planType: planTypeMap[planType],
          amount: amount,
          returnUrl: 'https://your-ngrok-id.ngrok.io/success',
          cancelUrl: 'https://your-ngrok-id.ngrok.io/cancel',
        }),
      });

      if (!response.ok) {
        if (response.status === 401) {
          setError('Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại.');
        } else {
          const errorData = await response.json();
          setError(`Yêu cầu thanh toán thất bại: ${errorData.message || response.statusText}`);
        }
        return;
      }

      const result = await response.json();
      window.location.href = result.checkoutUrl; // Redirect đến PayOS checkout
    } catch (error) {
      setError(`Lỗi khi tạo link thanh toán: ${error.message}`);
    }
  };

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: 'flex' }}>
        <SideMenu />
        <AppNavbar />
        <Box
          component="main"
          sx={(theme) => ({
            flexGrow: 1,
            backgroundColor: theme.vars
              ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
              : alpha(theme.palette.background.default, 1),
            overflow: 'auto',
          })}
        >
          <Stack
            spacing={2}
            sx={{
              alignItems: 'center',
              mx: 3,
              pb: 1,
              mt: { xs: 8, md: 0 },
            }}
          >
            <Header />
          </Stack>

          <Grid
            container
            sx={{
              height: {
                xs: '100%',
                sm: 'calc(100dvh - var(--template-frame-height, 0px))',
              },
              mt: {
                xs: 4,
                sm: 0,
              },
            }}
          >
            <Grid
              size={{ xs: 12, sm: 5, lg: 4 }}
              sx={{
                display: { xs: 'none', md: 'flex' },
                flexDirection: 'column',
                backgroundColor: 'background.paper',
                borderRight: { sm: 'none', md: '1px solid' },
                borderColor: { sm: 'none', md: 'divider' },
                alignItems: 'start',
                pt: 3,
                px: 10,
                gap: 4,
              }}
            >
              <SitemarkIcon sx={{ fontSize: 60 }} />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  width: '100%',
                  maxWidth: 500,
                }}
              >
                <Info totalPrice={totalPrice} />
              </Box>
            </Grid>
            <Grid
              size={{ sm: 12, md: 7, lg: 8 }}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '100%',
                width: '100%',
                backgroundColor: {
                  xs: 'transparent',
                  sm: 'background.default',
                },
                alignItems: 'start',
                pt: { xs: 0, sm: 2 },
                px: { xs: 2, sm: 10 },
                gap: { xs: 4, md: 8 },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: { sm: 'space-between', md: 'flex-end' },
                  alignItems: 'center',
                  width: '100%',
                  maxWidth: { sm: '100%', md: 600 },
                }}
              >
                <Box
                  sx={{
                    display: { xs: 'none', md: 'flex' },
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    flexGrow: 1,
                  }}
                >
                  <Stepper
                    id="desktop-stepper"
                    activeStep={activeStep}
                    sx={{ width: '100%', height: 40 }}
                  >
                    {steps.map((label) => (
                      <Step
                        sx={{
                          ':first-child': { pl: 0 },
                          ':last-child': { pr: 0 },
                        }}
                        key={label}
                      >
                        <StepLabel>{label}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                </Box>
              </Box>
              <Card sx={{ display: { xs: 'flex', md: 'none' }, width: '100%' }}>
                <CardContent
                  sx={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <Typography variant="subtitle2" gutterBottom>
                      Selected products
                    </Typography>
                    <Typography variant="body1">{totalPrice}</Typography>
                  </div>
                  <InfoMobile totalPrice={totalPrice} />
                </CardContent>
              </Card>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  width: '100%',
                  maxWidth: { sm: '100%', md: 600 },
                  maxHeight: '720px',
                  gap: { xs: 2, md: 'none' },
                }}
              >
                <Stepper
                  id="mobile-stepper"
                  activeStep={activeStep}
                  alternativeLabel
                  sx={{ display: { sm: 'flex', md: 'none' } }}
                >
                  {steps.map((label) => (
                    <Step
                      sx={{
                        ':first-child': { pl: 0 },
                        ':last-child': { pr: 0 },
                        '& .MuiStepConnector-root': { top: { xs: 6, sm: 12 } },
                      }}
                      key={label}
                    >
                      <StepLabel
                        sx={{
                          '.MuiStepLabel-labelContainer': { maxWidth: '70px' },
                        }}
                      >
                        {label}
                      </StepLabel>
                    </Step>
                  ))}
                </Stepper>
                {activeStep === steps.length ? (
                  <Stack spacing={2} useFlexGap>
                    <Typography variant="h1">📦</Typography>
                    <Typography variant="h5">
                      Thank you for your order!
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: 'text.secondary' }}
                    >
                      Your order number is
                      <strong> #140396</strong>. We have emailed your order
                      confirmation and will update you once its shipped.
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
                        alignSelf: 'start',
                        width: { xs: '100%', sm: 'auto' },
                      }}
                    >
                      Go to my orders
                    </Button>
                  </Stack>
                ) : (
                  <React.Fragment>
                    {getStepContent(activeStep, planType, setPlanType)}
                    {error && (
                      <Typography color="error" sx={{ mt: 0 }}>
                        {error}
                      </Typography>
                    )}
                    <Box
                      sx={[
                        {
                          display: 'flex',
                          flexDirection: { xs: 'column-reverse', sm: 'row' },
                          alignItems: 'end',
                          flexGrow: 1,
                          gap: 1,
                          pb: { xs: 12, sm: 0 },
                          mt: { xs: 2, sm: 0 },
                          mb: '60px',
                        },
                        activeStep !== 0
                          ? { justifyContent: 'space-between' }
                          : { justifyContent: 'flex-end' },
                      ]}
                    >
                      {activeStep !== 0 && (
                        <Button
                          startIcon={<ChevronLeftRoundedIcon />}
                          onClick={handleBack}
                          variant="text"
                          sx={{ display: { xs: 'none', sm: 'flex' } }}
                        >
                          Previous
                        </Button>
                      )}
                      {activeStep !== 0 && (
                        <Button
                          startIcon={<ChevronLeftRoundedIcon />}
                          onClick={handleBack}
                          variant="outlined"
                          fullWidth
                          sx={{ display: { xs: 'flex', sm: 'none' } }}
                        >
                          Previous
                        </Button>
                      )}
                      <Button
                        variant="contained"
                        endIcon={<ChevronRightRoundedIcon />}
                        onClick={handlePlaceOrder}
                        sx={{ width: { xs: '100%', sm: 'fit-content' } }}
                      >
                        {activeStep === steps.length - 1 ? 'Place order' : 'Check out'}
                      </Button>
                    </Box>
                  </React.Fragment>
                )}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </AppTheme>
  );
}