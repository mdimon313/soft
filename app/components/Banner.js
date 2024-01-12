"use client"
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Container from "./Container";
import Image from "next/image";
import bannerStyle from "@/app/styles/banner.module.css";
import bg1 from "@/public/banner/bg1.webp";
import bg2 from "@/public/banner/oracle-apex.jpeg";
import bg3 from "@/public/banner/bg3.jpg";
import bg4 from "@/public/banner/bg4.jpg";
import bg5 from "@/public/banner/bg5.jpeg";

export default function Banner() {
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 2000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )
    return (
        <>
            {/* // <section> */}
            {/* <Container> */}
            < div ref={sliderRef} className={`keen-slider ${bannerStyle.wrap}`
            }>
                <div className="keen-slider__slide number-slide1"><Image className={bannerStyle.banner_img} placeholder="blur" quality={100} priority={true} src={bg1} alt='img 1' /></div>
                <div className="keen-slider__slide number-slide2"><Image className={bannerStyle.banner_img} placeholder="blur" quality={100} priority={true} src={bg2} alt='img 2' /></div>
                <div className="keen-slider__slide number-slide2"><Image className={bannerStyle.banner_img} placeholder="blur" quality={100} priority={true} src={bg3} alt='img 2' /></div>
                <div className="keen-slider__slide number-slide2"><Image className={bannerStyle.banner_img} placeholder="blur" quality={100} priority={true} src={bg4} alt='img 3' /></div>
                <div className="keen-slider__slide number-slide2"><Image className={bannerStyle.banner_img} placeholder="blur" quality={100} priority={true} src={bg5} alt='img 4' /></div>
                {/* <div className="keen-slider__slide number-slide3">3</div>
            <div className="keen-slider__slide number-slide4">4</div>
            <div className="keen-slider__slide number-slide5">5</div>
            <div className="keen-slider__slide number-slide6">6</div> */}
            </div >
            {/* </Container> */}
            {/* // </section> */}
        </>
    );
}