import { useState } from 'react';

const useAddressForm = (initialData = {}) => {
  // State cho form
  const [formData, setFormData] = useState({
    userId: initialData.userId || '',
    planType: initialData.planType || '',
    amount: initialData.amount || 0,
  });

  // Xử lý thay đổi checkbox
  const handleCheckboxChange = (event) => {
    const selectedPlan = event.target.value;
    setFormData({
      ...formData,
      planType: selectedPlan,
      amount: selectedPlan === 'Pro' ? 100 : selectedPlan === 'Business' ? 200 : 0,
    });
  };

  // Xử lý submit form
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.planType) {
      return { success: false, error: 'Vui lòng chọn một gói đăng ký.' };
    }
    try {
      const response = await fetch('https://your-api-domain/api/payment/create-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: formData.userId,
          planType: formData.planType === 'Free' ? 0 : formData.planType === 'Pro' ? 1 : 2,
          amount: formData.amount,
          returnUrl: 'https://your-frontend/success',
          cancelUrl: 'https://your-frontend/cancel',
        }),
      });
      if (!response.ok) {
        throw new Error('Yêu cầu thanh toán thất bại.');
      }
      const result = await response.json();
      return { success: true, checkoutUrl: result.checkoutUrl };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  return {
    formData,
    setFormData,
    handleCheckboxChange,
    handleSubmit,
  };
};

export default useAddressForm;