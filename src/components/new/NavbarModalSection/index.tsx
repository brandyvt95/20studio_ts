"use client"

import { memo, useCallback, useEffect, useRef, useState } from 'react'
import s from './style.module.css'
import gsap from 'gsap'
import cn from 'classnames';

import { usePathname } from 'next/navigation'

import { useEffectActive_NavbarModal } from '@/hooks/navbar/useEffectNavbarModal'

import { removeSplash } from '@/utils/removeSplash'
import ButtonHoverNew from '../ButtonHoverNew'

import { isMobile } from '@/utils/responsive'
import WrapperTrackMouse from '../WrapperTrackMouse'

import { useGSAP } from '@gsap/react'
import Image from 'next/image';
import ButtonHoverNew2 from '../ButtonHoverNew2';
import IconSVG from '@/components/Icon/IconSVG';


function NavbarModalSection() {
    //^^console.log("NavbarModalSection rere")
    const buttonMenuRef = useRef<HTMLButtonElement>(null)
    const listItemNavbarModal = useRef<HTMLUListElement>(null)
    const listImgHover = useRef<HTMLUListElement>(null)
    const listImgHoverFormat = useRef<any>([])
    const [itemNavbar, setItemNavbar] = useState(0);
    const indexCount = useRef<number>(5)


    const DomEffect = useRef<HTMLDivElement>(null)
    const MaskRef = useRef<HTMLDivElement>(null)
    const SectionRef = useRef<HTMLElement>(null)
    const pathName = usePathname()
    const pathNameFormat = removeSplash({ pathName: pathName })
  
    const [isMobi, setIsMobi] = useState(false)
    useEffect(() => {
        if (isMobile()) setIsMobi(true)
    }, [])

  

    useEffect(() => {
        if (listImgHover.current) {
            listImgHoverFormat.current = Array.from(listImgHover.current.children)
        }

    }, [listImgHover])

   
    const  hoverItem = useCallback((e: MouseEvent)  => {
        const target = e.target as HTMLElement;

        if (target.tagName.toLowerCase() === 'a') {

            setItemNavbar(Number(target.getAttribute("data-link")))
        }
    },[])

    useEffect(() => {
     
        if (listItemNavbarModal.current) listItemNavbarModal.current.addEventListener('mousemove', hoverItem, false)
        return () => {
            if (listItemNavbarModal.current) listItemNavbarModal.current.removeEventListener('mousemove', hoverItem, false)
        }
    }, [])

    useGSAP(() => {
        if (listImgHoverFormat.current && listImgHoverFormat.current.length === 6) {
            let dir = 1
            indexCount.current++

            gsap.timeline({
                overwrite: true
            }).set(listImgHoverFormat.current[itemNavbar], { zIndex: indexCount.current }).fromTo(listImgHoverFormat.current[itemNavbar], {
                rotate: 10 * dir,
                opacity: 0,
                scale: 1.2
            }, {
                rotate: 0,
                opacity: 1,
                scale: 1,
                duration: .72,
                ease: "power3.out"
            })
        } else {
            //^^console.log("????? getting 6 img from ref on NavbarModal")
        }
    }, { dependencies: [itemNavbar], scope: listImgHover })


  

    useEffectActive_NavbarModal({
        btnMenu: buttonMenuRef.current,
        SectionRef: SectionRef.current,
        MaskRef: MaskRef.current,
        DomEffect: DomEffect.current,
        listItemNavbarModal: listItemNavbarModal.current,
        pathNameFormat: pathNameFormat,

    })


    return (

        <WrapperTrackMouse dataCursor='hidden'>
            <section className={s.navbar_modal_section} ref={SectionRef}>
                <div className={s.wrapper} ref={MaskRef}>


                    <div className={s.container} ref={DomEffect}>

                        <div className={s.logo}>
                            20 STUDIO
                        </div>

                        <ul className={s.main} id='main_navbar' ref={listItemNavbarModal}>
                            <li className={s.main_link}>
                                <ButtonHoverNew btnNavbar={true} data_id={0} targetRedirect='/home' classAdd={s.main_line}>
                                    Home
                                </ButtonHoverNew>
                            </li>
                            <li className={s.main_link}>
                                <ButtonHoverNew btnNavbar={true} data_id={1} targetRedirect='/sustainability' classAdd={s.main_line}>
                                    Sustainability
                                </ButtonHoverNew>
                            </li>
                            <li className={s.main_link}>
                                <ButtonHoverNew btnNavbar={true} data_id={2} targetRedirect='/work' classAdd={s.main_line}>
                                    Project
                                </ButtonHoverNew>

                            </li>
                            <li className={s.main_link}>
                                <ButtonHoverNew btnNavbar={true} data_id={3} targetRedirect='/about' classAdd={s.main_line}>
                                    About us
                                </ButtonHoverNew>

                            </li>
                                <li className={s.main_link} style={{visibility:'hidden',height:0}}>
                                <ButtonHoverNew btnNavbar={true} data_id={4} targetRedirect='/service' classAdd={s.main_line}>
                                    Service
                                </ButtonHoverNew>

                            </li>
                            <li className={s.main_link}>
                                <ButtonHoverNew btnNavbar={true} data_id={5} targetRedirect='/contact' classAdd={s.main_line}>
                                    Contact
                                </ButtonHoverNew>

                            </li>
                            <li className={s.social_link}>
                                <a className={s.link_item}>Linked</a>
                            </li>
                            <li className={s.social_link}>
                                <a className={s.link_item}>Facebook</a>
                            </li>
                            <li className={s.social_link}>
                                
                                <ButtonHoverNew btnNavbar={true} data_id={5} targetRedirect='https://www.instagram.com/20studio.vn/' classAdd={s.main_line}>
                                    Instagram
                                </ButtonHoverNew>
                            </li>
                        </ul>
                        <ul className={s.social}>
                            <li className={s.social_link}>
                            </li>
                        </ul>
                        <ul className={s.sub}>
                            <li className={s.sub_link}>
                                <span className={cn(s.link_item, s.is_reel)}>
                                    Made by 20 Team
                                </span>
                            </li>
                        </ul>

                        <div className={s.link_about}>

                            <ButtonHoverNew2 btnNavbar={true} icon={<IconSVG src='/icon/arrow-right.svg' />} targetRedirect='/service' classAdd={s.link}>
                                Our service
                            </ButtonHoverNew2>
                        </div>


                        {isMobi ? <></> :
                            <ul className={s.images} ref={listImgHover}>
                                <li >
                                    <Image src="/home/banner.png" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%' }} alt="logo narbar modal" />
                                </li>
                                <li>
                                    <Image src="/work3/8.png" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%' }} alt="logo narbar modal" />
                                </li>
                                <li>
                                    <Image src="/work1/2.png" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%' }} alt="logo narbar modal" />
                                </li>
                                <li>
                                    <Image src="/about/us2.png" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%' }} alt="logo narbar modal" />
                                </li>
                                <li>
                                    <Image src="/about/intro2.png" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%' }} alt="logo narbar modal" />
                                </li>
                                <li>
                                    <Image src="/about/banner.webp" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%' }} alt="logo narbar modal" />
                                </li>


                            </ul>
                        }
                    </div>

                </div>
            </section>
        </WrapperTrackMouse>



    )
}
export default memo(NavbarModalSection)