import { useEffect, useState } from "react";
import style from './menu.module.scss'
import Link from "next/link";

export default function Menu(){
  const [visibleMenu, setVisibleMenu] = useState<Boolean>(false)
  const [visibleProfile, setVisibleProfile] = useState<Boolean>(false)

  const menu = () => {    
    if (visibleProfile) {
      setVisibleProfile(false)
    }
    setVisibleMenu(!visibleMenu)
  }
  const profile = () => { 
    if (visibleMenu) {
      setVisibleMenu(false)
    }   
    setVisibleProfile(!visibleProfile)
  }

  const profileLinks = [
    {
      label:"Profile",
      link: "/"
    }
  ]

  const menuLinks = [
    {
      label: "Home",
      link: "/"
    },
    {
      label: "Wheel",
      link: "/wheel"
    }
  ]

  return(
      <>
        <div  className={style.navbar}>
          <div onClick={profile}>
            Profile
          </div>
          <div onClick={menu}>
            Menu
          </div>
        </div>
        <div className={`${style.dropdownMenu} ${(visibleMenu || visibleProfile) && style.opacity}`}>
          <div className={`${style.dropdownMenu__profile} ${visibleProfile && style.centerProfile}`}>
            <ul className={style.ul}>
              {
                profileLinks.map((link)=>{
                  return(
                    <li key={link.link}>
                      <Link href={link.link}>
                        {link.label}
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className={`${style.dropdownMenu__menu} ${visibleMenu && style.centerMenu}`}>
          <ul className={style.ul}>
              {
                menuLinks.map((link)=>{
                  return(
                    <li key={link.link}>
                      <Link href={link.link}>
                        {link.label}
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </>
  )
}