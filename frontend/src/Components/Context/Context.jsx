import React,{useState,useMemo} from "react";

export const AuthContext=React.createContext({
    token:"",
    email:"",
    userID:""
});

export const AuthContextProvider=(props)=>{
    const [loggedIn, setLoggedIn]=useState(false);
    const [onLogin, setOnLogin]=useState(false);
    const [userID, setUserID]=useState("");

    const login=(email,token,userID)=>{
        localStorage.setItem("token",token);
        localStorage.setItem("email",email);
        localStorage.setItem("id",userID);
    }    

    const contextValue = useMemo(
        () => ({
          login:login,
          loggedIn: loggedIn,
          setLoggedIn:setLoggedIn,
          userID:userID,
          setUserID:setUserID,
          onLogin:onLogin,
          setOnLogin:setOnLogin,
        }),
        [loggedIn,setLoggedIn,userID,setUserID,onLogin,setOnLogin]
      );    

    return(
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}