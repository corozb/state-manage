import React from 'react'
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialFooter = () => {
  return (
    <div className='dsc-footer__socials'>
      <FontAwesomeIcon icon={faFacebook} className='dsc-footer__socials-social' />
      <FontAwesomeIcon icon={faYoutube} className='dsc-footer__socials-social' />
      <FontAwesomeIcon icon={faTwitter} className='dsc-footer__socials-social' />
    </div>
  )
}

export default SocialFooter
