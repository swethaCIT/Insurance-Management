import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login } from '../../backend/authService';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = formData;
  
    if (!email || !password) {
      toast.warn('Please fill out all fields.');
      return;
    }
  
    setLoading(true);
  
    try {
      const response = await login(email, password);
      console.log('Login response:', response);
  
      if (response?.user) {
        toast.success('Login successful!');
        const role = response.role;
        if (role === 'user') {
          setTimeout(() => {
            navigate("/");
          }, 3000);
        } else if (role === 'agent') {
          setTimeout(() => {
            navigate("/agentDashboard");
          }, 3000);
        } else if (role === 'admin') {
          setTimeout(() => {
            navigate("/adminDashboard");
          }, 3000);
        }
      } else {
        toast.error('Invalid credentials. Please try again.');
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message || 'An error occurred while logging in.');
        console.error('Error during login attempt:', error.message);
      } else {
        toast.error('An unknown error occurred.');
        console.error('Unknown error:', error);
      }
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="w-full bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6">
        <h1 className="text-3xl font-semibold mb-6 text-black text-center">
          Login
        </h1>
        <form className="space-y-4" onSubmit={handleLogin}>
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
              placeholder="Enter your email..."
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
              placeholder="Enter password..."
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </div>
        </form>
        <div className="mt-4 text-sm text-gray-600 text-center">
          <p>
            Don't have an account?{' '}
            <a href="/register" className="text-black hover:underline">
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
