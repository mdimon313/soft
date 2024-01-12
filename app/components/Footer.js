import footerStyle from '@/app/styles/footer.module.css';
import Container from './Container';
export default function Footer() {
    return (
        <footer className={footerStyle.footer}>
            <Container>
                <p>&copy; all rights resarved</p>
            </Container>
        </footer >
    )
}
