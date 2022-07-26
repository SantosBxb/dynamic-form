import { useEffect, useState } from 'react';
import './App.css';
import Number from './components/number';
import GetSelect from './components/select';
import String from './components/string';
import countries, { COP } from './form';

function App() {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [country, setCountry] = useState(COP);

  useEffect(() => {
    setErrors({});
    setForm({});
  }, [country]);

  const handleBlur = {
    string: (value, validations) => {
      if (value.length < validations.length.min) {
        return validations.length.message;
      }
      if (value.length > validations.length.max) {
        return validations.length.message;
      }
    },
    number: (value, validations) => {
      if (value < validations?.value.min) {
        return validations.value.message + value;
      }
      if (value > validations?.value.max) {
        return validations.value.message + value;
      }
    },
    email: (value, validations) => {
      if (value.length < validations.length.min) {
        return validations.length.message;
      }
      if (value.length > validations.length.max) {
        return validations.length.message;
      }
    },
    phone: (value, validations) => {
      if (value.length < validations.length.min) {
        return validations.length.message;
      }
      if (value.length > validations.length.max) {
        return validations.length.message;
      }
    },
    date: (value, validations) => {
      return;
    },
  };

  const handleSubInput = (item) => {
    switch (item.type) {
      case 'select':
        return (
          <>
            <br />
            <br />
            <label htmlFor={item.value}>{item.value}: </label>
            <select
              onChange={(e) => {
                const value = e.target.value;
                const index = e.target.selectedIndex;
                setForm({
                  ...form,
                  [item.options[index].field]: value,
                });
              }}
            >
              {item.options.map((option, i) => (
                <option key={i} value={option.fieldValue}>
                  {option.value}
                </option>
              ))}
            </select>
          </>
        );
      default:
        return (
          <>
            <br />
            <br />
            <String
              item={item}
              form={form}
              setForm={setForm}
              errors={errors}
              setErrors={setErrors}
              handleBlur={handleBlur}
            />
          </>
        );
    }
  };

  const handleInput = (item) => {
    switch (item.type) {
      case 'string':
        return (
          <String
            item={item}
            form={form}
            setForm={setForm}
            errors={errors}
            setErrors={setErrors}
            handleBlur={handleBlur}
          />
        );
      case 'number':
        return (
          <Number
            item={item}
            form={form}
            setForm={setForm}
            errors={errors}
            setErrors={setErrors}
            handleBlur={handleBlur}
          />
        );
      case 'select':
        const { optionIndex, Select } = GetSelect({
          item,
          form,
          setForm,
          errors,
          setErrors,
          handleBlur,
        });
        return (
          <>
            {Select}
            {item.options[optionIndex].subfields ? (
              <>
                {item.options[optionIndex].subfields.map((subfield) =>
                  handleSubInput(subfield)
                )}
              </>
            ) : null}
          </>
        );
      default:
        return (
          <String
            item={item}
            form={form}
            setForm={setForm}
            errors={errors}
            setErrors={setErrors}
            handleBlur={handleBlur}
          />
        );
    }
  };

  const selectCountry = () => (
    <>
      {' '}
      <label>Seleccione el país: </label>
      <select
        onChange={(e) => {
          setCountry(countries[e.target.selectedIndex].form);
        }}
      >
        {countries.map((country, i) => (
          <option key={i} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
    </>
  );

  const renderFields = (section) => {
    return (
      <>
        {section.fields.map((item, i) => (
          <div key={i} className="form-group">
            {handleInput(item)}
            <br />
            <br />
          </div>
        ))}
      </>
    );
  };

  return (
    <div className="App">
      {selectCountry()}

      {country && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(form);
          }}
        >
          {country.form.map((section, i) => {
            return (
              <div key={i}>
                <h1 htmlFor={section.title}>{section.title}: </h1>
                <br />
                {renderFields(section)}
              </div>
            );
          })}
          <button type="submit">enviar</button>
        </form>
      )}

      {form && (
        <>
          <h1>payload</h1>
          <p className="word">
            {JSON.stringify(form)
              .split(',')
              .map((e) => (
                <samp>
                  {e}
                  <br />
                </samp>
              ))}
          </p>
        </>
      )}
    </div>
  );
}
export default App;
