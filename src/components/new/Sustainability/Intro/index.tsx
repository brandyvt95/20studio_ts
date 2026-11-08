
"use client"

import { memo, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import cn from 'classnames'
import s from './style.module.css'
import Image from 'next/image'
import { isMobile } from '@/utils/responsive';
import ButtonHoverNew2 from '@Components/new/ButtonHoverNew2'
import IconSVG from '@/components/Icon/IconSVG'
gsap.registerPlugin(ScrollTrigger, useGSAP)
interface ILetContact {
  propsForGsap?: any,
  content: any
}
function Intro({ propsForGsap, content }: ILetContact) {


  return (
    <section className={cn(s.intro_sustain, s.light_background)}  >
      <div className={s.container}>
        {content.disableImg ? <></> :
          <ul className={s.media_wrapper} >
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
            
          <IconSVG src='/icon/star.svg' className={s.icon} />
            {content.tag}
          </h2>
          {content.disableTit ? <></> :
            <h1 className={s.title}>
               {content.tit.map((item: any, index: any) => (
                <div className={s.title_line} key={index}>{item}</div>
               ))}
            </h1>
          }
          <div className={s.body}>
            <p>{content.more}</p>
          </div>
          {content.disableBtn ? <></> :
            <ButtonHoverNew2
              icon={<IconSVG src='/icon/arrow-right.svg' />}
              targetRedirect='mailto:contact@20studio.vn'
              classAdd={cn(s.link, s.is_white, s.wrap)}>
              Let&apos;s touch
            </ButtonHoverNew2>
          }


        </div>
      </div>

    </section>
  )
}

export default memo(Intro)