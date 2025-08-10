import { HiMiniArrowUpRight } from 'react-icons/hi2'
import Person from '../assets/images/letsTalk.png'
import ContactButton from './common/ContactButton'

function LetsTalk() {
    return (
        <div className="flex flex-col items-center justify-center px-2 md:px-5 lg:px-14 py-16 md:py-30">
            
            <h2 className="font-medium text-black text-center text-[30px] md:text-[50px] lg:text-[70px] xl:text-[90px] mt-10 leading-tight flex flex-col">
                Let’s talk about your next{" "}
                <span>
                    project.{" "}
                    <span className="text-[#a5a5a5]">We’re here to help.</span>
                </span>
            </h2>

            
            <p className="text-[#7f8180] md:w-[60%] xl:w-[40%] text-center py-8">
                Deliver personalized experiences to your customers with
                AI-powered recommendation engines and dynamic content
                generation.
            </p>

            
            <div className="flex flex-col md:flex-row items-start justify-center gap-10 w-full">
                {/* Image */}
                <div className="flex-1 xl:flex-none flex justify-center">
                    <img
                        src={Person}
                        alt="Let's Talk"
                        className="w-full hidden md:block md:max-w-md lg:max-w-lg object-contain"
                    />
                </div>

                {/* Form */}
                <div className="flex-1 w-full max-w-lg">
                    <form className="w-full space-y-4">
                        {/* First Name */}
                        <input
                            type="text"
                            placeholder="First Name"
                            className="w-full p-4 rounded-lg bg-gray-100 outline-none placeholder:text-[#494949] font-outfit"
                        />

                        {/* Last Name */}
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="w-full p-4 rounded-lg bg-gray-100 outline-none placeholder:text-[#494949] font-outfit"
                        />

                        {/* Email */}
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-4 rounded-lg bg-gray-100 outline-none placeholder:text-[#494949] font-outfit"
                        />

                        {/* Phone */}
                        <div className="flex gap-2">
                            <select className="p-4 rounded-lg bg-gray-100 outline-none">
                                <option value="+1">+1</option>
                                <option value="+44">+44</option>
                                <option value="+880">+880</option>
                            </select>
                            <input
                                type="tel"
                                placeholder="Phone"
                                className="flex-1 p-4 rounded-lg bg-gray-100 outline-none"
                            />
                        </div>

                        {/* Job Title */}
                        <input
                            type="text"
                            placeholder="Job Title"
                            className="w-full p-4 rounded-lg bg-gray-100 outline-none placeholder:text-[#494949] font-outfit"
                        />

                        {/* Your Message */}
                        <textarea
                            placeholder="Your message"
                            rows="4"
                            className="w-full p-4 rounded-lg bg-gray-100 outline-none placeholder:text-[#494949] font-outfit resize-none"
                        ></textarea>

                        <ContactButton
                            text="Submit"
                            from="#16AD71"
                            via="#2CCEBA"
                            to="#2CCEBA"
                            icon={<HiMiniArrowUpRight color="black" />}
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LetsTalk
