import React from 'react'
import { useState } from 'react'
import { CiHome, CiGrid31, CiPhone, CiCompass1} from "react-icons/ci";





const Header = () => {
    const [menu, setMenu] = useState(false);
    const itemsMenu = [
        { id: 1, label: "Home", link: "/", icon: <CiHome />},
        { id: 2, label: "About", link: "/about", icon: <CiGrid31 />},
        { id: 3, label: "Project", link: "/projects", icon: <CiPhone />},
        { id: 4, label: "Contact", link: "/contact", icon:<CiCompass1 />},
    ]

    return (
        <div onMouseOver={() => setMenu(true)}
         onMouseOut={() => setMenu(false)} 
         className={`cursor-pointer flex items-center justify-center absolute top-2 left-2 w-[5%] h-7 bg-blue-500/80 duration-300 rounded ${menu ? ' w-[50%] h-[6%] shadow-2xl shadow-blue-500/60' : ''}`}>
            <p className={`text-white font-bold ${menu ? 'hidden' : 'flex'}`}>ypiaza</p>
            <nav className={`w-full ${menu ? 'flex ' : 'hidden'}`}>
                <ul className={`flex items-center justify-between w-full px-8 `}>
                    {itemsMenu.map(item => (
                        <li>
                            <a className='font-semibold text-white' href={item.link}>{item.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Header