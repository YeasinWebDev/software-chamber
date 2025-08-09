import ContactButton from './common/ContactButton'
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Navigation } from 'swiper/modules';

function whyChoose() {
    return (
        <div className='px-2 md:px-5 lg:px-14'>
            <div className='flex items-center justify-center flex-col'>
                <h2 className='font-medium text-black text-[30px] md:text-[50px] lg:text-[70px] xl:text-[90px] flex items-center justify-center flex-col mt-10 md:leading-16 lg:leading-20'>
                    Why Choose <span>Software Chamber</span>
                </h2>
                <p className='text-[#7f8180] md:w-[60%] xl:w-[40%] text-center py-8'>
                    Deliver personalized experiences to your customers with AI-powered recommendation engines and dynamic content generation.
                </p>
                <ContactButton text='Let’s Discuss' from='#16AD71' via='#2CCEBA' to='#2CCEBA' icon={<HiMiniArrowUpRight color='black' />} />
            </div>

            <div className='flex items-center justify-center my-20 relative'>
                <button className="custom-prev absolute left-0 lg:-left-10 top-1/2 -translate-y-1/2 z-10 p-2 lg:p-4 bg-black rounded-full shadow">
                    <IoIosArrowBack size={20} color='white' />
                </button>
                <button className="custom-next absolute right-0 lg:-right-10 top-1/2 -translate-y-1/2 z-10 p-2 lg:p-4 bg-black rounded-full shadow">
                    <IoIosArrowForward size={20} color='white' />
                </button>
                <Swiper
                    spaceBetween={20}
                    freeMode={true}
                    modules={[FreeMode, Navigation]}
                    navigation={{
                        nextEl: '.custom-next',
                        prevEl: '.custom-prev',
                    }}
                    className="mySwiper"
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1280: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                    }}
                >
                    {
                        demodata?.map((item, index) => (
                            <SwiperSlide className='flex items-center justify-center'>
                                <div className={`flex items-center lg:items-start flex-col bg-[#f3f3f3] p-4 rounded-2xl  h-[300px] gap-5 ${index % 2 === 0 ? '0' : 'md:mt-10'}`}>
                                    <div className='w-[80%]'>
                                        <h1 className='font-medium text-[30px] border-b-[1px] border-[#a5a5a5] pb-5 mb-5 w-full'>{item.title}</h1>
                                        <p className='text-[#494949] font-outfit'>{item.description}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}


const demodata = [
    {
        title: 'Efficiency',
        description: 'Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.'
    },
    {
        title: 'Adaptability',
        description: 'Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.'
    },
    {
        title: 'Scalability',
        description: 'Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.'
    },
    {
        title: 'Precision',
        description: 'Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.'
    },
    {
        title: 'Efficiency',
        description: 'Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.'
    },
    {
        title: 'Adaptability',
        description: 'Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.'
    },
    {
        title: 'Scalability',
        description: 'Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.'
    },
    {
        title: 'Precision',
        description: 'Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.'
    }
]

export default whyChoose