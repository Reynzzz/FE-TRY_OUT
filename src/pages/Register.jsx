import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button, Form } from 'semantic-ui-react';
import { Mail, Lock, User, CreditCard } from 'lucide-react';
import Logo from '../assets/logo-1.png';
import { motion } from 'framer-motion';

function Register() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '-100%', opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 to-indigo-800 text-white"
    >
      <div className="flex w-full max-w-4xl h-full bg-white text-gray-800 rounded-lg shadow-xl overflow-hidden">
        {/* Form Section */}
        <div className="w-1/2 p-8 space-y-6">
          <h2 className="text-3xl font-extrabold text-center">Register</h2>

          <Form className="space-y-4">
            <Form.Field>
              <label className="block mb-1 font-medium">Nama Lengkap</label>
              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-500" size={20} />
                <Input 
                  fluid 
                  placeholder="Masukkan nama lengkap" 
                  className="pl-10 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </Form.Field>

            <Form.Field>
              <label className="block mb-1 font-medium">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-500" size={20} />
                <Input 
                  fluid 
                  placeholder="Masukkan email" 
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
                  placeholder="Masukkan password" 
                  className="pl-10 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </Form.Field>

            <Form.Field>
              <label className="block mb-1 font-medium">Nomor Rekening</label>
              <div className="relative">
                <CreditCard className="absolute left-3 top-3 text-gray-500" size={20} />
                <Input 
                  fluid 
                  placeholder="Masukkan nomor rekening" 
                  className="pl-10 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </Form.Field>

            <Button 
              className="w-full py-3 mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              Daftar Sekarang
            </Button>
          </Form>

          <div className="text-center">
            <p className="text-gray-600">
              Sudah punya akun?{' '}
              <a 
                href="/login" 
                className="text-blue-500 hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/login');
                }}
              >Login</a>
            </p>
          </div>
        </div>

        {/* Logo Section */}
        <div className="relative w-1/2 flex items-center justify-center bg-gray-800">
          <img src={Logo} alt="Logo" className="absolute w-[400px]" />
        </div>
      </div>
    </motion.div>
  );
}

export default Register;
