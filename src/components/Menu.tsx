import { useNavigate } from "react-router-dom"

import { FaHome } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoLogOutOutline } from "react-icons/io5";


const Menu = () => {
  const navigate = useNavigate()

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

        <button type="button" onClick={() => navigate('/')}>
          <IoLogOutOutline />
          Logout
        </button>
      </div>
    </div>
  )
}

export default Menu