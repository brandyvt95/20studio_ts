
"use client"

import { memo, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import cn from 'classnames'
import s from './style.module.css'
import Image from 'next/image'
import { isMobile } from '@/utils/responsive';
import ButtonHoverNew2 from '../ButtonHoverNew2'
import IconSVG from '@/components/Icon/IconSVG'
gsap.registerPlugin(ScrollTrigger,useGSAP)
interface ILetContact {
  propsForGsap?: any,
  disableImg?: boolean
}
function LetContact({ propsForGsap, disableImg }: ILetContact) {
  const triggleSection = useRef<HTMLUListElement>(null)

  const container = useRef<any>(null)
  const dirAction = [0, -1, 1, -1, 1]


  useGSAP(() => {
    if(isMobile() || disableImg) return
    gsap.timeline({
      scrollTrigger: {
        scroller: propsForGsap.scrollerRef,
        trigger: triggleSection.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    })
    .to(`.${s.media}`, {
      x:(i) => dirAction[i] * 70,
    })
  })

  return (
    <section className={cn(s.letcontact_section, s.light_background)} ref={container} >
      <div className={s.container}>
        {disableImg ? <></> :
          <ul className={s.media_wrapper} ref={triggleSection}>
            <li className={s.media}>
              <Image sizes="100vw" alt="d" src="/home/letcontact_c.png" width={0} height={0} style={{ width: "100%", height: "auto" }} quality={100} />
            </li>
            <li className={s.media}>

              <Image sizes="100vw" alt="d" src="/home/letcontact_tl.png" width={0} height={0} style={{ width: "100%", height: "auto" }} quality={100} />
            </li>
            <li className={s.media}>
              <Image sizes="100vw" alt="d" src="/home/letcontact_tr.png" width={0} height={0} style={{ width: "100%", height: "auto" }} quality={100} />
            </li>
            <li className={s.media}>
              <Image sizes="100vw" alt="d" src="/home/letcontact_bl.png" width={0} height={0} style={{ width: "100%", height: "auto" }} quality={100} /></li>
            <li className={s.media}>
              <Image sizes="100vw" alt="d" src="/home/letcontact_br.png" width={0} height={0} style={{ width: "100%", height: "auto" }} quality={100} />
            </li>
          </ul>
        }

        <div className={s.text}>
          <h2 className={s.lable}>
            Contact us
          </h2>
          <h1 className={s.title}>
            <div className={s.title_line}>From vision</div>
            <div className={s.title_line}>to reality</div>
          </h1>
          <div className={s.body}>
            <p>Let&apos;s make dream come true</p>
          </div>

          <ButtonHoverNew2
            icon={<IconSVG src='/icon/arrow-right.svg' />}
            targetRedirect='mailto:vphcm@studio.vn'
            classAdd={cn(s.link, s.is_dark, s.wrap)}>
            Let&apos;s touch
          </ButtonHoverNew2>

        </div>
      </div>

    </section>
  )
}

export default LetContact