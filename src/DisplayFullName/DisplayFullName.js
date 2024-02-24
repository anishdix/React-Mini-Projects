import React, { useState } from 'react';
import styles from "./DisplayFullName.module.css"

const DisplayFullName = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!firstName) {
      setError('Please fill in the First Name.');
    }
    else if(!lastName){setError("please fill in the last name")} else {
      const fullNameResult = `${firstName} ${lastName}`;
      setFullName(fullNameResult);
      setError('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.firstName}>
        <label>
          First Name:
          <input type="text" value={firstName} onChange={handleFirstNameChange} />
        </label>
      </div>
      <div>
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={handleLastNameChange} />
        </label>
      </div>
      <div>
        <button type='submit'>Submit</button>
      </div>
      {error && (
        <div style={{ color: 'red' }}>
          <p>{error}</p>
        </div>
      )}
      {fullName && (
        <div>
          <p>Full Name: {fullName}</p>
        </div>
      )}
    </form>
  );
};

export default DisplayFullName;