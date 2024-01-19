"use client"
import Link from "next/link";
import navStyle from "@/app/styles/nav.module.css"
import { useState } from "react";
import { usePathname } from "next/navigation";
import { RiArrowDownSLine } from "react-icons/ri";
import { FaTimes } from "react-icons/fa";
import { FaAlignRight } from "react-icons/fa6";
import logo from '@/public/logo.png';
import Image from "next/image";

export default function Navigation() {
    const [showSubmenu, setShowSubmenu] = useState(false);
    const [isClick, setIsSetClick] = useState(false);
    const pathname = usePathname();

    const showSubMenuFunc = () => {
        if (!showSubmenu) {
            setShowSubmenu(true)
        } else {
            setShowSubmenu(false)
        }
    }
    const iconTransform = {
        transform: "rotate(180deg)",
        transition: "all 0.3s ease-in-out"
    }
    const toggleNavbar = () => {
        setIsSetClick(!isClick);
    }
    return (
        <nav className={navStyle.nav}>
            <div className={navStyle.logo}>
                <Link href={"/"} ><Image src={logo} alt="Nur-Soft" quality={100} priority={true} /></Link>
            </div>
            <ul style={isClick ? { transform: "scaleY(1)" } : {}}>
                <li><Link className={`${navStyle.link} ${pathname == '/' ? navStyle.active : ''}`} href="/">Home</Link></li>
                <li className={navStyle.main_menu}> <span className={`${navStyle.link} ${navStyle.li_span}`} onClick={() => showSubMenuFunc()}>Service <RiArrowDownSLine style={showSubmenu ? iconTransform : ''} /></span>
                    {/* <Link className={navStyle.link} href="/service">Service</Link> */}
                    <div className={`${navStyle.submenu} ${showSubmenu ? navStyle.show : navStyle.hide}`} >
                        <ul>
                            <li><Link href="/service/soft_dev" className={`${navStyle.submenu_link} ${pathname == '/service/soft_dev' ? navStyle.active : ''}`}>Software Development</Link></li>
                            <li><Link href="/service/web_dev" className={`${navStyle.submenu_link} ${pathname == '/service/web_dev' ? navStyle.active : ''}`}>Website Development Training</Link></li>
                            <li><Link href="/service/soft_dev_training" className={`${navStyle.submenu_link} ${pathname == '/service/soft_dev_training' ? navStyle.active : ''}`}>Software Development Training</Link></li>
                            <li><Link href="/service/it" className={`${navStyle.submenu_link} ${pathname == '/service/it' ? navStyle.active : ''}`}>It Consultancy</Link></li>
                        </ul>
                    </div>
                </li>
                <li><Link className={`${navStyle.link} ${pathname == '/portfolio' ? navStyle.active : ''}`} href="/portfolio">Portfolio</Link></li>
                <li><Link className={`${navStyle.link} ${pathname == '/posts' ? navStyle.active : ''}`} href="/posts">Blog</Link></li>
                <li><Link className={`${navStyle.link} ${pathname == '/contact' ? navStyle.active : ''}`} href="/contact">Contact</Link></li>
            </ul>
            <button onClick={toggleNavbar} className={navStyle.menuBar}>
                {isClick ? (
                    <FaTimes />
                    // <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 16 16" className={headerStyle.bars}>
                    //     <path d="M 2.75 2.042969 L 2.042969 2.75 L 2.398438 3.101563 L 7.292969 8 L 2.042969 13.25 L 2.75 13.957031 L 8 8.707031 L 12.894531 13.605469 L 13.25 13.957031 L 13.957031 13.25 L 13.605469 12.894531 L 8.707031 8 L 13.957031 2.75 L 13.25 2.042969 L 8 7.292969 L 3.101563 2.398438 Z"></path>
                    // </svg>
                ) : (
                    <FaAlignRight />
                    // <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 16 16" className={headerStyle.bars}>
                    //     <path d="M 1 2 L 1 3 L 14 3 L 14 2 Z M 1 7 L 1 8 L 14 8 L 14 7 Z M 1 12 L 1 13 L 14 13 L 14 12 Z"></path>
                    // </svg>
                )}
            </button>
        </nav>
    );
}
