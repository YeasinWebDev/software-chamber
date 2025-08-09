import Spotify from '../assets/icons/spotify'
import TalentQi from '../assets/icons/talentQl'
import DropBox from '../assets/icons/dropbox'
import Fliqpay from '../assets/icons/fliqpay'
import Stacks1 from '../assets/images/stacks-1.png'
import Stacks2 from '../assets/images/stacks-2.png'
import Stacks3 from '../assets/images/stacks-3.png'
import Stacks4 from '../assets/images/stacks-4.png'
import Stacks5 from '../assets/images/stacks-5.png'
import Stacks6 from '../assets/images/stacks-6.png'
import Stacks7 from '../assets/images/stacks-7.png'
import Stacks8 from '../assets/images/stacks-8.png'
import Badge from './common/Badge'
import StacksLogo from '../assets/icons/stacksLogo'
import ContactButton from './common/ContactButton'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';


function Stacks() {
    return (
        <div className='bg-[#090b0f] px-2 md:px-5 lg:px-14 pt-20'>
            <div className='flex items-center justify-between flex-col lg:flex-row gap-5'>
                <h2 className='text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[93px] text-white font-medium flex text-center lg:text-start flex-col'>
                    Our Stack Powers of <span>the <span className='text-[#858585]'>World’s</span> Most</span> <span className='text-[#858585]'>Beloved Companies</span>
                </h2>
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-4'>
                    {demoData.map((item, index) => (
                        <div
                            key={index}
                            className={`flex items-center cursor-pointer gap-4 bg-gradient-to-t from-[#0f302f] to-[#25ab9c] p-2 w-32 lg:w-40 rounded-full ${index === 3 || index === 2 ? "lg:-ml-10" : index === 4 ? "lg:-ml-20" : ""
                                }`}
                        >
                            <div className='w-10 h-10 rounded-full bg-[#f3f3f3] flex items-center justify-center p-4'>
                                {item.icon}
                            </div>
                            <p className='text-white text-sm md:text-[15px] lg:text-[18px] font-outfit font-light'>{item.title}</p>
                        </div>
                    ))}
                </div>

            </div>

            <div className=' border-2 border-[#1a8476] rounded-2xl relative overflow-hidden my-28 pt-16 pb-18 md:pb-40'>
                <img src={Stacks1} alt="" className='w-full h-full object-cover absolute top-0' />
                <img src={Stacks2} alt="" className='w-full h-full object-cover absolute -bottom-10 -left-16' />
                <img src={Stacks3} alt="" className='w-full h-full object-cover absolute -bottom-10 -right-28' />

                <div className='flex items-center justify-center flex-col'>
                    <div className='w-fit'>
                        <Badge />
                    </div>
                    <div className='p-2 md:p-4 rounded-2xl bg-white mt-10 md:mt-28 mb-10'>
                        <StacksLogo />
                    </div>
                    <h2 className='text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[93px] text-white flex items-center text-center justify-center flex-col mb-10'>
                        Uncover the Design and Development <span className='text-[#a5a5a5]'> Projects That Set Us Apart</span>
                    </h2>

                    <ContactButton />
                </div>
            </div>

            <div className='flex items-center justify-center pb-20 z-30 text-white flex-col'>
                <div className='w-fit'>
                    <Badge />
                </div>
                <div className='w-full mt-10 px-5'>
                    <Swiper
                        spaceBetween={20}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Navigation, Autoplay]}
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
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1280: {
                                slidesPerView: 3,
                                spaceBetween: 80,
                            },
                            1440: {
                                slidesPerView: 4,
                                spaceBetween: 80,
                            }
                        }}
                    >
                        {
                            demoData2?.map((item, index) => (
                                <SwiperSlide className='flex items-center justify-center'>
                                    <div className="w-full flex items-center gap-5">
                                        <img src={item.img} alt="" className='w-fit' />
                                        <h2 className='text-white text-xl md:text-2xl lg:text-3xl font-medium whitespace-nowrap'>{item.name}</h2>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <div className='w-full mt-10 px-10'>
                    <Swiper
                        spaceBetween={20}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        modules={[Navigation, Autoplay]}
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
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1280: {
                                slidesPerView: 3,
                                spaceBetween: 80,
                            },
                            1440: {
                                slidesPerView: 4,
                                spaceBetween: 80,
                            }
                        }}
                    >
                        {
                            demoData3?.map((item, index) => (
                                <SwiperSlide className='flex items-center justify-center'>
                                    <div className="w-full flex items-center gap-5">
                                        <img src={item.img} alt="" className='w-fit' />
                                        <h2 className='text-white text-xl md:text-2xl lg:text-3xl font-medium whitespace-nowrap'>{item.name}</h2>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

const demoData = [
    {
        icon: <Spotify />,
        title: "Spotify",
    }, {
        icon: <TalentQi />,
        title: "TalentQi",
    },
    {
        icon: <DropBox />,
        title: "DropBox",
    },
    {
        icon: <Fliqpay />,
        title: "FliqPay",
    },
    {
        icon: <DropBox />,
        title: "BitMap",
    }
]

const demoData2 = [
    {
        img: Stacks4 ,
        name: 'Entertainment'
    },
    {
        img: Stacks5 ,
        name: 'Software'
    },
    {
        img: Stacks6,
        name: 'Business'
    },
    {
        img: Stacks7,
        name: 'E-commerce'
    },
    {
        img: Stacks8,
        name: 'Health'
    },
    {
        img: Stacks4 ,
        name: 'Entertainment'
    },
    {
        img: Stacks5 ,
        name: 'Software'
    },
    {
        img: Stacks6,
        name: 'Business'
    },
    {
        img: Stacks7,
        name: 'E-commerce'
    },
    {
        img: Stacks8,
        name: 'Health'
    },
   
]
const demoData3 = [
  { img: Stacks5, name: 'Tech' },
  { img: Stacks4, name: 'Media' },
  { img: Stacks6, name: 'Corp' },
  { img: Stacks7, name: 'Retail' },
  { img: Stacks4, name: 'Creative' },
  { img: Stacks8, name: 'Health' },
  { img: Stacks6, name: 'Finance' },
  { img: Stacks5, name: 'Software' },
  { img: Stacks8, name: 'Wellness' },
  { img: Stacks7, name: 'Ecom' },
];

export default Stacks 