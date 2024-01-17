import socialStyle from "@/app/styles/socialLink.module.css"
import teamStyle from "@/app/styles/team.module.css"
import SocialLink from "./ScialLink";
import { RiFacebookLine } from "react-icons/ri";
import { IoLogoTwitter } from "react-icons/io";
import { CiInstagram } from "react-icons/ci";
import { TiSocialLinkedin } from "react-icons/ti";
import { BiLogoWhatsapp } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa6";
import Image from "next/image";
const TeamCard = ({ imgSrc, name, isShow, designation, desc, fb, tweet, ins, lin, wp, yt, f, t, i, l, w, y }) => {
    return (
        <div className={`${teamStyle.pro} ${teamStyle.ceo}`}>
            {/* <div className={teamStyle.pro_img}><img src={imgSrc} alt="team1" className={teamStyle.img} /></div> */}
            <div className={teamStyle.pro_img}>
                <Image src={imgSrc} alt={name} className={teamStyle.img} width={100} height={100} quality={100} priority={true} />
            </div>
            <div className={`${teamStyle.pro_desc} ${teamStyle.ceo}`}>
                <h2>{name}</h2>
                <p className={teamStyle.desig}>{designation}</p>
                {isShow && <p className={teamStyle.des_p}>{desc}</p>}
            </div>
            {/* <!-- social link --> */}
            <div className={socialStyle.social}>
                {fb && <SocialLink href={`${f}`} className={socialStyle.f} icon={<RiFacebookLine />} />}
                {tweet && <SocialLink href={`${t}`} className={socialStyle.t} icon={<IoLogoTwitter />} />}
                {ins && <SocialLink href={`${i}`} className={socialStyle.ins} icon={<CiInstagram />} />}
                {lin && <SocialLink href={`${l}`} className={socialStyle.lin} icon={<TiSocialLinkedin />} />}
                {wp && <SocialLink href={`${w}`} className={socialStyle.wp} icon={<BiLogoWhatsapp />} />}
                {yt && <SocialLink href={`${y}`} className={socialStyle.y} icon={<FaYoutube />} />}
            </div>
        </div>
    );
};
export default TeamCard;