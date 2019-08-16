import { createSelector } from "reselect";

const selectUser = state => state.user; //this function is called input Selector because it doesn't use createSelector

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
); //this function is called output Selector because it uses createSelector
