import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 30,
    padding: '0 30px',
  },
});
Counter.propTypes = {};

function Counter(props) {
  const classes = useStyles();

  const countState = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    const action = increase();
    dispatch(action);
  };
  const handleDecrease = () => {
    const action = decrease();
    dispatch(action);
  };

  return (
    <div>
      Counter: {countState}
      <div>
        <Button className={classes.root} onClick={handleIncrease}>
          Increase
        </Button>
        <Button className={classes.root} onClick={handleDecrease}>
          Decrease
        </Button>
      </div>
    </div>
  );
}

export default Counter;
