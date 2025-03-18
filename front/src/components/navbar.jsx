import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NavBar() {

    const eleStyle = "text-white text-lg font-semibold cursor-pointer hover:text-blue-600 "
    const[log, setLog] = useState(false)

    const navigate = useNavigate()

    return (
      <div className="flex flex-row gap-2.5 h-16 w-6xl bg-black backdrop-blur-lg rounded-[30px] mt-4 justify-evenly items-center shadow-lg border border-white/30">
        <p className={eleStyle} onClick={() => navigate('/')}>Home</p>
        <p className={eleStyle} onClick={() => navigate('/purchase')}>Purchase</p>
        <p className={eleStyle}>About</p>
        {log ? 
          <p className={eleStyle}>Profile</p>
        :
          <p className={eleStyle} onClick={() => navigate('/login')}>Login</p>
        }
      </div>
    );
  }
  