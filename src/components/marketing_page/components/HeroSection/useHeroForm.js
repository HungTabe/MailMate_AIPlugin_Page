import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const useHeroForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    phoneNumber: '+00000000000',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');

    const toastId = toast.loading('Submitting your request...');

    // Validate email
    if (!formData.email) {
      setError('Please enter your email address.');
      toast.update(toastId, { render: 'Please enter your email address.', type: 'error', isLoading: false, autoClose: 3000 });
      setIsLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.');
      toast.update(toastId, { render: 'Please enter a valid email address.', type: 'error', isLoading: false, autoClose: 3000 });
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post('https://mailmatebe-akg9fhe2fddfhrbt.canadacentral-01.azurewebsites.net/api/marketing/consultation-request', {
        fullName: 'Customer', // Fixed value as per requirement
        email: formData.email,
        phoneNumber: '+84123456789',
        planType: 'Free', // Fixed value as per requirement
      });

      setSuccess(response.data.message || 'Consultation request submitted successfully!');
      toast.update(toastId, { render: response.data.message || 'Consultation request submitted successfully!', type: 'success', isLoading: false, autoClose: 3000 });
      setFormData({
        email: '',
        phoneNumber: '',
      });
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred while submitting your request.');
      toast.update(toastId, { render: error.response?.data?.message || 'An error occurred while submitting your request.', type: 'error', isLoading: false, autoClose: 3000 });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    isLoading,
    error,
    success,
    handleInputChange,
    handleSubmit,
  };
};

export default useHeroForm;