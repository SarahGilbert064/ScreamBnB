export const createReview = (review) => {
  return (dispatch, getState, {getfirebase, getFirestore}) => {
    //make async call to database
    const firestore = getFirestore();
    firestore.collection('reviews').add({
      ...review,
      authorFirstName: 'sarah',
      authorLastName: 'gilbert',
      authorId: 1234,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_REVIEW', review });
    }).catch((err) => {
      dispatch({ type: 'CREATE_REVIEW_ERROR', err});
    })
  }
};