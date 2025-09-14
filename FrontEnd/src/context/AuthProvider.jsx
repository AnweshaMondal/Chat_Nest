import React,{createContext, useContext, useState} from 'react';
import Cookies from  "js-cookie";


//  const AuthContext = createContext();
// //you are passing AuthProvider (the component) to useContext.
// // React Context only works if you pass the context object (AuthContext) you created at the top.


// function AuthProvider({children}){// context provider

//    const initialUserState = Cookies.get("jwt")|| localStorage.getItem("chatApp");

//    //parse the user data and storing in state
//     const[authUser, setAuthUser] = useState(initialUserState ? JSON.parse(initialUserState) : undefined);
    
//     return (
//       <div>
//          <AuthContext.Provider  value = {[authUser,setAuthUser]}>
//             {children}
//          </AuthContext.Provider>
//       </div>
//   )
// }
// export default AuthProvider;
// export const useAuth = ()=> useContext(AuthProvider);//useAuth a user defined hook
//Right now, I suspect in your AuthProvider.jsx you might have:
// Returned { authUser, setAuthUser } (an object) instead of [authUser, setAuthUser].
// Or forgot to export useAuth properly.

// context/AuthProvider.jsx
const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}
