// src/pages/Login.js
import React from 'react';
import { Input, Button, Form, Icon } from 'semantic-ui-react';

function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="w-full max-w-lg p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Login
        </h2>

        <Form className="space-y-4">
          <Form.Field>
            <label className="block mb-1 text-gray-600">Email</label>
            <Input 
              fluid 
              icon="user" 
              iconPosition="left" 
              placeholder="Enter your email" 
              className="p-2 border rounded-md"
            />
          </Form.Field>

          <Form.Field>
            <label className="block mb-1 text-gray-600">Password</label>
            <Input 
              fluid 
              icon="lock" 
              iconPosition="left" 
              type="password" 
              placeholder="Enter your password" 
              className="p-2 border rounded-md"
            />
          </Form.Field>

          <Button 
            primary 
            fluid 
            className="mt-4"
          >
            <Icon name="sign-in" />
            Login
          </Button>
        </Form>

        <div className="text-center">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <a href="/signup" className="text-primary hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
