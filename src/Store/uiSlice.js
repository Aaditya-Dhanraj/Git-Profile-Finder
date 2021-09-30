import { createSlice } from "@reduxjs/toolkit";

const PageUiSlice = createSlice({
  name: "PageUi",
  initialState: {
    Name: "",
    Profile: false,
    GithubTotalRepos: 10,
    GithubPerPage: 10,
    GithubPrevPerPage: 10,
    GithubTotalPages: 1,
    GithubCurrentPage: 1,
    GithubPreviousPage: 1,
  },
  reducers: {
    changeName(state, action) {
      // console.log(action.payload.Name, action.payload.Profile);
      state.Name = action.payload.Name;
      state.Profile = action.payload.Profile;
    },
    changeGithubTotalRepos(state, action) {
      if (action.payload.GithubTotalRepos) {
        state.GithubTotalRepos = action.payload.GithubTotalRepos;
      }
      if (action.payload.GithubPerPage) {
        state.GithubPerPage = action.payload.GithubPerPage;
      }
      if (action.payload.GithubTotalPages) {
        state.GithubTotalPages = action.payload.GithubTotalPages;
      }

      if (action.payload.GithubCurrentPage) {
        state.GithubCurrentPage = action.payload.GithubCurrentPage;
      }

      if (action.payload.GithubPreviousPage) {
        state.GithubPreviousPage = action.payload.GithubPreviousPage;
      }

      if (action.payload.GithubPrevPerPage) {
        state.GithubPrevPerPage = action.payload.GithubPrevPerPage;
      }
      console.log(
        state.GithubTotalRepos,
        state.GithubPerPage,
        state.GithubTotalPages,
        state.GithubCurrentPage,
        state.GithubPreviousPage,
        state.GithubPrevPerPage
      );
    },
  },
});

export const PageUiActions = PageUiSlice.actions;

export default PageUiSlice;
