import React, { useState } from 'react';
import { TextField, Box } from '@mui/material';

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (event) => {
    const celsiusValue = event.target.value;
    setCelsius(celsiusValue);
    if (celsiusValue !== '') {
      const fahrenheitValue = (celsiusValue * 9/5) + 32;
      setFahrenheit(fahrenheitValue.toFixed(2));
    } else {
      setFahrenheit('');
    }
  };

  const handleFahrenheitChange = (event) => {
    const fahrenheitValue = event.target.value;
    setFahrenheit(fahrenheitValue);
    if (fahrenheitValue !== '') {
      const celsiusValue = (fahrenheitValue - 32) * 5/9;
      setCelsius(celsiusValue.toFixed(2));
    } else {
      setCelsius('');
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '300px', margin: 'auto', marginTop: '50px' }}>
      <TextField
        label="Цельсия"
        value={celsius}
        onChange={handleCelsiusChange}
        variant="outlined"
      />
      <TextField
        label="Фаренгейта"
        value={fahrenheit}
        onChange={handleFahrenheitChange}
        variant="outlined"
      />
    </Box>
  );
};

export default TemperatureConverter;
