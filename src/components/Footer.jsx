import TeamImage from "../assets/images/groupImage.png";
import Reviewglow from '../assets/images/reviewglow.png'

function Footer() {
    return (
        <footer className="bg-[#0B0D0F] text-white px-5 md:px-10 lg:px-20 py-14 relative font-outfit overflow-hidden">
            <img src={Reviewglow} alt="" className='absolute top-0 left-0' />
            <img src={Reviewglow} alt="" className='absolute bottom-0 right-0 rotate-180' />
            <h2 className="text-4xl md:text-[56px] lg:text-[86px] xl:text-[106px] 2xl:text-[126px] font-semibold pb-10 font-sans">LET’S TALK</h2>
            <div className="flex flex-col lg:flex-row justify-between gap-10">

                
                <div className="flex-1 space-y-6">
                    <p className="text-[#a5a5a5] max-w-md">
                        A new era of energy, elegance, and elite competition begins here.
                        Where passion meets performance on the court like never before.
                    </p>

                    
                    <div>
                        <h3 className="font-semibold mb-3">Social media</h3>
                        <div className="grid grid-cols-2 gap-2 text-[#a5a5a5]">
                            <a href="#">Instagram ↗</a>
                            <a href="#">Twitter ↗</a>
                            <a href="#">Tiktok ↗</a>
                            <a href="#">Facebook ↗</a>
                            <a href="#">Linkedin ↗</a>
                            <a href="#">Youtube ↗</a>
                        </div>
                    </div>
                </div>

                
                <div className="flex-1 space-y-10">
                    <div>
                        <h4 className="font-semibold">ADDRESS</h4>
                        <p className="text-[#a5a5a5]">1901 Thornridge Cir, h</p>
                    </div>
                    <div>
                        <h4 className="font-semibold">PHONE</h4>
                        <p className="text-[#a5a5a5]">[+1] 872-298-3989</p>
                    </div>
                    <div>
                        <h4 className="font-semibold">EMAIL</h4>
                        <p className="text-[#a5a5a5]">hello@tranzit.com</p>
                    </div>
                </div>

                
                <div className="flex-none hidden lg:block z-20">
                    <img
                        src={TeamImage}
                        alt="Team"
                        className="lg:w-56 xl:w-60 h-auto object-cover rounded-lg"
                    />
                </div>
            </div>

            
            <div className="border-t border-dashed border-gray-700 mt-14 pt-6 flex flex-col md:flex-row justify-between text-sm text-[#a5a5a5] gap-4">
                <p>2024 Software Chamber All Right Reserved</p>
                <div className="flex gap-6">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms & Conditions</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
