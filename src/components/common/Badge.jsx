import Star from '../../assets/icons/Star'

function Badge({ text = 'Smarter Idea, instant solutions' }) {
    return (
        <div className='bg-[#0d3f39] border-[1px] border-[#2CCEBA] px-4 py-2 rounded-full flex items-center justify-center gap-3 relative'>
            <Star />
            <p className='text-white text-sm md:text-[15px] lg:text-[18px] font-outfit font-light z-20'>{text}</p>
            <div className='w-full h-full flex items-center justify-center absolute pointer-events-none'>
                <div className='w-[60%] h-full bg-gradient-to-r from-transparent via-[#020c0b] to-transparent'></div>
            </div>
        </div>
    )
}

export default Badge