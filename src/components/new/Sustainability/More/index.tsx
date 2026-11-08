
"use client"

import { memo, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import cn from 'classnames'
import s from './style.module.css'
import Image from 'next/image'
import { isMobile } from '@/utils/responsive';
import ButtonHoverNew2 from '../../ButtonHoverNew2'
import IconSVG from '@/components/Icon/IconSVG'
gsap.registerPlugin(ScrollTrigger, useGSAP)
interface ILetContact {
  propsForGsap?: any
}
function More({ propsForGsap }: ILetContact) {
  const triggleSection = useRef<HTMLUListElement>(null)

  const container = useRef<any>(null)


  return (
    <section className={cn(s.more, s.light_background)} ref={container} >
      <div className={s.container}>

        <div className={s.text}>
          <h2 className={s.lable}>
            20 Sustainability
          </h2>

          <div className={s.body}>
            <p>We strive to be sustainable in every effort we make because we believe Even the smallest effort can make a better world.</p>
          </div>
          <ButtonHoverNew2
            icon={<IconSVG src='/icon/arrow-right.svg' />}
            targetRedirect='mailto:contact@20studio.vn'
            classAdd={cn(s.link, s.is_dark, s.wrap)}>
            Let&apos;s touch
          </ButtonHoverNew2>

        </div>
      </div>

    </section>
  )
}

export default More