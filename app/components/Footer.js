import footerStyle from '@/app/styles/footer.module.css';
import Container from './Container';
export default function Footer() {
    return (
        <footer className={footerStyle.footer}>
            <Container>
                <p>&copy; all rights resarve are nur-soft</p>
            </Container>
        </footer >
    )
}
