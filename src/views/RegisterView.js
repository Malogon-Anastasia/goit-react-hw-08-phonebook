import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import toast from "react-hot-toast";

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
          <input type="text" name="name" placeholder='Ivanov Ivan' value={name} onChange={handleChange} />
        </label>

        <label style={styles.label}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder='name@email.com'
          />
        </label>

        <label style={styles.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder='at least 8 symbols'
          />
        </label>

        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}