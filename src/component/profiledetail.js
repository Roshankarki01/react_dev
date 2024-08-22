import React, { useContext } from 'react';
import { Appcontext } from '../App';

// Redux method of React
const ProfileDetail = () => {
  const { username, setUsername } = useContext(Appcontext);

  return (
    <div>
      <h2>{username}</h2>
      <input 
        type="text" 
        onChange={(e) => setUsername(e.target.value)} 
        value={username} 
      />
    </div>
  );
};

export default ProfileDetail;
