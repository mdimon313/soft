import footerStyle from '@/app/styles/footer.module.css';
import Container from './Container';
import Link from 'next/link';
export default function Footer() {
    return (
        <footer className={footerStyle.footer}>
            <Container>
                <div className={footerStyle.footer_wrapper}>
                    <div className={footerStyle.com_info}>
                        <h2>NUR-SOFT.</h2>
                        <address>
                            <p>Email: <span>nursoft@gmail.com</span></p>
                            <p>Phone:
                                <Link href="tel:+8801947813505">018374746</Link>
                            </p>
                            <p>Address: Lorem ipsum dolor sit amet.</p>
                        </address>
                        <p >&copy; all rights reserved are nur-soft</p>
                    </div>
                    {/* <!-- contact form -->
                <div class="contact_form" id="contact">
                    <div class="contact_main">
                        <div class="name">
                            <input type="text" placeholder="Full name" />
                            <input type="email" placeholder="Email" />
                        </div>
                        <input type="text" placeholder="Title">
                        <textarea name="msg" id="msg" placeholder="Your Text"></textarea>
                        <button type="button">Send</button>
                    </div>
                </div> */}
                </div>
            </Container>
        </footer >
    )
}
