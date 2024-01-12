import serviceCardStyle from '@/app/styles/serviceCard.module.css';
import Link from 'next/link';
const ServiceCard = ({ icon, title, desc, isButton, link }) => {
    return (
        <div className={`${serviceCardStyle.box} ${serviceCardStyle.service_box}`}>
            <div className={serviceCardStyle.box_icon}>{icon}</div>
            <div className={serviceCardStyle.box_meta}>
                <h3 className={serviceCardStyle.title}><b>{title}</b></h3>
                <p>{desc}</p>
                {isButton && <Link type="button" id={serviceCardStyle.readMore} href={link}>Read More</Link>}
            </div>
        </div>
    );
}
export default ServiceCard;