import { useState } from 'react';

export default function ({
  item,
  form,
  setForm,
  errors,
  setErrors,
  handleBlur,
}) {
  const [optionIndex, setIndex] = useState(0);
  return {
    optionIndex,
    Select: (
      <>
        <label htmlFor={item.value}>{item.value}: </label>
        <select
          disabled={!item.editable}
          defaultValue={item.placeholder}
          onChange={(e) => {
            const value = e.target.value;
            const index = e.target.selectedIndex;
            setForm({
              ...form,
              [item.options[index].field]: value,
            });
            setIndex(index);
          }}
        >
          {item.options.map((option, i) => (
            <option disabled={!option.active} key={i} value={option.fieldValue}>
              {option.value} {!option.active && '(proximamente)'}
            </option>
          ))}
        </select>
      </>
    ),
  };
}
