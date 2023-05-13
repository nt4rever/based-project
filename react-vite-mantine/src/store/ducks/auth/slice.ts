import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { saveLocalStorage, removeLocalStorage, KEY_LOCAL_STORAGE } from '~/utils/storage';

export interface User {
  email: string;
  accessToken: string;
}

export interface AuthState {
  isLoggedIn: boolean;
  loading?: boolean;
  accessToken?: boolean;
  currentUser?: User;
}

const initialState: AuthState = {
  isLoggedIn: false,
  loading: false,
  accessToken: undefined,
  currentUser: undefined
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loading(state) {
      state.loading = true;
      return state;
    },
    loginSuccess(state, action: PayloadAction<any>) {
      state.isLoggedIn = true;
      state.loading = false;
      state.currentUser = action.payload?.user;
      saveLocalStorage(KEY_LOCAL_STORAGE.ACCESS_TOKEN, action.payload?.token);
      return state;
    },
    loginFailed(state) {
      state.loading = false;
      return state;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.currentUser = undefined;
      removeLocalStorage(KEY_LOCAL_STORAGE.ACCESS_TOKEN);
      return state;
    }
  }
});

// Actions
export const authActions = authSlice.actions;

// Reducer
const authReducer = authSlice.reducer;
export default authReducer;
