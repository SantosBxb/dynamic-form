export const COP = {
  countryCode: 'COP',
  form: [
    {
      title: 'Datos personales',
      fields: [
        {
          type: 'select',
          value: 'País',
          options: [
            {
              value: 'Colombia',
              field: 'address_country',
              fieldValue: '170',
              active: true,
            },
          ],
          active: true,
          required: true,
          editable: false,
        },
        {
          type: 'string',
          value: 'Primer nombre',
          placeholder: 'Ej: Pedro',
          field: 'firstName',
          validationType: 'string',
          validations: {
            length: {
              min: 1,
              max: 35,
              message: 'Debe contener mínimo 1 y máximo 35 caracteres',
            },
          },
          required: true,
          active: true,
          editable: true,
        },
        {
          type: 'string',
          value: 'Segundo nombre',
          placeholder: 'Ej: Alejandro',
          field: 'middleName',
          validationType: 'string',
          validations: {
            length: {
              min: 1,
              max: 35,
            },
          },
          required: false,
          active: true,
          editable: true,
        },
        {
          type: 'string',
          value: 'Apellido',
          placeholder: 'Ej: Gonzáles',
          field: 'lastName',
          validationType: 'string',
          validations: {
            length: {
              min: 1,
              max: 35,
            },
          },
          required: true,
          active: true,
          editable: true,
        },
        {
          type: 'string',
          value: 'Email',
          placeholder: 'Ej: correo@correo.com',
          field: 'contactEmail',
          validationType: 'email',
          validations: {
            length: {
              min: 1,
              max: 50,
            },
          },
          required: true,
          active: true,
          editable: true,
        },
        {
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
          editable: true,
        },
        {
          type: 'date',
          value: 'Fecha de nacimiento',
          placeholder: 'Ej: 01/01/1980',
          field: 'dateOfBirth',
          validationType: 'date',
          validations: {
            range: {
              min: 18,
              max: 120,
              message: '',
            },
          },
          required: true,
          active: true,
          editable: true,
        },
        {
          type: 'select',
          value: 'Tipo de identificación',
          placeholder: 'Ej: DNI',
          options: [
            {
              value: 'DNI',
              field: 'identificationList_idType',
              fieldValue: 'N',
              active: true,
              subfields: [
                {
                  type: 'string',
                  value: 'Número de identificación',
                  placeholder: 'Ej: option 1',
                  field: 'identificationList_idNumber',
                  validationType: 'string',
                  validations: {
                    length: {
                      min: 6,
                      max: 7,
                    },
                  },
                  required: true,
                  active: true,
                  editable: true,
                },
              ],
            },
            {
              value: 'Extranjería',
              field: 'identificationList_idType',
              fieldValue: 'F',
              active: true,
              subfields: [
                {
                  type: 'string',
                  value: 'Número de identificación',
                  placeholder: 'Ej: option 2',
                  field: 'identificationList_idNumber',
                  validationType: 'string',
                  validations: {
                    length: {
                      min: 1,
                      max: 20,
                    },
                  },
                  required: true,
                  active: true,
                  editable: true,
                },
              ],
            },
            {
              value: 'ID Diplomático',
              field: 'additionalData_name',
              fieldValue: 'DIPLOMAT_ID',
              active: true,
              subfields: [
                {
                  type: 'string',
                  value: 'Número de identificación',
                  placeholder: 'Ej: option 3',
                  field: 'additionalData_value',
                  validationType: 'string',
                  validations: {
                    length: {
                      min: 1,
                      max: 100,
                    },
                  },
                  required: true,
                  active: true,
                  editable: true,
                },
              ],
            },
          ],
          required: true,
          active: true,
          editable: true,
        },
        {
          type: 'string',
          value: 'Domicilio',
          placeholder: 'Ej: Av. Borgoño 300',
          field: 'address_addressLine1',
          validationType: 'string',
          validations: {
            length: {
              min: 1,
              max: 99,
            },
          },
          required: true,
          active: true,
          editable: true,
        },
        {
          type: 'string',
          value: 'Ciudad',
          placeholder: 'Ej: Arizona',
          field: 'address_city',
          validationType: 'string',
          validations: {
            length: {
              min: 1,
              max: 35,
            },
          },
          required: true,
          active: true,
          editable: true,
        },
      ],
    },
    {
      title: 'Datos destinatario',
      fields: [
        {
          type: 'select',
          value: 'Destino',
          placeholder: 'Seleccione un destino',
          description: 'Selecciona el destino de la transferencia',
          options: [
            {
              value: 'Cuenta Bancaria',
              description: 'Recibe en 48 horas.',
              field: 'payoutMethod',
              fieldValue: 'B',
              active: true,
              subfields: [
                {
                  type: 'select',
                  value: 'Banco',
                  placeholder: 'Selecciona Banco',
                  options: [
                    {
                      value: 'BANCO PICHINCHA',
                      field: 'bank_bankName',
                      fieldValue: '060',
                      active: true,
                    },
                    {
                      value: 'BANCOOMEVA',
                      field: 'bank_bankName',
                      fieldValue: '061',
                      active: true,
                    },
                    {
                      value: 'BANCO FALABELLA S.A',
                      field: 'bank_bankName',
                      fieldValue: '062',
                      active: true,
                    },
                    {
                      value: 'COOPCENTRAL S.A',
                      field: 'bank_bankName',
                      fieldValue: '076',
                      active: true,
                    },
                    {
                      value: 'COOPERATIVA FINANCIERA DE ANTIOQUIA',
                      field: 'bank_bankName',
                      fieldValue: '283',
                      active: true,
                    },
                    {
                      value: 'COTRAFA COOPERATIVA FINANCIERA',
                      field: 'bank_bankName',
                      fieldValue: '289',
                      active: true,
                    },
                    {
                      value: 'CONFIAR',
                      field: 'bank_bankName',
                      fieldValue: '292',
                      active: true,
                    },
                    {
                      value: 'FINANCIERA JURISCOOP',
                      field: 'bank_bankName',
                      fieldValue: '296',
                      active: true,
                    },
                    {
                      value: 'BANCO DE BOGOTA',
                      field: 'bank_bankName',
                      fieldValue: '001',
                      active: true,
                    },
                    {
                      value: 'BANCO POPULAR',
                      field: 'bank_bankName',
                      fieldValue: '002',
                      active: true,
                    },
                    {
                      value: 'CORPBANCA',
                      field: 'bank_bankName',
                      fieldValue: '006',
                      active: true,
                    },
                    {
                      value: 'BANCOLOMBIA',
                      field: 'bank_bankName',
                      fieldValue: '007',
                      active: true,
                    },
                    {
                      value: 'CITIBANK',
                      field: 'bank_bankName',
                      fieldValue: '009',
                      active: true,
                    },
                    {
                      value: 'HSBC',
                      field: 'bank_bankName',
                      fieldValue: '010',
                      active: true,
                    },
                    {
                      value: 'BANCO SUDAMERIS',
                      field: 'bank_bankName',
                      fieldValue: '012',
                      active: true,
                    },
                    {
                      value: 'BBVA',
                      field: 'bank_bankName',
                      fieldValue: '013',
                      active: true,
                    },
                    {
                      value: 'HELM BANK S.A',
                      field: 'bank_bankName',
                      fieldValue: '014',
                      active: true,
                    },
                    {
                      value: 'BANCO COLPATRIA',
                      field: 'bank_bankName',
                      fieldValue: '019',
                      active: true,
                    },
                    {
                      value: 'BANCO DE OCCIDENTE',
                      field: 'bank_bankName',
                      fieldValue: '023',
                      active: true,
                    },
                    {
                      value: 'BANCO CAJA SOCIAL BCSC',
                      field: 'bank_bankName',
                      fieldValue: '032',
                      active: true,
                    },
                    {
                      value: 'BANCO AGRARIO',
                      field: 'bank_bankName',
                      fieldValue: '040',
                      active: true,
                    },
                    {
                      value: 'BANCO DAVIVIENDA',
                      field: 'bank_bankName',
                      fieldValue: '051',
                      active: true,
                    },
                    {
                      value: 'BANCO AV VILLAS',
                      field: 'bank_bankName',
                      fieldValue: '052',
                      active: true,
                    },
                    {
                      value: 'BANCO PROCREDIT',
                      field: 'bank_bankName',
                      fieldValue: '058',
                      active: true,
                    },
                    {
                      value: 'ABN AMRO',
                      field: 'bank_bankName',
                      fieldValue: '008',
                      active: true,
                    },
                    {
                      value: 'Bancamia S.A.',
                      field: 'bank_bankName',
                      fieldValue: '059',
                      active: true,
                    },
                    {
                      value: 'Banco Compartir S.A.',
                      field: 'bank_bankName',
                      fieldValue: '067',
                      active: true,
                    },
                    {
                      value: 'Banco Finandina S.A.',
                      field: 'bank_bankName',
                      fieldValue: '063',
                      active: true,
                    },
                    {
                      value: 'Banco Multibank S.A.',
                      field: 'bank_bankName',
                      fieldValue: '064',
                      active: true,
                    },
                    {
                      value: 'Banco Mundo Mujer',
                      field: 'bank_bankName',
                      fieldValue: '047',
                      active: true,
                    },
                    {
                      value: 'Banco Serfinanza S.A.',
                      field: 'bank_bankName',
                      fieldValue: '069',
                      active: true,
                    },
                    {
                      value: 'Banco W S.A.',
                      field: 'bank_bankName',
                      fieldValue: '053',
                      active: true,
                    },
                    {
                      value: 'Bancoldex S.A.',
                      field: 'bank_bankName',
                      fieldValue: '031',
                      active: true,
                    },
                    {
                      value: 'Coltefinanciera S.A.',
                      field: 'bank_bankName',
                      fieldValue: '370',
                      active: true,
                    },
                    {
                      value: 'Daviplata',
                      field: 'bank_bankName',
                      fieldValue: '551',
                      active: true,
                    },
                  ],
                  required: true,
                  active: true,
                  editable: true,
                },
                {
                  type: 'select',
                  value: 'Tipo de cuenta',
                  options: [
                    {
                      value: 'Corriente',
                      field: 'bank_accountType',
                      fieldValue: '1',
                      active: true,
                    },
                    {
                      value: 'Ahorros',
                      field: 'bank_accountType',
                      fieldValue: '2',
                      active: true,
                    },
                  ],
                  required: true,
                  active: true,
                  editable: true,
                },
                {
                  type: 'string',
                  value: 'Número de cuenta',
                  placeholder: 'Ej: 000-123-456',
                  field: 'bank_accountNumber',
                  validationType: 'number',
                  validations: {
                    length: {
                      min: 1,
                      max: 35,
                    },
                  },
                  required: true,
                  active: true,
                  editable: true,
                },
                {
                  type: 'string',
                  value: 'Nombre Titular de la cuenta',
                  placeholder: 'Ej: Juan Pérez',
                  field: 'bank_accountName',
                  validationType: 'string',
                  validations: {
                    length: {
                      min: 1,
                      max: 70,
                    },
                  },
                  required: true,
                  active: true,
                  editable: true,
                },
              ],
            },
            {
              value: 'Tarjeta Visa',
              description: 'Recibe en 1 hora.',
              field: 'payoutMethod',
              fieldValue: 'A',
              active: false,
            },
          ],
          required: true,
          active: true,
          editable: true,
        },
      ],
    },
  ],
};

