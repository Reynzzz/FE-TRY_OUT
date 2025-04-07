import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button, Form } from 'semantic-ui-react';
import { Mail, Lock } from 'lucide-react';
import Logo from '../assets/Logo-1.png';

function Login() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 to-indigo-800 text-white">
      <div className="flex w-full max-w-4xl bg-white text-gray-800 rounded-lg shadow-xl overflow-hidden">
        {/* Logo Section */}
        <div className="relative w-1/2 flex items-center justify-center bg-gray-800">
          <img src={Logo} alt="Logo" className="absolute w-[400px]" />
        </div>

        {/* Form Section */}
        <div className="w-1/2 p-8 space-y-6">
          <h2 className="text-3xl font-extrabold text-center">Login</h2>

          <Form className="space-y-4">
            <Form.Field>
              <label className="block mb-1 font-medium">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-500" size={20} />
                <Input 
                  fluid 
                  placeholder="Enter your email" 
                  className="pl-10 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </Form.Field>

            <Form.Field>
              <label className="block mb-1 font-medium">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-500" size={20} />
                <Input 
                  fluid 
                  type="password" 
                  placeholder="Enter your password" 
                  className="pl-10 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </Form.Field>

            <Button 
              onClick={() => navigate('/dashboard')}
              className="w-full py-3 mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              Login
            </Button>
          </Form>

          <div className="text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <a href="/Register" className="text-blue-500 hover:underline">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
