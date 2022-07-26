import React from 'react';
export default function ({
  item,
  form,
  setForm,
  errors,
  setErrors,
  handleBlur,
}) {
  const type = {
    string: 'text',
    phone: 'phone',
    email: 'email',
    number: 'number',
  };

  return (
    <>
      <label htmlFor={item.value}>{item.value}: </label>
      <input
        type={type[item.validationType]}
        disabled={!item.editable}
        placeholder={item.placeholder}
        name={item.field}
        value={form[item.field] || ''}
        onChange={(e) => {
          const { value } = e.target;
          const validations = item.validations;
          setForm({
            ...form,
            [item.field]: value,
          });
          const validationType = item.validationType;
          const err = handleBlur[validationType](value, validations);
          setErrors({ ...errors, [item.field]: err || undefined });
        }}
      />
      {errors[item.field] && <p>{errors[item.field]}</p>}
    </>
  );
}
