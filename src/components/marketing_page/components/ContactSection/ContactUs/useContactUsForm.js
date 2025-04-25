import { useState } from 'react';
import axios from 'axios';

const useContactUsForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    planType: '',
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

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        planType: value,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        planType: prev.planType === value ? '' : prev.planType,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');

    // Validate form data
    if (!formData.fullName || !formData.email || !formData.planType) {
      setError('Please fill in all required fields: Name, Email, and Plan Type.');
      setIsLoading(false);
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.');
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post('https://mailmatebe-akg9fhe2fddfhrbt.canadacentral-01.azurewebsites.net/api/marketing/consultation-request', {
        fullName: formData.fullName,
        email: formData.email,
        phoneNumber: formData.phoneNumber || null,
        planType: formData.planType,
      });

      setSuccess(response.data.message || 'Consultation request submitted successfully!');
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        planType: '',
      });
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred while submitting your request.');
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
    handleCheckboxChange,
    handleSubmit,
  };
};

export default useContactUsForm;