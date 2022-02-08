import {Navigate} from 'react-router-dom';
import jwt_decode from "jwt-decode";

// @ts-ignore
const VerifyLogin = ({children,redirectTo}) => {
    let isAuthenticated = false;
    if(localStorage.getItem("token") != null){
      const token = localStorage.getItem("token") || '';
      let tokendecoded: any = jwt_decode(token);
      let dateExpire = tokendecoded.exp;
      let dateNow = new Date();
      var s: string = dateNow.getTime().toString();
      var i: number = +s.substring(0, s.toString().length - 3);
      if (dateExpire - i <= 0) {
        isAuthenticated = false;
        localStorage.removeItem('token');
      }
      else{
        isAuthenticated = true;
      }
      return isAuthenticated ? <Navigate to={redirectTo} /> : children ;
    }
}

export default VerifyLogin;