import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../store'; // Ensure the path is correct
import './signIn.css';

const SignIn: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://f2ed36a4mh.execute-api.ap-south-1.amazonaws.com/');
      const { username, role } = response.data;

      // Dispatch action to update Redux store
      dispatch(setUser({ username, role }));

      // Navigate based on role
      if (role === 'admin') {
        navigate('/admin');
      } else if (role === 'user') {
        navigate('/user');
      } else {
        setError('Unknown role');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to fetch data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-4 w-100">
      <h2 className="text">Please sign in to proceed</h2>
      <Form className="w-100">
        <Form.Group controlId="formUsername" className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter your username" 
            readOnly
          />
        </Form.Group>

        <Form.Group controlId="formPassword" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Enter your password" 
            readOnly
          />
        </Form.Group>

        {error && <p className="text-danger">{error}</p>}
        {loading && <p>Loading...</p>}

        <Button type="button" className="m-2 btn-color" onClick={fetchData}>
          Sign In
        </Button>
      </Form>
    </div>
  );
};

export default SignIn;
