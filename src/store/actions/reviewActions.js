export const createReview = (review) => {
  return (dispatch, getState) => {
    //make async call to database
    dispatch({ type: 'CREATE_REVIEW', review });
  }
};