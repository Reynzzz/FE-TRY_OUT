// src/pages/Register.js
import React from 'react';
import { Input, Button, Form, Icon, Dropdown } from 'semantic-ui-react';

function Register() {
  // Opsi kelas untuk dropdown kelas
  const classOptions = [
    { key: '10', text: 'Kelas 10', value: '10' },
    { key: '11', text: 'Kelas 11', value: '11' },
    { key: '12', text: 'Kelas 12', value: '12' },
  ];

  return (
    <div 
      className="flex items-center justify-center min-h-screen bg-gray-100"
    >
      <div className="w-full max-w-lg p-10 space-y-6 bg-white bg-opacity-90 backdrop-blur-lg rounded-lg shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Register for Try Out
        </h2>
        <p className="text-center text-gray-600">Mulai perjalanan persiapan ujian Anda!</p>

        <Form className="space-y-4">
          <Form.Field>
            <label className="block mb-1 text-gray-700">Nama Lengkap</label>
            <Input 
              fluid 
              icon="user" 
              iconPosition="left" 
              placeholder="Masukkan nama lengkap" 
              className="p-2 border rounded-md"
            />
          </Form.Field>

          <Form.Field>
            <label className="block mb-1 text-gray-700">Email</label>
            <Input 
              fluid 
              icon="mail" 
              iconPosition="left" 
              placeholder="Masukkan email" 
              className="p-2 border rounded-md"
            />
          </Form.Field>

          <Form.Field>
            <label className="block mb-1 text-gray-700">Password</label>
            <Input 
              fluid 
              icon="lock" 
              iconPosition="left" 
              type="password" 
              placeholder="Masukkan password" 
              className="p-2 border rounded-md"
            />
          </Form.Field>

          {/* <Form.Field>
            <label className="block mb-1 text-gray-700">Jenis Try</label>
            <Dropdown 
              placeholder="Pilih kelas" 
              fluid 
              selection 
              options={classOptions}
              className="rounded-md"
            />
          </Form.Field> */}

          <Button 
            primary 
            fluid 
            className="mt-6"
          >
            <Icon name="signup" />
            Daftar Sekarang
          </Button>
        </Form>

        <div className="text-center">
          <p className="text-gray-700">
            Sudah punya akun?{' '}
            <a href="/login" className="text-blue-600 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
