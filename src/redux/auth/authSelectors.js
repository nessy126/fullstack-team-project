export const getIsLogin = ({ auth }) => auth.isLoggedIn;

export const getUser = ({ auth }) => auth.user;
export const getStatusTraining = ({ auth }) => auth.isTraining;