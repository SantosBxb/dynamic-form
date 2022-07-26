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
    phone: 'tel',
    email: 'email',
  };
  return (
    <>
      <label htmlFor={item.value}>{item.value}: </label>
      <input
        type="number"
        placeholder={item.placeholder}
        onChange={(e) => {
          const value = Number(e.target.value);
          const validations = item.validations;
          const validationType = item.validationType;
          const error = handleBlur[validationType](value, validations);
          setErrors({ ...errors, [item.field]: error || undefined });
        }}
      />
      {errors[item.field] && <p>{errors[item.field]}</p>}
    </>
  );
}

const a = {
  type: 'select',
  value: 'Tipo de identificación',
  placeholder: 'Ej: DNI',
  options: [
    {
      value: 'DNI',
      field: 'idType',
      fieldValue: 'N',
      subFields: [
        {
          type: 'string',
          value: 'Número de identificación',
          placeholder: 'Ej: option 1',
          field: 'idType',
          validationType: 'number',
          validations: {
            length: {
              min: 8,
              max: 9,
            },
          },
          required: true,
          active: true,
        },
      ],
    },
    {
      value: 'Pasaporte',
      field: 'idType',
      fieldValue: 'P',
      subFields: [
        {
          type: 'string',
          value: 'Número de identificación',
          placeholder: 'Ej: option 2',
          field: 'idType',
          validationType: 'string',
          validations: {
            length: {
              min: 12,
              max: 12,
            },
          },
          required: true,
          active: true,
        },
      ],
    },
    {
      value: 'CE',
      field: 'value',
      fieldValue: 'F',
      subFields: [
        {
          type: 'string',
          value: 'Número de identificación',
          placeholder: 'Ej: option 3',
          field: 'idType',
          validationType: 'number',
          validations: {
            length: {
              min: 1,
              max: 20,
            },
          },
          required: true,
          active: true,
        },
      ],
    },
    {
      value: 'RUC',
      field: 'value',
      fieldValue: 'T',
      subFields: [
        {
          type: 'string',
          value: 'Número de identificación',
          placeholder: 'Ej: option 3',
          field: 'idType',
          validationType: 'string',
          validations: {
            length: {
              min: 11,
              max: 11,
            },
          },
          required: true,
          active: true,
        },
      ],
    },
  ],
  required: true,
  active: true,
};
