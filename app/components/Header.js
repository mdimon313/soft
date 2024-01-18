"use client"
import { useEffect, useState } from "react"
import headerStyle from "@/app/styles/header.module.css"
import Container from "./Container"
import Navigation from "./Navigation"

export default function Header() {
    const [setHeader, setIsHeader] = useState(false);
    const scrollHeader = () => {
        if (window.scrollY >= 100) {
            setIsHeader(true);
        } else {
            setIsHeader(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", scrollHeader);
        return () => {
            window.addEventListener("scroll", scrollHeader);
        }
    }, [])

    return (
        <header className={`${headerStyle.header} ${setHeader ? headerStyle.fixed : ''}`}>
            <Container>
                <Navigation />
            </Container>
        </header>
    )
}
