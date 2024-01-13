"use client"
import { useEffect, useState } from "react";
import imgGalary from "@/lib/imgGalary";
import SectionTitle from "./SectionTitle";
import galaryStyle from '@/app/styles/imgGalary.module.css';
import Image from "next/image";
import Container from "./Container";

const OurProject = () => {
    const [data, setData] = useState([]);
    const [collection, setCollection] = useState([]);
    useEffect(() => {
        setData(imgGalary);
        setCollection([... new Set(imgGalary.map((item) => item.title))]);
    }, []);
    const gallary_filter = (itemData) => {
        const filterData = imgGalary.filter((item) => item.title == itemData);
        setData(filterData);
    }

    const placeholderImages = {
        jpg: 'data:image/jpeg;base64', // Base64-encoded string for JPEG
        png: 'data:image/png;base64',   // Base64-encoded string for PNG
        // Add more formats as needed
    };
    return (
        <section>
            <Container>
                <SectionTitle title={"Our Projects"} />
                <div className={galaryStyle.filter_item}>
                    <ul>
                        <li><button type="button" onClick={() => { setData(imgGalary) }}>All</button></li>
                        {
                            collection.map((item, id) => (
                                <li key={id}><button type="button" onClick={() => { gallary_filter(item) }}>{item}</button></li>
                            )
                            )
                        }
                    </ul>
                </div>
                <div className={galaryStyle.galaryWrapp}>
                    {
                        data.map(item => {
                            return (
                                <div key={item.id} className={galaryStyle.imgCard}>
                                    <Image src={item.img}
                                        alt={item.title}
                                        className={galaryStyle.galaryImg}
                                        width={100}
                                        height={100}
                                        blurDataURL={placeholderImages[`${item.extension}`]}
                                        placeholder="blur"
                                        quality={100}
                                        priority={true}
                                    />
                                    <div className={galaryStyle.img_meta}>
                                        <p style={{ color: "#fff" }}>{item.title}</p>
                                        {/* <button>preview</button> */}
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </Container>
        </section>
    );
};
export default OurProject;