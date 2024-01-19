import Container from "../components/Container";
import style from "./portfolio.module.css";

export const metadata = {
    title: 'Portfolio',
    description: 'portfolio',
}

export default function Portfolio() {
    return (
        <section>
            <Container>
                <div className={style.Portfolio}><h1>This page Under Development.....</h1></div>
            </Container>

        </section>
    )
}
