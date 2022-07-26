export const select = {
  type: 'select',
  value: 'Banco',
  placeholder: 'Selecciona Banco',
  options: [
    {
      value: 'Bank',
      field: 'bankName',
      fieldValue: 'Bank',
    },
    {
      value: 'Bank1',
      field: 'bankName',
      fieldValue: 'Bank1',
    },
  ],
  required: true,
  active: true,
};

export const select_subfields = {
  type: 'select',
  value: 'Tipo de identificación',
  placeholder: 'Ej: DNI',
  options: [
    {
      value: 'DNI',
      field: 'idType',
      fieldValue: 'N',
      subField: {
        type: 'string',
        value: 'Número de identificación',
        placeholder: 'Ej: 12.345.678-9',
        field: 'idNumber',
        validationType: 'string',
        validations: {
          length: {
            min: 1,
            max: 35,
          },
        },
        required: true,
        active: true,
      },
    },
    {
      value: 'Extranjería',
      field: 'idType',
      fieldValue: 'F',
      subField: {
        type: 'string',
        value: 'Número de identificación',
        placeholder: 'Ej: 12.345.678-9',
        field: 'idNumber',
        validationType: 'string',
        validations: {
          length: {
            min: 1,
            max: 35,
          },
        },
        required: true,
        active: true,
      },
    },
    {
      value: 'ID Diplomático',
      field: 'value',
      fieldValue: 'D',
      subField: {
        type: 'string',
        value: 'Número de identificación',
        placeholder: 'Ej: 12.345.678-9',
        field: 'idNumber',
        validationType: 'string',
        validations: {
          length: {
            min: 1,
            max: 35,
          },
        },
        required: true,
        active: true,
      },
    },
  ],
  required: true,
  active: true,
};

export const string = {
  type: 'string',
  value: 'Primer nombre',
  placeholder: 'Ej: Pedro',
  field: 'firstName',
  validationType: 'string',
  validations: {
    length: {
      min: 1,
      max: 35,
    },
  },
  required: true,
  active: true,
};

export const string_number = {
  type: 'string',
  value: 'Código postal',
  placeholder: 'Ej: 2820000',
  field: 'postalCode',
  validationType: 'number',
  validations: {
    length: {
      min: 1,
      max: 35,
    },
  },
  required: true,
};

export const string_phone = {
  type: 'string',
  value: 'Teléfono',
  placeholder: 'Ej: +569987654321',
  field: 'contactNumber',
  validationType: 'phone',
  validations: {
    length: {
      min: 1,
      max: 30,
    },
  },
  required: true,
  active: true,
};

export const bottom_sheet = {
  type: 'bottom_sheet',
  value: 'Destino',
  placeholder: 'Seleccione un destino',
  options: [
    {
      value: 'Cuenta Bancaria',
      placeholder: 'Recibe en 48 horas.',
      field: 'payoutMethod',
      fieldValue: 'B',
      active: true,
    },
    {
      value: 'Tarjeta Visa',
      placeholder: 'Recibe en 1 hora.',
      field: 'payoutMethod',
      fieldValue: 'A',
      active: false,
    },
  ],
  required: true,
  active: true,
};

export const date = {
  type: 'date',
  value: 'Fecha de nacimiento',
  placeholder: 'Ej: 01/01/1980',
  field: 'dateOfBirth',
  validationType: 'date',
  validations: {
    range: {
      min: 1900,
      max: 2004,
    },
  },
  required: true,
  active: true,
};
