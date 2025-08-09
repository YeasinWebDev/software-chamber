import React from 'react'
import Badge from './common/badge'
import Reviewglow from '../assets/images/reviewglow.png'
import Reviewglogo from '../assets/images/review-logo.png'
import Person from '../assets/images/person.jpg'

function Review() {
    return (
        <div className=' bg-[#0e0e17] flex items-center px-2 md:px-5 lg:px-14 pt-30 flex-col relative'>
            <img src={Reviewglow} alt="" className='absolute bottom-0 left-0' />
            <img src={Reviewglow} alt="" className='absolute top-0 right-0 rotate-180' />
            <div className='w-fit'>
                <Badge />
            </div>

            <h2 className='font-medium text-white text-[28px] md:text-[50px] lg:text-[70px] xl:text-[90px] flex items-center justify-center flex-col mt-10 md:leading-16 lg:leading-20 text-center'>
                Don’t just take our word for it. 
                <span className='text-[#a5a5a5]'>Hear what our clients say </span>
            </h2>

            <div className='shadow-2xl shadow-[#0e2b2b] px-5 md:px-20 md:py-16 mt-16 md:mt-30 mb-16 rounded-2xl text-white'>
                <h4 className='font-medium font-outfit text-[30px]'>
                    "Working with this team has been an absolute game-changer for our business. Their expertise in software development, attention to detail, and commitment to delivering on time exceeded our expectations"
                </h4>

                <div className='flex items-center flex-col md:flex-row justify-between w-full pt-10'>
                    <div className='flex items-center gap-3'>
                        <img src={Person} alt="" className='w-[50px] h-[50px] rounded-full' />
                        <div>
                            <h5 className='font-medium text-[20px]'>Alex Larkins</h5>
                            <p className='text-[14px] text-[#a5a5a5]'>Art director at Airbnb</p>
                        </div>
                    </div>
                    <img src={Reviewglogo} alt="" className='w-[150px] h-[150px] object-contain' />
                </div>
            </div>

        </div>
    )
}

export default Review