"use client"
import Link from "next/link";
import navStyle from "@/app/styles/nav.module.css"
import { useState } from "react";
import { usePathname } from "next/navigation";
import { RiArrowDownSLine } from "react-icons/ri";
export default function Navigation() {
    const [showSubmenu, setShowSubmenu] = useState(false);
    const pathname = usePathname();
    /*  if (pathname == '/') {
         setShowSubmenu(false)
     } else if (pathname == '/portfolio') {
         setShowSubmenu(false)
     } else if (pathname == '/contact') {
         setShowSubmenu(false)
     } */
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
    return (
        <nav className={navStyle.nav}>
            <div><h1>Logo</h1></div>
            <ul>
                <li><Link className={`${navStyle.link} ${pathname == '/' ? navStyle.active : ''}`} href="/">Home</Link></li>
                <li className={navStyle.main_menu}> <span className={`${navStyle.link} ${navStyle.li_span}`} onClick={() => showSubMenuFunc()}>Service <RiArrowDownSLine style={showSubmenu ? iconTransform : ''} /></span>
                    {/* <Link className={navStyle.link} href="/service">Service</Link> */}
                    <div className={`${navStyle.submenu} ${showSubmenu ? navStyle.show : navStyle.hide}`} >
                        <ul>
                            <li><Link href="/service/soft_dev" className={`${navStyle.submenu_link}`}>Software Development Training</Link></li>
                            <li><Link href="/service/web_dev" className={`${navStyle.submenu_link}`}>Website Development Training</Link></li>
                            <li><Link href="/service/it" className={`${navStyle.submenu_link}`}>It Consultancy</Link></li>
                        </ul>
                    </div>
                </li>
                <li><Link className={`${navStyle.link} ${pathname == '/portfolio' ? navStyle.active : ''}`} href="/portfolio">Portfolio</Link></li>
                <li><Link className={`${navStyle.link} ${pathname == '/contact' ? navStyle.active : ''}`} href="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}
