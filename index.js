import React from 'react';
import { useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import Checkbox from './Checkbox';
const App = () => {
  const [generateData, setGenerateData] = useState([
    {
      id: 1,
      name: 'maxLength',
      inputType: 'number',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiYQIAZ-FyESkbKQO2kLgXS50PNZ4aNJRYdw&s',
      value: '',
    },
    {
      id: 2,
      name: 'capital letter',
      flag: false,
      inputType: 'checkbox',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiYQIAZ-FyESkbKQO2kLgXS50PNZ4aNJRYdw&s',
    },
    {
      id: 3,
      name: 'small letter',
      flag: false,
      inputType: 'checkbox',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiYQIAZ-FyESkbKQO2kLgXS50PNZ4aNJRYdw&s',
    },
    {
      id: 4,
      name: 'special char',
      flag: false,
      inputType: 'checkbox',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiYQIAZ-FyESkbKQO2kLgXS50PNZ4aNJRYdw&s',
    },
    {
      id: 5,
      name: 'number',
      flag: false,
      inputType: 'checkbox',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiYQIAZ-FyESkbKQO2kLgXS50PNZ4aNJRYdw&s',
    },
  ]);
  const [password, setPassword] = useState('');

  const handleChange = (event, id) => {
    const { name, type, value, checked } = event.target;
    console.log(name, '14::');
    if (type == 'number') {
      const value = parseInt(event.target.value, 10);

      setGenerateData((prevData) =>
        prevData.map((item) =>
          item.inputType === 'number' ? { ...item, value: value } : item
        )
      );
    } else {
      setGenerateData((prevData) =>
        prevData.map((item) =>
          item.id === id ? { ...item, flag: !item.flag } : item
        )
      );
      console.log('else');
    }
    console.log(
      event.target.name,
      event.target.value,
      event.target.checked,
      id,
      '16::'
    );
  };
  const passwordGenerator = (data) => {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';
    const numberChars = '0123456789';
    let charecterPool = '';
    if (data[1].flag) charecterPool += uppercaseChars;
    if (data[2].flag) charecterPool += lowercaseChars;
    if (data[3].flag) charecterPool += specialChars;
    if (data[4].flag) charecterPool += numberChars;
    console.log(charecterPool, '84::');
    let generatedPassword = '';
    for (let i = 0; i < data[0].value; i++) {
      let randomPassword = Math.floor(Math.random() * charecterPool.length);
      generatedPassword += charecterPool[randomPassword];
    }
    if (charecterPool == '') {
      alert('please Select Atleast One Option');
    }
    return generatedPassword;
  };

  console.log(generateData, '63');
  const hahandleGeneratedPassword = () => {
    const newPassword = passwordGenerator(generateData);
    console.log(newPassword, '77:');
    setPassword(newPassword);
  };
  return (
    <div>
      <h1>Generare Password</h1>
      {generateData?.map((items, id) => {
        return <Checkbox items={items} handleChange={handleChange} />;
      })}
      <button onClick={hahandleGeneratedPassword}>Generate Password</button>
      <br />
      <hr />
      {password && <div>your Generator Password is Here :- {password}</div>}
      <div className="mainSection"></div>
    </div>
  );
};

render(<App />, document.getElementById('root'));
