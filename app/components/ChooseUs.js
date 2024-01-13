import chooseUsStyle from '@/app/styles/service.module.css';
import chooseUsServices from '@/lib/chooseService';
import SectionTitle from './SectionTitle';
import ServiceCard from './ServiceCard';
const ChooseUs = () => {
    return (
        <section>
            <div className="container">
                <SectionTitle title={"Why Choose Us"} titleDesc={"There are a lot of software out in the market. So let's see why you should hire us."} />
                <div className={chooseUsStyle.main} id="chooseus_main">
                    {chooseUsServices.map((services, ind) => {
                        return (
                            <ServiceCard key={ind} icon={services.icon} title={services.heading} desc={services.desc} isButton={false} />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
export default ChooseUs;