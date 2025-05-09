import axios from "axios";
import { useNavigate } from "react-router-dom";

const useSignInForm = () => {
  const navigate = useNavigate();

  const submitForm = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/login`,
        {
          email: event.target.email.value,
          password: event.target.password.value,
        }
      );

      const message = response.data.message || "Login successfully";

      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);

      return { status: "success", message };
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "An error occurred while submitting your request.";
      return { status: "error", message: errorMessage };
    }
  };

  return {
    submitForm,
  };
};

export default useSignInForm;
