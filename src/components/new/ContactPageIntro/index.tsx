import React, { useRef } from 'react'
import cn from 'classnames'
import s from './style.module.css'


import Link from 'next/link'
import Image from 'next/image'
import ButtonHoverNew2 from '../ButtonHoverNew2'
import IconSVG from '@/components/Icon/IconSVG'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(useGSAP)

export default function ContactPageIntro() {
    const container = useRef<any>()
      /*   useGSAP(() => {
            const colors = ["#0ae448","#ff8709", "#9d95ff", "#00bae2"];
    
            //initially colorize each box and position in a row
            gsap.set(".box", {
              backgroundColor: (i) => colors[i % colors.length],
              x: (i) => i * 350
            });
            
            
            gsap.to(".box", {
              duration: 10,
              ease: "none",
              x: `+=${window.innerWidth}`, //move each box 500px to right
              modifiers: {
                x: gsap.utils.unitize(x => parseFloat(x) % window.innerWidth) //force x value to be between 0 and 500 using modulus
              },
              repeat: -1
            });
        },{scope:container}) */
    return (
        <section className={s.ContactPageIntro} ref={container}>


          {/*   <div className="wrapper">
                    <div className="boxes">
                        <div className="box">1</div>
                        <div className="box">2</div>
                        <div className="box">3</div>
                    </div>
                </div>
 */}


            <div className={s.container}>

                <div className={s.image}>

                    <Image  quality={100} src="/home/banner.png" width={0} height={0} sizes='100vw' style={{ width: 'auto', height: '100%', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }} alt="image_cache_banner_home" />
                </div>

                <h1 className={s.h1}>Contact</h1>
                <div className={s.title}>
                    <div className={s.marquee}>
                        <div className={s.line}>· Get in touch · Liên lạc · اتصل - Связаться - 連絡する</div>
                        <div className={s.carousel}>

                            <div className={s.carousel__wrapper}>

                                <div className={s.carousel__slide}>
                                    <h3 className={s.carousel__image} >· Get in touch · 联系 · Liên lạc · Связаться · Contactum facere · Prendre contact</h3>
                                </div>
                                <div className={s.carousel__slide}>
                                    <h3 className={s.carousel__image} >· Get in touch · 联系 · Liên lạc · 연락하다 · Prendre contact · Связаться · اتصل</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.left}>
                    <div className={s.body}><p>Ready to take off? Message, tweet, or text us, and we will get back to you as soon as possible.</p></div>
                    <ul className={s.contact}>
                        <li className={s.contact_item}>
                            <ButtonHoverNew2
                                icon={<IconSVG src='/icon/arrow-right.svg' />}
                                targetRedirect='mailto:20studio.contact@gmail.com'
                                classAdd={cn(s.link, s.is_dark)}>
                                20studio.contact@gmail.com
                            </ButtonHoverNew2>

                        </li>
                        <li className={s.contact_item}>
                            <ButtonHoverNew2
                                icon={<IconSVG src='/icon/arrow-right.svg' />}
                                targetRedirect='0362237164'
                                classAdd={cn(s.link, s.is_dark)}>
                                0969.168.629
                            </ButtonHoverNew2>

                        </li>
                    </ul>
                </div>
                <div className={s.right}>
                    <a className={s.address}>
                        340D Hoang Van Thu Street,<br />
                        Ward 4, Tan Binh District,<br />
                        Ho Chi Minh City, Viet Nam.
                    </a>

                    <ButtonHoverNew2
                        icon={<IconSVG src='/icon/arrow-right.svg' />}
                        targetRedirect='0362237164'
                        classAdd={cn(s.link, s.is_dark)}>
                        Xem bản đồ
                    </ButtonHoverNew2>


                </div>
            </div>
        </section>
    )
}
