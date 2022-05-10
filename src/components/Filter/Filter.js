import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/contacts/contacts-selectors';
import { changeFilter } from 'redux/contacts/contacts-actions';
import s from './Filter.module.css';
import Input from '@mui/material/Input';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={s.label}>
      Find contacts by name
      <Input variant="contained" className={s.input} type="text" value={value}
        onChange={ e => dispatch(changeFilter(e.target.value)) } />
    </label>
  );
};


export default Filter;