export const USD = {
  countryCode: 'USD',
  form: [
    {
      title: 'Datos personales',
      fields: [
        {
          type: 'select',
          value: 'País',
          options: [
            {
              value: 'Estados Unidos',
              field: 'address_country',
              fieldValue: '840',
              active: true,
            },
          ],
          active: true,
          required: true,
          editable: false,
        },
        {
          type: 'string',
          value: 'Primer nombre',
          placeholder: 'Ej: Pedro',
          field: 'firstName',
          validationType: 'string',
          validations: {
            length: {
              min: 1,
              max: 35,
              message: 'Debe contener mínimo 1 y máximo 35 caracteres',
            },
          },
          required: true,
          active: true,
          editable: true,
        },
        {
          type: 'string',
          value: 'Segundo nombre',
          placeholder: 'Ej: Alejandro',
          field: 'middleName',
          validationType: 'string',
          validations: {
            length: {
              min: 1,
              max: 35,
            },
          },
          required: false,
          active: true,
          editable: true,
        },
        {
          type: 'string',
          value: 'Apellido',
          placeholder: 'Ej: Gonzáles',
          field: 'lastName',
          validationType: 'string',
          validations: {
            length: {
              min: 1,
              max: 35,
            },
          },
          required: true,
          active: true,
          editable: true,
        },
        {
          type: 'string',
          value: 'Email',
          placeholder: 'Ej: correo@correo.com',
          field: 'contactEmail',
          validationType: 'email',
          validations: {
            length: {
              min: 1,
              max: 50,
            },
          },
          required: true,
          active: true,
          editable: true,
        },
        {
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
          editable: true,
        },
        {
          type: 'date',
          value: 'Fecha de nacimiento',
          placeholder: 'Ej: 01/01/1980',
          field: 'dateOfBirth',
          validationType: 'date',
          validations: {
            range: {
              min: 18,
              max: 120,
              message: '',
            },
          },
          required: true,
          active: true,
          editable: true,
        },
        {
          type: 'string',
          value: 'Domicilio',
          placeholder: 'Ej: Av. Borgoño 300',
          field: 'address_addressLine1',
          validationType: 'string',
          validations: {
            length: {
              min: 1,
              max: 50,
            },
          },
          required: true,
          active: true,
          editable: true,
        },
        {
          type: 'string',
          value: 'Ciudad',
          placeholder: 'Ej: Phoenix',
          field: 'address_city',
          validationType: 'string',
          validations: {
            length: {
              min: 1,
              max: 35,
            },
          },
          required: true,
          active: true,
          editable: true,
        },
        {
          type: 'string',
          value: 'Estado',
          placeholder: 'Ej: AZ',
          field: 'address_state',
          validationType: 'string',
          validations: {
            length: {
              min: 2,
              max: 2,
            },
          },
          required: true,
          active: true,
          editable: true,
        },
        {
          type: 'string',
          value: 'Código postal',
          placeholder: 'Ej: 85001',
          field: 'address_postalCode',
          validationType: 'number',
          validations: {
            length: {
              min: 1,
              max: 10,
            },
          },
          required: true,
          active: true,
          editable: true,
        },
      ],
    },
    {
      title: 'Datos destinatario',
      fields: [
        {
          type: 'select',
          value: 'Destino',
          placeholder: 'Seleccione un destino',
          options: [
            {
              value: 'Cuenta Bancaria',
              description: 'Recibe en 48 horas.',
              field: 'payoutMethod',
              fieldValue: 'B',
              active: true,
              subfields: [
                {
                  type: 'select',
                  value: 'Banco',
                  placeholder: 'Selecciona Banco',
                  options: [
                    {
                      value: '',
                      field: 'bank_bankName',
                      fieldValue: '',
                      active: true,
                    },
                  ],
                  required: true,
                  active: true,
                  editable: true,
                },
                {
                  type: 'select',
                  value: 'Tipo de cuenta',
                  options: [
                    {
                      value: 'Corriente',
                      field: 'bank_accountType',
                      fieldValue: '1',
                      active: true,
                    },
                    {
                      value: 'Ahorros',
                      field: 'bank_accountType',
                      fieldValue: '2',
                      active: true,
                    },
                  ],
                  required: true,
                  active: true,
                  editable: true,
                },
                {
                  type: 'string',
                  value: 'Número de cuenta',
                  placeholder: 'Ej: 000-123-456',
                  field: 'bank_accountNumber',
                  validationType: 'number',
                  validations: {
                    length: {
                      min: 1,
                      max: 35,
                    },
                  },
                  required: true,
                  active: true,
                  editable: true,
                },
                {
                  type: 'string',
                  value: 'Nombre Titular de la cuenta',
                  placeholder: 'Ej: Juan Pérez',
                  field: 'bank_accountName',
                  validationType: 'string',
                  validations: {
                    length: {
                      min: 1,
                      max: 70,
                    },
                  },
                  required: true,
                  active: true,
                  editable: true,
                },
              ],
            },
            {
              value: 'Tarjeta Visa',
              description: 'Recibe en 1 hora.',
              field: 'payoutMethod',
              fieldValue: 'A',
              active: false,
              subfields: [],
            },
          ],
          required: true,
          active: true,
          editable: true,
        },
      ],
    },
  ],
};

