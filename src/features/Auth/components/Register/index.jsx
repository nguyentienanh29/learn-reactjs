import { unwrapResult } from '@reduxjs/toolkit';
import { register } from 'features/Auth/userSlice';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import RegisterForm from '../RegisterForm';

Register.propTypes = {
  closeDialog: PropTypes.func,
};

function Register(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    try {
      //auto set username == email
      values.username = values.email;
      console.log('Form Submit:', values);
      const action = register(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      console.log('New User: ', user);

      //close dialog
      const { closeDialog } = props;
      if (closeDialog) {
        closeDialog();
      }

      //do something here on register successfully
      enqueueSnackbar('Register Successfully !!!', { variant: 'success' });
    } catch (error) {
      console.log('Failed to register : ', error.message);
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };

  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
