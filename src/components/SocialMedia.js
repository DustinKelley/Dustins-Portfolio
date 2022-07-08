import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs';


const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
        <a href='https://www.linkedin.com/in/dustincalebkelley/' target='blank'>
            <BsLinkedin href='https://www.linkedin.com/in/dustincalebkelley/'/>
        </a>
        </div>

        <div>
        <a href='https://github.com/DustinKelley?tab=repositories' target='blank'>
            <BsGithub />
        </a>
        </div>
    </div>
  )
}

export default SocialMedia