import { useState } from 'react';

function usePasswordToggle(initialValue) {
  const [password, setPassword] = useState(initialValue);
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return [password, isPasswordVisible, setPassword, togglePasswordVisibility];
}

export default usePasswordToggle;
