import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  lable: PropTypes.string,
  form: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const { name, label, form, disabled } = props;
  const { formState } = form;
  const { errors } = formState;

  // console.log(formState + 'formState nè');
  // console.log(errors + 'errors nè');
  // const hasError = formState.touched[name] && errors[name];
  // console.log(errors[name], formState[name]);
  // const { name, ref, onChange, onBlur } = register('title');

  return (
    <Controller
      name={name}
      control={form.control}
      // rules={{
      //   required: { value: true, message: `${name} is required` },
      //   // pattern: {
      //   //   value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
      //   //   message: 'Invalid email format',
      //   // },
      // }}
      render={({ field }) => (
        <TextField
          {...field}
          fullWidth
          margin="normal"
          variant="outlined"
          label={label}
          disabled={disabled}
          error={!!errors[name]}
          helperText={errors[name] ? errors[name].message : ''}
        />
      )}
    />
  );
}

export default InputField;
