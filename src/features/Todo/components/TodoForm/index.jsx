import { DevTool } from '@hookform/devtools';
import InputField from 'components/form-controls/inputField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';

TodoForm.propTypes = {
  onSubmit: PropTypes.func, // sẽ thông báo cho cha của nó là sẽ sử dụng hàm này khi user ấn submit
};

function TodoForm(props) {
  // const schema = yup
  //   .object({
  //     title: yup.string().required('Please Enter Title'),
  //   })
  //   .required();
  const form = useForm({
    defaultValues: {
      title: ' ', // khai báo tất cả các biến field ở đây để map field đúng
    },
  });

  // resolver: yupResolver(schema),
  const { control, handleSubmit } = form;
  // const { name, ref, onChange, onBlur } = register('title');

  const handleSubmitTodoForm = (values) => {
    // console.log('TODO FORM:  ', values);
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }
    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleSubmitTodoForm)}>
        <InputField name="title" label="Todo" form={form} />
      </form>
      <DevTool control={control} />
    </div>
  );
}

export default TodoForm;
