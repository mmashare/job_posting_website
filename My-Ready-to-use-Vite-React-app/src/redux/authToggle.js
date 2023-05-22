import { createSlice } from "@reduxjs/toolkit"; 

const initialState= {
   
    authValue: false,
    
    
  }


const AuthToggleSlice = createSlice({
    name: 'authToggle',
    initialState,
    reducers:{
        AuthToggleChanger:(state,action)=>{
            state.authValue = action.payload;
        },
    }

})

export const {AuthToggleChanger} = AuthToggleSlice.actions


export default AuthToggleSlice.reducer;

