import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { FileData } from "models/blog.model";

interface BlogState {
    filesData: FileData[]
}

const blogSlice = createSlice({
    name: "blog",
    initialState: {
        filesData: []
    } as BlogState,
    reducers: {
        setFilesData: (state, action: PayloadAction<FileData[]>) => {
            state.filesData = action.payload
        }
    }
})

const {reducer, actions} = blogSlice

export const {setFilesData} = actions

export default reducer