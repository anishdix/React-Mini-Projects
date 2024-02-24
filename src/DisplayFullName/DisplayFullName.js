import React, { useState } from 'react';
import styles from "./DisplayFullName.module.css"

const DisplayFullName = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState(false);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!firstName) {
        alert('Please fill in both fields');
      // setFullName("")
    }
    else if(!lastName){
      alert('Please fill in both fields');
      // setFullName("")
    
    }
       else {
      const fullNameResult = `${firstName} ${lastName}`;
      setFullName(fullNameResult);
      setError(false);

    }
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <h2>Full Name Display</h2>
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
      
      
    </form>
<div>
{fullName && (
        <div>
          <p>Full Name: {fullName}</p>
        </div>
      )}
</div>
</div>
  );
};

export default DisplayFullName;
