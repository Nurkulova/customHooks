import { useState } from 'react';

function useInput(initialValue = '', validate = () => true) {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (validate(inputValue)) {
      setError('');
    } else {
      setError('Invalid input');
    }
    setValue(inputValue);
  };

  return {
    value,
    onChange: handleChange,
    error,
  };
}

export default useInput;
