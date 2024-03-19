// import { Navigate, Outlet } from "react-router-dom"

// import { getAuth, onAuthStateChanged } from 'firebase/auth'
// import { app } from '../firebaseApp'

// import { useState, useEffect } from "react"


// const ProtectedRoute = () => {
//   const auth = getAuth(app)

//   const [isAuthenticated, setAuthenticated] = useState<boolean>(false)

//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       if(user) {
//         setAuthenticated(true)
//       } else {
//         setAuthenticated(false)
//       }
//     })
//   }, [auth])

//   return (
//     isAuthenticated ? <Outlet /> : <Navigate to='users/login' replace />
//   )
// }

// export default ProtectedRoute

import { Navigate, Outlet } from "react-router-dom";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '../firebaseApp';
import { useState, useEffect } from "react";

const ProtectedRoute = () => {
  const auth = getAuth(app);

  const [isAuthenticated, setAuthenticated] = useState<boolean | null>(null); // 초기 상태를 null로 설정하여 로딩 상태 표시

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setAuthenticated(!!user); // 사용자가 있으면 true, 없으면 false로 설정
    });

    return () => unsubscribe(); // 컴포넌트 언마운트 시 구독 해제
  }, [auth]);

  if (isAuthenticated === null) {
    return <div className="loader">Loading...</div>; // 인증 상태 확인 중 로딩 표시
  }

  return (
    isAuthenticated ? <Outlet /> : <Navigate to='users/login' replace />
  );
}

export default ProtectedRoute;
