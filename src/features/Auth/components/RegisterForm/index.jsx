import { DevTool } from '@hookform/devtools';
import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, LinearProgress, Typography, makeStyles } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import InputField from 'components/form-controls/inputField';
import PasswordField from 'components/form-controls/passwordField';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
    position: 'relative',
  },

  avatar: {
    margin: '0 auto',
    backgroundColor: theme.palette.secondary.main,
  },

  title: {
    margin: theme.spacing(2, 0, 3, 0),
    textAlign: 'center',
  },

  submit: {
    margin: theme.spacing(3, 0, 2, 0),
  },

  progress: {
    position: 'absolute',
    top: theme.spacing(1),
    left: 0,
    right: 0,
  },
}));

RegisterForm.propTypes = {
  onSubmit: PropTypes.func, // sẽ thông báo cho cha của nó là sẽ sử dụng hàm này khi user ấn submit
};

function RegisterForm(props) {
  const classes = useStyles();

  const schema = yup.object().shape({
    fullname: yup.string().required('Please Enter FullName'),
    email: yup.string().required('Please Enter Email'),
    password: yup.string().required('Please Enter Password').min(6, 'Password must be at least 6 characters long'),
    retypePassword: yup
      .string()
      .required('Please Enter Password')
      .min(6, 'Password must be at least 6 characters long')
      .oneOf([yup.ref('password')], 'Password does not match'),
  });

  const form = useForm({
    defaultValues: {
      fullname: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema),
  });

  //lấy cái gì đó từ form
  const {
    formState: { isSubmitting },
    control,
    handleSubmit,
  } = form;

  console.log('isSubmitting: ' + isSubmitting);

  const handleSubmitTodoForm = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
    //form.reset();
  };

  return (
    <div className={classes.root}>
      {isSubmitting && <LinearProgress className={classes.progress} />}

      <Avatar className={classes.avatar}>
        <LockOutlined></LockOutlined>
      </Avatar>

      <Typography className={classes.title} component="h3" variant="h5">
        Create An Account
      </Typography>

      <form onSubmit={handleSubmit(handleSubmitTodoForm)}>
        <InputField name="fullname" label="Full Name" form={form} />
        <InputField name="email" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />
        <PasswordField name="retypePassword" label="Retype Password" form={form} />
        <Button
          disabled={isSubmitting}
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          className={classes.submit}
        >
          Create an account
        </Button>
      </form>
      <DevTool control={control} />
    </div>
  );
}

export default RegisterForm;
