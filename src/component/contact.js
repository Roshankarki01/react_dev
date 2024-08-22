import React from 'react';
import { Appcontext } from '../App';
import { useContext } from 'react';

const Contact = () => {
  const {username}= useContext(Appcontext)
  return (
    <div>
      <h1> {username}</h1>
      <profildetail/>
      <p>If you have any questions, feel free to reach out to us.</p>
    </div>
  );
};

export default Contact;
