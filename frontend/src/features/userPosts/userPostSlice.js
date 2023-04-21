import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import userPostService from './userPostService'

const initialState = {
    userPosts: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

// Create new user post
export const createUserPost = createAsyncThunk('userPosts/create', async (userPostData, thunkAPI) => {
    try {
        // Goes into the Thunk API (Viewable with redux dev tools) and grabs the token from the user under the "auth" object.
        const token = thunkAPI.getState().auth.user.token
        return await userPostService.createUserPost(userPostData, token)
    } catch (error) {
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
    }
})

// Get user posts
export const getUserPosts = createAsyncThunk('userPosts/getAll', async (_, thunkAPI) => {
    try {
        // Goes into the Thunk API (Viewable with redux dev tools) and grabs the token from the user under the "auth" object.
        const token = thunkAPI.getState().auth.user.token
        return await userPostService.getUserPosts(token)
    } catch (error) {
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
    }
})

export const userPostSlice = createSlice({
    name: 'userPost',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(createUserPost.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createUserPost.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.userPosts.push(action.payload)
            })
            .addCase(createUserPost.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })

            .addCase(getUserPosts.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getUserPosts.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.userPosts = action.payload
            })
            .addCase(getUserPosts.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const {reset} = userPostSlice.actions
export default userPostSlice.reducer