export const PEN = {
  countryCode: 'PEN',
  form: [
    {
      title: 'Datos personales',
      fields: [
        {
          type: 'select',
          value: 'País',
          options: [
            {
              value: 'Peru',
              field: 'address_country',
              fieldValue: '604',
              active: true,
            },
          ],
          active: true,
          required: true,
          editable: false,
        },
        {
          type: 'string',
          value: 'Primer nombre',
          placeholder: 'Ej: Pedro',
          field: 'firstName',
          validationType: 'string',
          validations: {
            length: {
              min: 1,
              max: 35,
              message: 'Debe contener mínimo 1 y máximo 35 caracteres',
            },
          },
          required: true,
          active: true,
          editable: true,
        },
        {
          type: 'string',
          value: 'Segundo nombre',
          placeholder: 'Ej: Alejandro',
          field: 'middleName',
          validationType: 'string',
          validations: {
            length: {
              min: 1,
              max: 35,
            },
          },
          required: false,
          active: true,
          editable: true,
        },
        {
          type: 'string',
          value: 'Apellido',
          placeholder: 'Ej: Gonzáles',
          field: 'lastName',
          validationType: 'string',
          validations: {
            length: {
              min: 1,
              max: 35,
            },
          },
          required: true,
          active: true,
          editable: true,
        },
        {
          type: 'string',
          value: 'Email',
          placeholder: 'Ej: correo@correo.com',
          field: 'contactEmail',
          validationType: 'email',
          validations: {
            length: {
              min: 1,
              max: 50,
            },
          },
          required: false,
          active: true,
          editable: true,
        },
        {
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
          required: false,
          active: true,
          editable: true,
        },
        {
          type: 'date',
          value: 'Fecha de nacimiento',
          placeholder: 'Ej: 01/01/1980',
          field: 'dateOfBirth',
          validationType: 'date',
          validations: {
            range: {
              min: 18,
              max: 120,
            },
          },
          required: false,
          active: true,
          editable: true,
        },
        {
          type: 'select',
          value: 'Tipo de identificación',
          placeholder: 'Ej: DNI',
          options: [
            {
              value: 'DNI',
              field: 'identificationList_idType',
              fieldValue: 'N',
              active: true,
              subfields: [
                {
                  type: 'string',
                  value: 'Número de identificación',
                  placeholder: 'Ej: 47654321',
                  field: 'identificationList_idNumber',
                  validationType: 'number',
                  validations: {
                    length: {
                      min: 8,
                      max: 9,
                    },
                  },
                  required: true,
                  active: true,
                  editable: true,
                },
                {
                  type: 'select',
                  value: 'País de emisión',
                  placeholder: 'Ej: Argentina',
                  options: [
                    {
                      value: 'Argentina',
                      field: 'identificationList_idIssueCountry',
                      fieldValue: 'ARS',
                      active: true,
                    },
                  ],
                  required: true,
                  active: true,
                  editable: true,
                },
              ],
            },
            {
              value: 'Pasaporte',
              field: 'identificationList_idType',
              fieldValue: 'P',
              active: true,
              subfields: [
                {
                  type: 'string',
                  value: 'Número de identificación',
                  placeholder: 'Ej: option 2',
                  field: 'identificationList_idNumber',
                  validationType: 'string',
                  validations: {
                    length: {
                      min: 12,
                      max: 12,
                    },
                  },
                  required: true,
                  active: true,
                  editable: true,
                },
                {
                  type: 'select',
                  value: 'País de emisión',
                  placeholder: 'Ej: Argentina',
                  options: [
                    {
                      value: 'Argentina',
                      field: 'identificationList_idIssueCountry',
                      fieldValue: 'ARS',
                      active: true,
                    },
                  ],
                  required: true,
                  active: true,
                  editable: true,
                },
              ],
            },
            {
              value: 'CE',
              field: 'identificationList_idType',
              fieldValue: 'F',
              active: true,
              subfields: [
                {
                  type: 'string',
                  value: 'Número de identificación',
                  placeholder: 'Ej: option 3',
                  field: 'identificationList_idNumber',
                  validationType: 'number',
                  validations: {
                    length: {
                      min: 1,
                      max: 20,
                    },
                  },
                  required: true,
                  active: true,
                  editable: true,
                },
              ],
            },
            {
              value: 'RUC',
              field: 'identificationList_idType',
              fieldValue: 'T',
              active: true,
              subfields: [
                {
                  type: 'string',
                  value: 'Número de identificación',
                  placeholder: 'Ej: 10603645948',
                  field: 'identificationList_idNumber',
                  validationType: 'string',
                  validations: {
                    length: {
                      min: 11,
                      max: 11,
                    },
                  },
                  required: true,
                  active: true,
                  editable: true,
                },
              ],
            },
          ],
          required: true,
          active: true,
          editable: true,
        },
        {
          type: 'string',
          value: 'Domicilio',
          placeholder: 'Ej: Av. Borgoño 300',
          field: 'address_addressLine1',
          validationType: 'string',
          validations: {
            length: {
              min: 1,
              max: 50,
            },
          },
          required: false,
          active: true,
          editable: true,
        },
        {
          type: 'string',
          value: 'Ciudad',
          placeholder: 'Ej: Phoenix',
          field: 'address_city',
          validationType: 'string',
          validations: {
            length: {
              min: 1,
              max: 35,
            },
          },
          required: false,
          active: true,
          editable: true,
        },
      ],
    },
    {
      title: 'Datos destinatario',
      fields: [
        {
          type: 'select',
          value: 'Destino',
          placeholder: 'Seleccione un destino',
          options: [
            {
              value: 'Cuenta Bancaria',
              description: 'Recibe en 48 horas.',
              field: 'payoutMethod',
              fieldValue: 'B',
              active: true,
              subfields: [
                {
                  type: 'select',
                  value: 'Banco',
                  placeholder: 'Selecciona Banco',
                  options: [],
                  required: true,
                  active: true,
                  editable: true,
                },
                {
                  type: 'select',
                  value: 'Tipo de cuenta',
                  options: [
                    {
                      value: 'Corriente',
                      field: 'bank_accountType',
                      fieldValue: '1',
                      active: true,
                    },
                    {
                      value: 'Ahorros',
                      field: 'bank_accountType',
                      fieldValue: '2',
                      active: true,
                    },
                    {
                      value: 'Maestra',
                      field: 'bank_accountType',
                      fieldValue: '3',
                      active: true,
                    },
                  ],
                  required: true,
                  active: true,
                  editable: true,
                },
                {
                  type: 'string',
                  value: 'Número de cuenta',
                  placeholder: 'Ej: 000-123-456',
                  field: 'bank_accountNumber',
                  validationType: 'number',
                  validations: {
                    length: {
                      min: 20,
                      max: 20,
                    },
                  },
                  required: true,
                  active: true,
                  editable: true,
                },
                {
                  type: 'string',
                  value: 'Nombre Titular de la cuenta',
                  placeholder: 'Ej: Juan Pérez',
                  field: 'bank_accountName',
                  validationType: 'string',
                  validations: {
                    length: {
                      min: 1,
                      max: 70,
                    },
                  },
                  required: true,
                  active: true,
                  editable: true,
                },
              ],
            },
            {
              value: 'Tarjeta Visa',
              description: 'Recibe en 1 hora.',
              field: 'payoutMethod',
              fieldValue: 'A',
              active: false,
              subfields: [],
            },
          ],
          required: true,
          active: true,
          editable: true,
        },
      ],
    },
  ],
};

