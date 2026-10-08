
const AboutNav = ({ value, setValue }) => {
    return (
        <div className=' w-full h-[60px] flex justify-center items-center'>
            <div className='flex w-full justify-center items-center gap-4 h-[60px] font-poppins z-50 text-white'>
                <button onClick={() => setValue('about')}>
                    <p className={`${value === 'about' && 'border-b-4 border-gray-300'} font-poppins`}>About Me</p>
                </button>
                <button onClick={() => setValue('mySkills')}>
                    <p className={`${value === 'mySkills' && 'border-b-2 border-gray-300'} `}>Technologies</p>
                </button>
            </div>
        </div>)
}

export default AboutNav