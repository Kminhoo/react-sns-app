import { createContext, ReactNode, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { app } from "firebaseApp";

interface AutnProps {
  children: ReactNode
}

const AuthContext = createContext({
  user: null as User | null,
})

export const AuthContextProvider = ({ children }: AutnProps) => {
  const [currentUser, setCurrentUser] = useState<null | User>(null)

  const auth = getAuth(app)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user) {
        setCurrentUser(user)
      } else {
        setCurrentUser(null)
      }
    })
  }, [auth])
  
  return <AuthContext.Provider value={{ user: currentUser }}>{children}</AuthContext.Provider>
}

export default AuthContext