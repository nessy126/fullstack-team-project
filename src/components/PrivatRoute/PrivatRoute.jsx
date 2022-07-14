import { getIsAuth } from "../../redux/auth/authSelector";
import { useSelector } from 'react-redux';
import { Redirect, Route } from "react-router-dom";

const PrivatRoute = ({children, path}) => {
  const isAuth = useSelector(getIsAuth)
  return isAuth  ? ( 
      <Route path={path}>{children}</Route>
   ) : (
     <Redirect to="/login" />    
   );
}
 
export default PrivatRoute;