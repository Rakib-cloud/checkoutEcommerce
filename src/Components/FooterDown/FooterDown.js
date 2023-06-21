import React from 'react'
import {SiFacebook,  SiLinkedin, SiPinterest, SiTwitter, SiYoutube} from 'react-icons/si'
import{AiFillInstagram} from 'react-icons/ai'
import './FooterDown.css'
const FooterDown = () => {
  return (
    <div class="mx-auto container mt-5 py-4">
          <div class='flex justify-center items-center gap-2 mb-4 lg:mb-0'>
                    <SiFacebook  class='h-7 w-7 rounded-full logo ' color='rgba(13,110,253)' />
                    <SiTwitter class='h-7 w-7 rounded-full logo' color='rgba(220,53,69)'/>
                    <AiFillInstagram class='h-8 w-8 rounded-full logo ' color='rgba(13,202,240)'/>
                    <SiLinkedin class='h-7 w-7 rounded-full logo'  color='rgba(13,110,253)'/>
                    <SiYoutube class='h-8 w-8 rounded-full logo' color='rgba(220,53,69)' />
                    <SiPinterest class='h-7 w-7 rounded-full logo' color='rgba(220,53,69)'/>
          </div>
    </div>
  )
}

export default FooterDown