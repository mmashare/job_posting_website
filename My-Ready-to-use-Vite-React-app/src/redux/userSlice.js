import { createSlice } from '@reduxjs/toolkit'


const initialState= {
    // currentUser me user ki ID save hogi
    currentUser: null,
    profileImg:null,
    loading:false,
    token:null
    
  }

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      loginStart:(state)=>{
        state.loading = true;
      },
      loginSuccess:(state,action)=>{
          state.loading = false;
          state.currentUser = action.payload;
         
          sessionStorage.setItem(
            "userID",
            JSON.stringify(state.currentUser)
          );

      },
      tokenGetter:(state,action)=>{
        state.loading = false;
        state.token = action.payload;
       
        sessionStorage.setItem(
          "token",
          JSON.stringify(state.token)
        );

    },
      loginFailure:(state)=>{
        state.currentUser = null;
        state.loading = false;
        
      },
      profileImgGetter :(state,action)=>{
        state.profileImg = action.payload;

        
        sessionStorage.setItem(
          "profileImg",
          JSON.stringify(state.profileImg)
        );

      },
      logout:(state)=>{
        state.currentUser = null;
        state.loading = false;
        

        sessionStorage.setItem(
          "userID",
          JSON.stringify(null)
        );

        sessionStorage.setItem(
          "profileImg",
          JSON.stringify(null)
        );
          location.reload()
      },
     
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { loginStart, loginSuccess, loginFailure,logout,profileImgGetter,tokenGetter } = userSlice.actions;
  
  export default userSlice.reducer;