import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';
import './ContactUs.css';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export default function ContactUs() {
  return (
    <div className='ContactUsForm'>
    <Grid container spacing={3} >
      <FormGrid size={{ xs: 12, md: 6 }}>
        <FormLabel htmlFor="first-name" required>
          Your name
        </FormLabel>
        <OutlinedInput
          id="first-name"
          name="first-name"
          type="name"
          placeholder="John"
          autoComplete="first name"
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 12, md: 6 }}>
        <FormLabel htmlFor="last-name" required>
          Your mail
        </FormLabel>
        <OutlinedInput
          id="last-name"
          name="last-name"
          type="last-name"
          placeholder="John@gmail.com"
          autoComplete="last name"
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 12 }}>
        <FormLabel htmlFor="address1">
          Phone Number
        </FormLabel>
        <OutlinedInput
          id="address1"
          name="address1"
          type="address1"
          placeholder="Street name and number"
          autoComplete="shipping address-line1"
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 12 }}>
        <FormLabel htmlFor="last-name" required>
          MAILMate subscription
        </FormLabel>
        <FormControlLabel
          control={<Checkbox name="saveAddress" value="yes" />}
          label="Free Ticket"
        />
        <FormControlLabel
          control={<Checkbox name="saveAddress" value="yes" />}
          label="Pro Ticket"
        />
        <FormControlLabel
          control={<Checkbox name="saveAddress" value="yes" />}
          label="Business Ticket"
        />
      </FormGrid>
      <FormGrid size={{ xs: 12 }}>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
      </FormGrid>
    </Grid>
    </div>
  );
}