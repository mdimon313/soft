import headerStyle from "@/app/styles/header.module.css"
import Container from "./Container"
import Navigation from "./Navigation"

export default function Header() {
    return (
        <header className={headerStyle.header}>
            <Container>
                <Navigation />
            </Container>
        </header>
    )
}
