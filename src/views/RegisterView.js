import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import toast from "react-hot-toast";
import * as React from 'react';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      toast.error("Please fill out all required fields");
      return;
    }
    dispatch(authOperations.register({ name, email, password }))
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
        toast.error(`Sorry, something went wrong`);
      });
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1>Sign up page</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Name
          <Input variant="contained" 
          type="text" 
          name="name" 
          placeholder='Ivanov Ivan' 
          autoComplete='off' 
          value={name} 
          onChange={handleChange} />
        </label>

        <label style={styles.label}>
          Email
          <Input variant="contained"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder='name@email.com'
            autoComplete='off'
          />
        </label>

        <label style={styles.label}>
          Password
          <Input variant="contained"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder='at least 8 symbols'
            autoComplete='off'
          />
        </label>

        <Button variant="contained" type="submit">Sign up</Button>
      </form>
    </div>
  );
}