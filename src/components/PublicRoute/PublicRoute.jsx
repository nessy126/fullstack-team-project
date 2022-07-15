import { getIsAuth } from "../../redux/auth/authSelector";
import {useSelector} from 'react-redux';
import { Redirect, Route } from "react-router-dom";

const PublicRoute = ({ children, path, isRestricted }) => {
  const isAuth = useSelector(getIsAuth)
  

  return isAuth && isRestricted ? (
    <Redirect to="/" />
    ) : (
        <Route path={path}>{children}</Route>
  )
}
 
export default PublicRoute;