import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signUp } from "../../backend/authService";

const Register: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { fullName, username, email, password } = formData;

    if (!fullName.trim()) {
      toast.warn("Full Name cannot be empty.");
      return false;
    }
    if (!username.trim()) {
      toast.warn("Username cannot be empty.");
      return false;
    }
    if (!email.trim() || !email.includes("@")) {
      toast.warn("Please enter a valid email address.");
      return false;
    }
    if (password.length < 6) {
      toast.warn("Password must be at least 6 characters long.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    const { email, password, username, fullName } = formData;

    try {
      const response = await signUp(email, password, username, fullName);

      if (response.success) {
        toast.success(response.message || "User created successfully!");
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } else {
        if (response.message.includes("email")) {
          toast.warn("This email is already registered. Please use a different one.");
        } else if (response.message.includes("username")) {
          toast.warn("This username is already taken. Please choose another.");
        } else {
          toast.error(response.message || "Registration failed. Please try again.");
        }
      }
    } catch (error) {
      console.error("Error during sign-up:", error);
      toast.error("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6">
        <h1 className="text-3xl font-semibold mb-6 text-black text-center">
          Sign Up
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
            />
          </div>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </div>
        </form>

        <div className="mt-4 text-sm text-gray-600 text-center">
          <p>
            Already have an account?{" "}
            <a href="/userLogin" className="text-black hover:underline">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
