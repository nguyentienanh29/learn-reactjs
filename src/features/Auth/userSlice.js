import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from 'api/userApi';
import StorageKeys from 'constants/storage-key';

// First, create the thunk
//pay load ở đây là form user nhập được truyền vào
export const register = createAsyncThunk('user/register', async (payload) => {
  //call API to register
  const data = await userApi.register(payload);

  //save data to local storage
  localStorage.setItem(StorageKeys.TOKEN, data.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

  //return user data
  return data.user;
});

export const login = createAsyncThunk('user/login', async (payload) => {
  //call API to register
  const data = await userApi.login(payload);

  //save data to local storage
  localStorage.setItem(StorageKeys.TOKEN, data.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

  //return user data
  return data.user;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    //gía trị của user ban đầu
    current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
    //... có state gì thì thêm vào
  },
  //reducers tự động generate action type
  reducers: {},
  //extraReducers thì tự mình phải định nghĩa cho action type
  extraReducers: (builder) => {
    builder.addCase(
      //tương tự như 'user/register/fulfilled'
      register.fulfilled,
      (state, action) => {
        state.current = action.payload; // action.payload là return ở chỗ register ở return
      },
    );

    builder.addCase(login.fulfilled, (state, action) => {
      state.current = action.payload;
    });
  },
});

const { reducer } = userSlice;
export default reducer;
