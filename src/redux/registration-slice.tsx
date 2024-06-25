import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface registrationState {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  error: string;
}

const initialState: registrationState = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  error: '',
};

const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setConfirmPassword: (state, action: PayloadAction<string>) => {
      state.confirmPassword = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { setName, setEmail, setPassword, setConfirmPassword, setError } = registrationSlice.actions;
export const registrationReducer = registrationSlice.reducer;

