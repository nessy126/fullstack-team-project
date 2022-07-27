export const getIsLogin = ({ auth }) => auth.isLoggedIn;

export const getUser = ({ auth }) => auth.user;

export const getToken = ({ auth }) => auth.token;

export const getStatusIsTraining = ({ auth }) => auth.isTraining;

export const getAllBooks = (state) =>
  state.auth.training.booksList?.length > 0 ? state.auth.training.booksList : [];

export const getTraininId = (state) => state.auth.training.trainingID;

export const getStatistics = (state) => state.auth.training.statistics;

export const getEndTraining = (state) => state.auth.training.endTraining;
