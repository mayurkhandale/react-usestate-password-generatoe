import React from 'react';
const Checkbox = ({ items, handleChange }) => {
  console.log(items);
  return (
    <>
      {items.name}{' '}
      <input
        type={items.inputType == 'number' ? 'number' : 'checkbox'}
        checked={items.flag}
        name={items.name}
        value={items.value}
        onChange={(e) => handleChange(e, items.id)}
        min={items.inputType == 'number' ? 1 : undefined}
      />
    </>
  );
};

export default Checkbox;
