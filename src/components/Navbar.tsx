import { useEffect, useState, useRef } from 'react'
// import {MenuTwoToneIcon} from '@mui/icons-material';
import './Navabar.css';
import MenuIcon from '../assets/menu.png'
export const Navbar = () => {
    // const windowSize = useRef([window.innerWidth, window.innerHeight])
    const [windowSize, setwindowSize] = useState([
        window.innerWidth,
        window.innerHeight
    ])

    const [sidebar, setsidebar] = useState<String>("none")
    const [openSlider, setopenSlider] = useState<Boolean>(false)
    const handleIconClick = () => {
        debugger
        setopenSlider(true)
    }
    useEffect(() => {
        if (windowSize[0] < 600) {
            setsidebar("block")
            setopenSlider(false)
        } else {
            setsidebar("none")
        }
        const handleWindowsize = () => {
            setwindowSize([window.innerWidth, window.innerHeight])
        }

        window.addEventListener('resize', handleWindowsize)
        return () => {
            window.removeEventListener("resize", handleWindowsize)
        }


    }, [windowSize, sidebar])
    return (
        <>
            <div className="main" onClick={()=>setopenSlider(false)}>
                <div className='main-text'>Hello</div>
                <ul className='main-link'>
                    <li>Home</li> 
                    <li>About</li>
                    <li>Contact</li>
                    <li>Peoples</li>

                </ul>
            </div>



            <img onClick={handleIconClick} className="menu-icon" src={MenuIcon} alt='menu' style={{ display: `${sidebar}` }} />


            {
                openSlider ? (

                <div className='sidebar'>
                    <ul className='main-link-side'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Peoples</li>
                        <li>Login</li>
                        <li>Signup</li>
                        <p>{windowSize[0]}</p>
                        <p>{windowSize[1]}</p>
                    </ul>
                </div>
                ):null
            }





        </>
    )
}
