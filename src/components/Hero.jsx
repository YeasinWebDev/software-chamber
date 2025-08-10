import Hero1 from '../assets/images/hero-1.png'
import Hero2 from '../assets/images/hero-2.png'
import Hero3 from '../assets/images/hero-3.png'
import Hero5 from '../assets/images/hero-5.png'
import Small1 from '../assets/images/hero-small-1.png'
import Small2 from '../assets/images/hero-small-2.png'
import Badge from './common/Badge'
import ContactButton from './common/ContactButton'

function Hero() {
    return (
        <div className='bg-[#0e0e17] relative w-full md:min-h-screen'>
            <div className='absolute top-10 md:top-0 w-full flex items-center justify-center'>
                <img src={Hero1} alt="" className='w-fit' />
            </div>
            <img src={Hero2} alt="" className='w-fit absolute -top-32' />
            <img src={Hero3} alt="" className='w-fit absolute -top-28 right-0' />

            <div className=' flex items-center justify-center flex-col pt-16'>
                <Badge />
                <h1 className="text-center text-white text-[30px] md:text-[50px] lg:text-[90px] xl:text-[128px] leading-[1.1] py-6 lg:py-3">
                    <span className="block text-[#28fee4]">We are your Software</span>
                    <span className="flex items-center justify-center gap-4 bg-gradient-to-b from-[#28fee4] to-white text-transparent bg-clip-text">
                        Development <img src={Small1} alt="" className='w-[30px] md:w-[40px] lg:w-[60px] xl:w-fit'/> <img src={Small2} alt="" className='w-[30px] md:w-[40px] lg:w-[60px] xl:w-fit'/> Team
                    </span>
                    <span className="block">in The Cloud</span>
                </h1>
                <ContactButton />
                <img src={Hero5} alt="" className='w-fit mt-10 md:mt-20 mb-5 px-2 md:px-10' />
            </div>

        </div>
    )
}

export default Hero