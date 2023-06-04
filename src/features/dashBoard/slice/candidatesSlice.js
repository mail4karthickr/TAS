import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import DashboardApi from "api/dashboard-api";
import Candidate from "../model/candidate";

const initialState = {
    data: [],
    status: 'idle',
    error: null,
    selectedCandidate: null
}

const candidatesSlice = createSlice({
    name: 'candidates',
    initialState: initialState,
    reducers: {
        candidateShortlisted(state, action) {
            const { id, isChecked } = action.payload
            state.data = state.data.map((candidate) => {
                if (candidate.id === id) {
                    candidate.shortlisted = isChecked
                }
                return candidate
            })
            if (state.selectedCandidate !== null) {
                const selectedCandidate = state.data.find((candidate) => candidate.id === state.selectedCandidate.id)
                state.selectedCandidate = selectedCandidate
            }
        },
        candidateSelected(state, action) {
            const { candidate } = action.payload
            state.selectedCandidate = candidate.toJsonObject()
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(findCandidates.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(findCandidates.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.error = null
            const candidates = action.payload
            state.data = action.payload
            if (candidates.length > 0) {
                state.selectedCandidate = candidates[0]
            } else {
                state.selectedCandidate = null
            }
        })
        .addCase(findCandidates.rejected, (state, action) => {
            state.status = 'failed'
            state.data = []
            state.error = action.error.message
            state.selectedCandidate = null
        })
    }
});

export const findCandidates = createAsyncThunk('candidates/findCandidates', async (searchText) => {
    let dashboardApi = new DashboardApi()
    const candidate = await dashboardApi.findCandidates(searchText);
    return candidate
})

export const { candidateShortlisted, candidateSelected } = candidatesSlice.actions;
export default candidatesSlice.reducer;

export const getAllCandidates = (state) => {
    return state.candidates.data.map((candidate) => new Candidate(candidate))
}
export const getSelectedCandidate = (state) => {
    if (state.candidates.selectedCandidate !== null) {
        return new Candidate(state.candidates.selectedCandidate)
    } else {
        return null
    }
}