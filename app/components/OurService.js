import serviceStyle from '@/app/styles/service.module.css';
import Title from '@/app/components/SectionTitle';
import ServiceCard from '@/app/components/ServiceCard';
import service_info from '@/lib/service_info';
import Container from './Container';

export default function OurService() {
    return (
        <section>
            {/* Our service */}
            <Container>
                <Title title="Our Service" titleDesc="We help you build great software within budget" />
                <div className={serviceStyle.service_main}>
                    {service_info.map((service, ind) => {
                        return <ServiceCard key={ind} icon={service.icon} title={service.title} desc={service.desc} link={"/"} isButton={true} />
                    })}
                </div>
            </Container>
        </section>
    );
}