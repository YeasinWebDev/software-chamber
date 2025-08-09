import React, { useState } from 'react'
import AllStars from '../assets/icons/AllStars'
import ArrowUp from '../assets/icons/ArrowUp'
import { FaArrowRight } from 'react-icons/fa'
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function Faq() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What software development services does your company offer?",
            answer:
                "We provide end-to-end software development services including web and mobile app development, UI/UX design, cloud solutions, API integration, and custom enterprise software tailored to your business needs.",
        },
        {
            question: "What industries do you specialize in?",
            answer:
                "We have experience delivering solutions for diverse industries such as finance, healthcare, e-commerce, entertainment, logistics, and education, ensuring industry-specific compliance and best practices.",
        },
        {
            question: "What sets your company apart from the competition?",
            answer:
                "Our blend of technical expertise, agile methodologies, and a deep focus on client collaboration allows us to deliver innovative, scalable, and reliable solutions that drive real business results.",
        },
        {
            question: "Is my project idea and information kept confidential?",
            answer:
                "Absolutely. We follow strict confidentiality agreements and implement robust security measures to ensure your intellectual property and project details remain fully protected.",
        },
    ];


    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <div className='px-2 md:px-5 lg:px-14 my-20'>
            <div className='flex items-center justify-center'>
                {/* for mobile */}
                <h1 className='font-medium text-2xl md:hidden text-center pb-10'>
                    <span>Comprehensive Answers <br /> to the Most</span>
                    <span className='flex items-start justify-center'><span><AllStars /></span><span>Common Questions <span className='text-[#a5a5a5]'>About Our</span>
                    </span>
                    </span>
                    <span className='flex items-center justify-center gap-2 text-[#a5a5a5]'>Services and How We Work<span><ArrowUp /></span></span>
                </h1>
                {/* for desktop */}
                <h1 className='font-medium hidden md:block md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[93px] md:pl-5'>
                    <span>Comprehensive Answers to the Most</span>
                    <span className='flex items-center gap-2'>
                        <span><AllStars /></span>
                        Common Questions
                        <span className='text-[#a5a5a5] whitespace-nowrap'>About Our</span>
                        in
                    </span>

                    <span className='flex items-center justify-center gap-2 text-[#a5a5a5]'>Services and How We Work<span><ArrowUp /></span></span>
                </h1>
            </div>

            <div>
                <div className='flex items-center justify-between border-b-2 border-dashed border-[#a5a5a5] mb-20'>
                    <h2 className='flex items-center justify-center gap-5 font-medium text-[40px] md:text-[60px] lg:text-[80px] xl:text-[100px] 2xl:text-[120px]'>
                        FAQ
                    </h2>
                    <div className='flex items-center justify-center gap-5 cursor-pointer'>
                        <h4 className='text-[14px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-outfit'>All FAQ</h4>
                        <div className='p-3 w-10 h-10 rounded-full bg-[#2CCEBA] size-1 flex items-center justify-center'>
                            <FaArrowRight color='black' />
                        </div>
                    </div>
                </div>

                <div className="space-y-4 transition-all duration-300 ease-in">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className="border-b-2 border-gray-300 overflow-hidden"
                            >
                                <button
                                    className="w-full flex justify-between items-center p-4 text-left"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <span className="font-medium text-[20px] md:text-[30px]">{faq.question}</span>
                                    <div className="p-2 md:p-4 rounded-full" style={{ backgroundColor: isOpen ? '#2CCEBA' : '#0c0c0c' }}>
                                        {isOpen ? <IoIosArrowUp color='white' size={18}/> : <IoIosArrowDown color='white' size={18}/>}
                                    </div>
                                </button>

                                <div
                                    className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="p-4 text-[#494949] text-[16px] md:text-[24px]">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                </div>
            </div>
        </div>
    )
}

export default Faq