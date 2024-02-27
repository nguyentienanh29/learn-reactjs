import { Box, Container, Grid, Paper, makeStyles } from '@material-ui/core';
import productApi from 'api/productApi';
import { useEffect } from 'react';

ListPage.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {},
  left: {
    width: '250px',
  },
  right: {
    flex: '1 1 auto',
  },
}));

function ListPage(props) {
  const classes = useStyles();

  useEffect(() => {
    // Định nghĩa một hàm bất đồng bộ bên trong useEffect
    (async () => {
      // Gọi hàm getAll từ productApi và chờ kết quả
      const response = await productApi.getAll({ _page: 1, _limit: 10 });
      // In ra kết quả phản hồi vào console
      console.log({ response });
    })(); // Gọi ngay lập tức hàm bất đồng bộ vừa định nghĩa
  }, []);

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>Left Column</Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>Right Column</Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
