import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');

  const updateUsername = (newUsername) => {
    setUsername(newUsername);
  };
  const updateEmail = (newEmail) => {
    setEmail(newEmail);
  };
  const updateBio = (newBio) => {
    setBio(newBio);
  };

  const contextValue = {
    username,
    email,
    bio,
    updateUsername,
    updateBio,
    updateEmail,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };