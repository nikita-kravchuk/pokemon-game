import { createSlice } from "@reduxjs/toolkit";


export const slice = createSlice({
    name: 'functions',
    initialState: {
        data: {},
        isSelected: false
    },
    reducers: {
        selectPokemon: (state) => ({
            ...state,
            isSelected: true,
        })
    }
})

export const {selectPokemon} = slice.actions;