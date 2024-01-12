import { FaDatabase, FaLaptopFile } from "react-icons/fa6";
import { FaLaptopCode, FaAndroid} from "react-icons/fa";
import { CiUnlock } from "react-icons/ci";
import { LuLaptop2 } from "react-icons/lu";
const services = [
    {
        name: 'sd',
        icon: <FaDatabase />,
        title: 'Software Development',
        desc: 'We will create custom software according to your demand and business, that will help you to growing up your business.',
        links: './sds.html'
    },
    {
        name: 'wd',
        icon: <FaLaptopCode />,
        title: 'Website Development',
        desc: 'Now-a-days website is compulsory for a business either you have small or big business running. We will give you a great solution.',
        links: './wes.html'
    }
    ,
/*     {
        name: 'ad',
        icon: <FaAndroid />,
        title: 'App Development',
        desc: 'For engaged with a lot of customers for your business is connect with them with a Android application. We will develop a great app for your business.',
        links: './apdev.html'
    }, */
    {
        name: 'sdt',
        icon: <FaLaptopFile />,
        title: 'Software Development Training',
        desc: 'We provide Project based training with certified teachers. If you love to programming or want to built a career on IT sector then checkout our courses layout.',
        links: './softdevtraning.html'
    },
    {
        name: 'itc',
        icon: <CiUnlock />,
        title: 'IT Consultancy',
        desc: 'If you need any help with IT consultancy for your business or company then just contact with us. We will provide you a great and easy solution that will help you to solve your problems.',
        links: './itcon.html'
    },
/*     {
        name: 'ha',
        icon: <LuLaptop2 />,
        title: 'Hardware Accessories',
        desc: 'For your office, company or business you must need hardware accessories now-a-days. We will provide all kind of hardware accessories at a cheap rate.',
        links: './hardwareacc.html'
    } */
];

export default services;