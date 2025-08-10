import AllStars from '../assets/icons/AllStars'
import ArrowUp from '../assets/icons/ArrowUp'
import ServicesImag from '../assets/images/services.png'
import { FaArrowRight } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import Background from '../assets/images/services-background.png'
import BannerGlow from '../assets/images/services-banner-glow.png'
import BannerGlow2 from '../assets/images/services-banner-glow2.png'
import Badge from './common/Badge'
import ContactButton from './common/ContactButton'
import Earth from '../assets/images/earth.png'

function Services() {
    return (
        <div>
            {/* top */}
            <div className='px-2 md:px-5 lg:px-14 mt-10 md:mt-20 flex items-center text-center flex-col'>
                {/* for mobile */}
                <h1 className='font-medium text-2xl md:hidden'>
                    <span className='flex items-start justify-start relative'>
                        <span className='absolute top-0 left-7'><AllStars /></span>
                        <span>At Software Chamber, <span className='text-[#a5a5a5]'>we <br /> specialize</span> in turning complex challenges into elegant </span></span>
                    <span className='flex items-center justify-center gap-2 text-[#a5a5a5]'>digital solutions <span><ArrowUp /></span></span>
                </h1>
                {/* for desktop */}
                <h1 className='font-medium hidden md:block md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[93px] md:pl-5'>
                    <span className='flex items-center gap-2'>
                        <span><AllStars /></span>
                        At Software Chamber,
                        <span className='text-[#a5a5a5] whitespace-nowrap'>we specialize</span>
                        in
                    </span>
                    <span>turning complex challenges into elegant </span>
                    <span className='flex items-center justify-center gap-2 text-[#a5a5a5]'>digital solutions <span><ArrowUp /></span></span>
                </h1>


                <div className='mt-10 md:mt-28 mb-18 gap-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[auto_1fr_1fr]'>
                    {/* left side */}
                    <div className='flex flex-col gap-10'>
                        <div className='flex items-start lg:leading-16 xl:leading-18 flex-col'>
                            <span className='font-medium text-[30px] md:text-[40px] lg:text-[66px]'>20+</span>
                            <span className='text-[20px] md:text-[28px] lg:text-[34px] text-[#a5a5a5] whitespace-nowrap'>Tech Partners</span>
                        </div>
                        <div className='flex items-start lg:leading-16 xl:leading-18 flex-col'>
                            <span className='font-medium text-[30px] md:text-[40px] lg:text-[66px]'>150</span>
                            <span className='text-[20px] md:text-[28px] lg:text-[34px] text-[#a5a5a5] whitespace-nowrap'>Project Completed</span>
                        </div>
                        <div className='flex items-start lg:leading-16 xl:leading-18 flex-col'>
                            <span className='font-medium text-[30px] md:text-[40px] lg:text-[66px]'>1k+</span>
                            <span className='text-[20px] md:text-[28px] lg:text-[34px] text-[#a5a5a5] whitespace-nowrap'>Satisfied Customers</span>
                        </div>
                    </div>

                    {/* middle */}
                    <div className=''>
                        <img src={ServicesImag} alt="" className='w-full' />
                    </div>
                    {/* right */}
                    <div className="col-span-1 md:col-span-2 xl:col-span-1">
                        {
                            demodata.map((item, index) => {
                                return (
                                    <div key={index} className={`flex items-start gap-5 mb-5 ${index === demodata.length - 1 ? 'border-b-0' : 'border-b-[1px]'} border-[#a5a5a5] pb-5`}>
                                        <span className='font-bold text-[16px] border-8 md:border-[11px] lg:border-[18px] border-[#27B4A3] w-[40px] h-[40px] md:w-[55px] md:h-[55px] lg:w-[72px] lg:h-[72px] p-2 xl:p-4 rounded-full flex items-center justify-center'>{index + 1}</span>
                                        <div className='flex flex-col items-start'>
                                            <h2 className='text-[24px]  md:text-[28px] lg:text-[34px] font-semibold text-start'>{item.title}</h2>
                                            <p className='text-[16px] md:text-[19px] lg:text-[21px] text-[#666d80] text-start font-outfit md:leading-8'>{item.description}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <FeaturedServices />
            <SoftwareProcess />
        </div>
    )
}

export default Services

const FeaturedServices = () => {
    return (
        <div className=' mb-20 px-2 md:px-5 lg:px-14 mt-0 lg:mt-20'>
            <div className='flex items-center justify-between'>
                <h2 className='flex items-center justify-center gap-5 font-medium text-[40px] md:text-[60px] lg:text-[80px] xl:text-[100px] 2xl:text-[120px]'>
                    Services
                    <span><AllStars /></span>
                </h2>
                <div className='flex items-center justify-center gap-5'>
                    <h4 className='text-[14px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-outfit'>All Services</h4>
                    <div className='p-3 w-10 h-10 rounded-full bg-[#f3f3f3] size-1 flex items-center justify-center'>
                        <FaArrowRight />
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-10'>
                {
                    demodata2.map((item, index) => (
                        <div key={index} className='group w-full h-[200px] md:h-[320px] lg:h-[380px]  2xl:w-[552px] xl:w-[450px] xl:h-[500px] bg-[#f3f3f3] lg:hover:bg-[#27B4A3] transition-all ease-in-out duration-300 cursor-pointer rounded-2xl p-4 relative'>
                            <h4 className='text-[20px] md:text-[30px] lg:text-[40px] xl:text-[48px] font-semibold group-hover:text-white'>{item?.title}</h4>
                            <p className='text-[14px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-outfit mt-4 text-[#808080] group-hover:text-white'>{item?.description}</p>
                            <div className='text-[20px] size-10 lg:text-[30px] lg:size-20 rounded-full bg-[#fff] absolute bottom-4 left-4 flex items-center justify-center shadow-2xl'>
                                <FiArrowUpRight />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

const SoftwareProcess = () => {
    return (
        <div className='bg-[#090b0f] px-2 md:px-5 lg:px-14 my-20 relative'>
            {/* images */}
            <img src={Background} alt='background' className='absolute top-0 left-0' />
            <img src={BannerGlow} alt='BannerGlow' className='absolute top-0 left-0' />
            <img src={Background} alt='background' className='absolute top-0 right-0' />
            <img src={BannerGlow2} alt='BannerGlow' className='absolute top-0 right-0' />

            <div className='z-20 flex items-center justify-center flex-col pt-10 md:pt-28'>
                <div className='w-fit'>
                    <Badge />
                </div>
                <h2 className='font-medium text-white text-[30px] md:text-[50px] lg:text-[70px] xl:text-[90px] flex items-center justify-center flex-col mt-10 md:leading-16 lg:leading-20'>
                    Our Software
                    <span className='text-[#99a8a6] pl-3'>Development Process</span>
                </h2>
                <p className='text-[#7f8180] md:w-[60%] xl:w-[40%] text-center py-8'>
                    Deliver personalized experiences to your customers with AI-powered recommendation engines and dynamic content generation.
                </p>
                <ContactButton/>
                <div className='pt-5'>
                    <img src={Earth} alt='BannerGlow' className='' />
                </div>
            </div>
        </div>
    )
}


const demodata = [
    {
        title: 'Your Team in the cloud',
        description: 'We Hire Best and brightest Talents to build world class technology'
    },
    {
        title: 'Grow more with less',
        description: 'We have a competitive pricing structure'
    },
    {
        title: 'Weekly sprint and reviews',
        description: "Our fast review and feedback loop is designed to keep in you in the driver's seat"
    },
    {
        title: 'Communication First',
        description: 'We use modem tools and services to collaborate'
    }
]

const demodata2 = [
    {
        title: 'Web & Mobile App Devolopment',
        description: "Software Chamber specializes in creating powerful, scalable, and secure e-"
    },
    {
        title: 'Application Software Services',
        description: "Software Chamber specializes in creating powerful, scalable, and secure e-"
    },
    {
        title: 'Software Coding & Optimuation',
        description: "Software Chamber specializes in creating powerful, scalable, and secure e-"
    }
]