export const ARS = {
  countryCode: 'ARS',
  form: [
    {
      title: 'Datos personales',
      fields: [
        {
          type: 'select',
          value: 'País',
          options: [
            {
              value: 'Argentina',
              field: 'address_country',
              fieldValue: '032',
              active: true,
            },
          ],
          active: true,
          required: true,
          editable: false,
        },
        {
          type: 'string',
          value: 'Primer nombre',
          placeholder: 'Ej: Pedro',
          field: 'firstName',
          validationType: 'string',
          validations: {
            length: {
              min: 1,
              max: 35,
              message: 'Debe contener mínimo 1 y máximo 35 caracteres',
            },
          },
          required: true,
          active: true,
          editable: true,
        },
        {
          type: 'string',
          value: 'Segundo nombre',
          placeholder: 'Ej: Alejandro',
          field: 'middleName',
          validationType: 'string',
          validations: {
            length: {
              min: 1,
              max: 35,
            },
          },
          required: false,
          active: true,
          editable: true,
        },
        {
          type: 'string',
          value: 'Apellido',
          placeholder: 'Ej: Gonzáles',
          field: 'lastName',
          validationType: 'string',
          validations: {
            length: {
              min: 1,
              max: 35,
            },
          },
          required: true,
          active: true,
          editable: true,
        },
        {
          type: 'string',
          value: 'Email',
          placeholder: 'Ej: correo@correo.com',
          field: 'contactEmail',
          validationType: 'email',
          validations: {
            length: {
              min: 1,
              max: 50,
            },
          },
          required: false,
          active: true,
          editable: true,
        },
        {
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
          required: false,
          active: true,
          editable: true,
        },
        {
          type: 'date',
          value: 'Fecha de nacimiento',
          placeholder: 'Ej: 01/01/1980',
          field: 'dateOfBirth',
          validationType: 'date',
          validations: {
            range: {
              min: 18,
              max: 120,
              message: '',
            },
          },
          required: false,
          active: true,
          editable: true,
        },
        {
          type: 'select',
          value: 'Tipo de identificación',
          placeholder: 'Ej: DNI',
          options: [
            {
              value: 'CUIT',
              field: 'identificationList_idType',
              fieldValue: 'T',
              active: true,
              subfields: [
                {
                  type: 'string',
                  value: 'Número de identificación',
                  placeholder: 'Ej: 27-28033514-8',
                  field: 'identificationList_idNumber',
                  validationType: 'string',
                  validations: {
                    length: {
                      min: 11,
                      max: 11,
                    },
                  },
                  required: true,
                  active: true,
                  editable: true,
                },
              ],
            },
            {
              value: 'CUIL',
              field: 'additionalData_name',
              fieldValue: 'CUIL',
              active: true,
              subfields: [
                {
                  type: 'string',
                  value: 'Número de identificación',
                  placeholder: 'Ej: option 3',
                  field: 'additionalData_value',
                  validationType: 'string',
                  validations: {
                    length: {
                      min: 1,
                      max: 100,
                    },
                  },
                  required: true,
                  active: true,
                  editable: true,
                },
              ],
            },
          ],
          required: true,
          active: true,
          editable: true,
        },
        {
          type: 'string',
          value: 'Domicilio',
          placeholder: 'Ej: Av. Borgoño 300',
          field: 'address_addressLine1',
          validationType: 'string',
          validations: {
            length: {
              min: 1,
              max: 50,
            },
          },
          required: false,
          active: true,
          editable: true,
        },
        {
          type: 'string',
          value: 'Ciudad',
          placeholder: 'Ej: Phoenix',
          field: 'address_city',
          validationType: 'string',
          validations: {
            length: {
              min: 1,
              max: 35,
            },
          },
          required: false,
          active: true,
          editable: true,
        },
      ],
    },
    {
      title: 'Datos destinatario',
      fields: [
        {
          type: 'select',
          value: 'Destino',
          placeholder: 'Seleccione un destino',
          options: [
            {
              value: 'Cuenta Bancaria',
              description: 'Recibe en 48 horas.',
              field: 'payoutMethod',
              fieldValue: 'B',
              active: true,
              subfields: [
                {
                  type: 'select',
                  value: 'Banco',
                  placeholder: 'Selecciona Banco',
                  options: [],
                  required: true,
                  active: true,
                  editable: true,
                },
                {
                  type: 'string',
                  value: 'Número de cuenta',
                  placeholder: 'Ej: 000-123-456',
                  field: 'bank_accountNumber',
                  validationType: 'number',
                  validations: {
                    length: {
                      min: 22,
                      max: 22,
                    },
                  },
                  required: true,
                  active: true,
                  editable: true,
                },
                {
                  type: 'string',
                  value: 'Nombre Titular de la cuenta',
                  placeholder: 'Ej: Juan Pérez',
                  field: 'bank_accountName',
                  validationType: 'string',
                  validations: {
                    length: {
                      min: 1,
                      max: 70,
                    },
                  },
                  required: true,
                  active: true,
                  editable: true,
                },
              ],
            },
            {
              value: 'Tarjeta Visa',
              description: 'Recibe en 1 hora.',
              field: 'payoutMethod',
              fieldValue: 'A',
              active: false,
              subfields: [],
            },
          ],
          required: true,
          active: true,
          editable: true,
        },
      ],
    },
  ],
};

