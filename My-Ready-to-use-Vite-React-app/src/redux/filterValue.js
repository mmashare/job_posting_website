import { createSlice } from "@reduxjs/toolkit"; 

const initialState= {
   
    fulltime: false,
    parttime: false,
    intership: false,
    remote:false,
    onsite:false,
    underOneYear:false,
    oneOrTwoYear:false,
    twoToSixYear:false,
    overSixYear:false,
    
  }


const FilterSlice = createSlice({
    name: 'Filter',
    initialState,
    reducers:{
        FullTime:(state,action)=>{
            state.fulltime = action.payload;
        },

        Parttime:(state,action)=>{
            state.parttime = action.payload;
        },

        Intership:(state,action)=>{
            state.intership = action.payload;
        },

        Remote:(state,action)=>{
            state.remote = action.payload;
        },

        Onsite:(state,action)=>{
            state.onsite = action.payload;
        },
        UnderOneYear:(state,action)=>{
            state.underOneYear = action.payload;
        },
        OneOrTwoYear:(state,action)=>{
            state.oneOrTwoYear = action.payload;
        },
        TwoToSixYear:(state,action)=>{
            state.twoToSixYear = action.payload;
        },
        OverSixYear:(state,action)=>{
            state.overSixYear = action.payload;
        },

    }

})

export const {FullTime,
    Parttime,
    Intership,
    Remote,
    Onsite,
    UnderOneYear,
    OneOrTwoYear,
    TwoToSixYear,
    OverSixYear} = FilterSlice.actions


export default FilterSlice.reducer;

