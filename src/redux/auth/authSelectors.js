export const getIsLogin = ({ auth }) => auth.isLoggedIn;

export const getUser = ({ auth }) => auth.user;

export const getToken = ({ auth }) => auth.token;

export const getStatusIsTraining = ({ auth }) => auth.isTraining;

export const getAllBooks = (state) => state.auth.training.booksList;
