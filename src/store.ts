import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    username: string;
    role: string;
}

const initialState: UserState = {
    username: '',
    role: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<{ username: string; role: string }>) => {
            state.username = action.payload.username;
            state.role = action.payload.role;
        },
        setRole: (state, action: PayloadAction<string>) => {
            state.role = action.payload;
        },
    },
});

export const { setUser, setRole } = userSlice.actions;

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
