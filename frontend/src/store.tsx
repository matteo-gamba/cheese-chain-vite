import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from './types'

interface UserState {
  user: User | undefined
}

const initialState: UserState = {
  user: undefined,
}

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = undefined
    },
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    },
  },
})

export const { logout, login } = userSlice.actions

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
})

type RootState = ReturnType<typeof store.getState>

export const selectUser = (state: RootState) => state.user.user

export default store