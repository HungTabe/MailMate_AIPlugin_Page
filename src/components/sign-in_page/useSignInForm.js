// Import part
import {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const useSignInForm = () => {
    // Vars and Logic Part
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    const submitForm = async (event) => {
        event.preventDefault();
        setError("");
        setSuccess("");
    
        const toastId = toast.loading('Submitting your request...');
    
        try {
          // Dữ liệu đã được validate bởi react-hook-form, gửi trực tiếp
          const response = await axios.post(
            `${process.env.REACT_APP_API_URL}/api/auth/login`,
            {
              email: event.target.email.value,
              password: event.target.password.value,
            }
          );
    
          setSuccess(response.data.message || "Login request submitted successfully!");
          toast.update(toastId, {
            render: response.data.message || 'Login request submitted successfully!',
            type: 'success',
            isLoading: false,
            autoClose: 3000,
          });
          setTimeout(() => {
            navigate('/dashboard');
          }, 2000);
        } catch (error) {
          const errorMessage = error.response?.data?.message || "An error occurred while submitting your request.";
          setError(errorMessage);
          toast.update(toastId, {
            render: errorMessage,
            type: 'error',
            isLoading: false,
            autoClose: 3000,
          });
        }
      };

    // Return Part
    return {
        error,
        success,
        submitForm,
    };
}

export default useSignInForm;