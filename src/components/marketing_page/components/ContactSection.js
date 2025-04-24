import ContactUs from './ContactUs';
import './ContactSection.css';
import Typography from '@mui/material/Typography';

export default function ContactSection() {
    return (
        
        <div className='contactlayout MuiContainer-root MuiContainer-maxWidthLg css-1649zvi-MuiContainer-root'>
        <div className='contactlayout-left'>
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{ color: 'text.primary' }}
        >
          Setup MAILMate WaitingList Now
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Don't miss out — Upgrade your working performance today <br /> Get more information throught Email about our subsciption.
        </Typography>
        </div>
        <ContactUs/>
        </div>
    )
}