export const MXN = {
  countryCode: 'MEX',
  form: [
    {
      title: 'Datos personales',
      fields: [
        {
          type: 'select',
          value: 'País',
          options: [
            {
              value: 'Mexico',
              field: 'address_country',
              fieldValue: '484',
              active: true,
            },
          ],
          active: true,
          required: true,
          editable: false,
        },
        {
          type: 'string',
          value: 'Primer nombre',
          placeholder: 'Ej: Pedro',
          field: 'firstName',
          validationType: 'string',
          validations: {
            length: {
              min: 1,
              max: 35,
              message: 'Debe contener mínimo 1 y máximo 35 caracteres',
            },
          },
          required: true,
          active: true,
          editable: true,
        },
        {
          type: 'string',
          value: 'Segundo nombre',
          placeholder: 'Ej: Alejandro',
          field: 'middleName',
          validationType: 'string',
          validations: {
            length: {
              min: 1,
              max: 35,
            },
          },
          required: false,
          active: true,
          editable: true,
        },
        {
          type: 'string',
          value: 'Apellido',
          placeholder: 'Ej: Gonzáles',
          field: 'lastName',
          validationType: 'string',
          validations: {
            length: {
              min: 1,
              max: 35,
            },
          },
          required: true,
          active: true,
          editable: true,
        },
        {
          type: 'string',
          value: 'Email',
          placeholder: 'Ej: correo@correo.com',
          field: 'contactEmail',
          validationType: 'email',
          validations: {
            length: {
              min: 1,
              max: 50,
            },
          },
          required: false,
          active: true,
          editable: true,
        },
        {
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
          required: false,
          active: true,
          editable: true,
        },
        {
          type: 'date',
          value: 'Fecha de nacimiento',
          placeholder: 'Ej: 01/01/1980',
          field: 'dateOfBirth',
          validationType: 'date',
          validations: {
            range: {
              min: 18,
              max: 120,
              message: '',
            },
          },
          required: false,
          active: true,
          editable: true,
        },
        {
          type: 'string',
          value: 'Domicilio',
          placeholder: 'Ej: Av. Borgoño 300',
          field: 'address_addressLine1',
          validationType: 'string',
          validations: {
            length: {
              min: 1,
              max: 50,
            },
          },
          required: false,
          active: true,
          editable: true,
        },
        {
          type: 'string',
          value: 'Ciudad',
          placeholder: 'Ej: Phoenix',
          field: 'address_city',
          validationType: 'string',
          validations: {
            length: {
              min: 1,
              max: 35,
            },
          },
          required: false,
          active: true,
          editable: true,
        },
      ],
    },
    {
      title: 'Datos destinatario',
      fields: [
        {
          type: 'select',
          value: 'Destino',
          placeholder: 'Seleccione un destino',
          options: [
            {
              value: 'Cuenta Bancaria',
              description: 'Recibe en 48 horas.',
              field: 'payoutMethod',
              fieldValue: 'B',
              active: true,
              subfields: [
                {
                  type: 'select',
                  value: 'Banco',
                  placeholder: 'Selecciona Banco',
                  options: [],
                  required: true,
                  active: true,
                  editable: true,
                },
                {
                  type: 'string',
                  value: 'Número de cuenta',
                  placeholder: 'Ej: 000-123-456',
                  field: 'bank_accountNumber',
                  validationType: 'number',
                  validations: {
                    length: {
                      min: 18,
                      max: 18,
                    },
                  },
                  required: true,
                  active: true,
                  editable: true,
                },
                {
                  type: 'string',
                  value: 'Nombre Titular de la cuenta',
                  placeholder: 'Ej: Juan Pérez',
                  field: 'bank_accountName',
                  validationType: 'string',
                  validations: {
                    length: {
                      min: 1,
                      max: 70,
                    },
                  },
                  required: true,
                  active: true,
                  editable: true,
                },
              ],
            },
            {
              value: 'Tarjeta Visa',
              description: 'Recibe en 1 hora.',
              field: 'payoutMethod',
              fieldValue: 'A',
              active: false,
              subfields: [],
            },
          ],
          required: true,
          active: true,
          editable: true,
        },
      ],
    },
  ],
};
const countries = [
  {
    name: 'Colombia ',
    form: COP,
  },
  {
    name: 'Estados Unidos',
    form: USD,
  },
  {
    name: 'Peru',
    form: PEN,
  },
  {
    name: 'Argentina',
    form: ARS,
  },
  {
    name: 'Mexico',
    form: MXN,
  },
];

export default countries;
