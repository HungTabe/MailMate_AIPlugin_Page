import ContactUs from './ContactUs/ContactUs';
import './ContactSectionStyle.css';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


export default function ContactSection() {
    return (
        <Container
          maxWidth="lg"
          sx={(theme) => ({
            width: '100%',
            height: '40%',
            padding: theme.spacing(0, '11%', '4%', '11%'),
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center', // Thêm để căn giữa theo chiều dọc
          })}
        >
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
        </Container>
    )
}
