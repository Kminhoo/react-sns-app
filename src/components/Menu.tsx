import { useNavigate } from "react-router-dom"

import { FaHome } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoLogOutOutline, IoLogInOutline } from "react-icons/io5";

import { useContext } from "react";

import AuthContext from "context/AuthContext";

import { getAuth, signOut } from "firebase/auth";

import { app } from "firebaseApp";

import { toast } from "react-toastify";


const Menu = () => {
  const navigate = useNavigate()

  const { user } = useContext(AuthContext)

  const logout = async () => {
    const auth = getAuth(app)

    try {
      signOut(auth)
      toast.success("성공적으로 로그아웃 되었습니다.")
      navigate("/users/login")
    } catch (error: any) {
      toast.error(error?.code)
    }
  }

  return (
    <div className="footer">
      <div className="footer__grid">
        <button type="button" onClick={() => navigate('/')}>
          <FaHome />
          Home
        </button>

        <button type="button" onClick={() => navigate('/profile')}>
          <FaRegCircleUser />
          Profile
        </button>

        {user === null ? (
            <button type="button" onClick={() => navigate('/users/login')}>
              <IoLogInOutline />
              LogIn
           </button>
        ) : (
          <button type="button" onClick={logout}>
            <IoLogOutOutline />
            Logout
          </button>
        )}
      </div>
    </div>
  )
}

export default Menu