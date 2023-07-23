/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state,action){
            state.push(action.payload);
        },
        removeUser(state,action){},
        deleteUsers(state,action){},
    }
});

export default userSlice;
export const {addUser,removeUser,deleteUsers}=userSlice.actions;