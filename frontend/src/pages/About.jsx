import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed maiores non voluptatem nisi incidunt dignissimos aut consectetur magnam harum sapiente sint enim, earum expedita beatae? Earum aperiam ut beatae velit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ad fugit aliquid officia dolore, eius, doloribus vero velit natus nulla quo tempora eos porro asperiores nihil ratione, est odit sapiente!  </p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, eum. Fugit error quibusdam illo totam magnam repellendus consequuntur, voluptatem libero amet, blanditiis earum sunt nisi commodi voluptas facilis, omnis praesentium.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE USE'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates placeat voluptate corrupti temporibus illo vitae doloremque, possimus architecto rem natus perspiciatis quidem distinctio fugiat delectus inventore beatae sit in nam?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates placeat voluptate corrupti temporibus illo vitae doloremque, possimus architecto rem natus perspiciatis quidem distinctio fugiat delectus inventore beatae sit in nam?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates placeat voluptate corrupti temporibus illo vitae doloremque, possimus architecto rem natus perspiciatis quidem distinctio fugiat delectus inventore beatae sit in nam?</p>
        </div>
      </div>

      <NewsletterBox/>

    </div>
  )
}

export default About
