
"use client"

import s from './style.module.css'
import { useRef,memo } from 'react';
import gsap from 'gsap'
import Link from 'next/link';
import { isMobile } from '@/utils/responsive';
import { useGSAP } from '@gsap/react';
import useStoreZustand from '@Hooks/useStoreZustand';
import ButtonHoverNew from '../ButtonHoverNew';
import ButtonHoverNew2 from '../ButtonHoverNew2';
import IconSVG from '@/components/Icon/IconSVG';
import classNames from 'classnames';

interface IFooterSection {
    state?:string,
    propsForGsap?: any
}
function FooterSection({ propsForGsap,state }: IFooterSection) {
    const triggleSection = useRef<HTMLElement>(null)
    const domEffect = useRef(null)
    const { stateTransition } = useStoreZustand()

    useGSAP(() => {
     
        if (isMobile()) return
        let timeoutId: NodeJS.Timeout;
        if (stateTransition === 'entered') {
           //^^console.log("FooterSection re-render")
            timeoutId = setTimeout(() => {
            gsap.timeline({
                scrollTrigger:{
                    scroller: propsForGsap.scrollerRef,
                    trigger: triggleSection.current,
                    start: "top bottom",
                    end: "bottom bottom",
                    
                    scrub:true,
                }
            })
            .set(domEffect.current, { y: -window.innerHeight * .4 })
            .fromTo(domEffect.current, {
                y: -window.innerHeight * .4, // calc(100vh * -1.2)
            }, { y: 0 })
           },1000)
        }

        return () => clearTimeout(timeoutId); 
    }, {dependencies:[stateTransition]});



    return (
        <section className={s.footer_section} id="footer_section" ref={triggleSection}>
            <div className={s.container} ref={domEffect}>
                <div className={s.title}>
                    <div>Our</div>
                    <div>Mission</div>
                </div>
                <p className={s.body}>20Studio wishes to accompany you and create the best quality products at competitive prices within the committed deadline.</p>
                <div className={s.divider}></div>
                <ul className={s.address}>
                    <li className={s.item}>
                        <a >
                            340D Hoang Van Thu Street,<br />
                            Ward 4, Tan Binh District,<br /> HCMC.

                        </a>
                    </li>
                 
                    <li className={s.item}>
                             <a href="mailto:20studio.contact@gmail.com" >
                                    20studio.contact@gmail.com
                                </a>
                    </li>
                </ul>
                <ul className={s.nav_footer}>
                    <li className={s.item}>
                   
                    <ButtonHoverNew btnNavbarFooter={true} targetRedirect='/sustainability'>
                    Sustain
                   </ButtonHoverNew>
                    </li>
                    <li className={s.item}>
                    <ButtonHoverNew  btnNavbarFooter={true} targetRedirect='/home'>
                    Home
                   </ButtonHoverNew>
                    </li>
                    <li className={s.item}>
                    <ButtonHoverNew btnNavbarFooter={true} targetRedirect='/about'>
                   About us
                   </ButtonHoverNew>
                    </li>
                    
                    <li className={s.item}>
                    <ButtonHoverNew btnNavbarFooter={true} targetRedirect='/contact'>
                   Contact
                   </ButtonHoverNew>
                    </li>
                </ul>
                <ul className={s.social}>
                    <li className={s.item}>
                        <a>
                            Facebook
                        </a>
                    </li>
                    <li className={s.item}>
                        <a>
                            Linked
                        </a>
                    </li>
                    <li className={s.item}>
                        <ButtonHoverNew btnNavbar={false} data_id={5} targetRedirect='https://www.instagram.com/20studio.vn/' classAdd={s.main_line}>
                            Instagram
                        </ButtonHoverNew>
                    </li>
                </ul>
       {/* lỗi */}
                <ButtonHoverNew2 
                icon={<IconSVG src='/icon/arrow-right.svg' />} 
                targetRedirect='/service' 
                classAdd={classNames(s.link,s.wrap,s.circle)}>
                    Our service
                        </ButtonHoverNew2>
               
            </div>
        </section>
    )
}

export default memo(FooterSection)