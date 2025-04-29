import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useSignUpForm = () => {
  // var
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  // function logic
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const toastId = toast.loading("Submitting your request...");

    // Validate form data
    if (!formData.fullName || !formData.email || !formData.password) {
      const errorMessage =
        "Please fill in all required fields: Fullname, Email, Password";
      setError(errorMessage);
      toast.update(toastId, {
        render: errorMessage,
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
      return;
    }

    // validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      const errorMessage = "Please enter a valid email address.";
      setError(errorMessage);
      toast.update(toastId, {
        render: errorMessage,
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
      return;
    }

    try {
      await delay(1000);
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/register`,
        {
          email: formData.email,
          fullName: formData.fullName,
          password: formData.password,
        }
      );

      setSuccess(
        response.data.message || "Register request submitted successfully!"
      );
      setFormData({
        fullName: "",
        email: "",
        password: "",
      });
      toast.update(toastId, {
        render:
          response.data.message || "Register request submitted successfully!",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
      setTimeout(() => {
        navigate("/signin");
      }, 2000); // Chuyển hướng sau 2 giây
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "An error occurred while submitting your request.";
      setError(errorMessage);
      toast.update(toastId, {
        render: errorMessage,
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    } 
  };

  return {
    formData,
    error,
    success,
    handleInputChange,
    handleSubmit,
  };
};

export default useSignUpForm;
