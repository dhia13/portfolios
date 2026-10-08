import Link from 'next/link'
import { useState } from 'react'
import profileData from '../../profile.json'

function Contact() {
    const { personal, contact } = profileData;
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    return (
        <div className='w-full h-full bg-black relative'>
            <div className='w-full h-full flex '>
                {/* Contact Form */}
                <div className='max-w-[600px]'>
                    {/* header */}
                    <div>
                        <h1 className='text-4xl font-extrabold text-red-400 px-10 my-4'>
                            Contact Me
                        </h1>
                        <p className='text-base font-medium text-white pl-10'>
                            I’m interested in freelance opportunities – especially ambitious or large projects. However,
                            if you have other request or question,
                            don’t hesitate to use the form.
                        </p>
                        {/* form */}
                        <div className='px-10'>
                            <div className=' lg:flex lg:gap-2 justify-center items-center'>
                                <div className='box-content mb-1 relative mt-4 lg:w-1/2 lg:pr-4'>
                                    <input
                                        autoComplete='off'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        type="text"
                                        className=" peer block border bg-input-color border-gray-300 text-xs box-content w-full 
                                px-2 h-4 pt-3  pb-4 outline-1 rounded-sm outline-slate-300 placeholder-transparent"
                                        name="Name"
                                        placeholder="Name" />
                                    <label className={` transition-all ${(name !== '') ? 'absolute top-0 left-2 text-xs text-gray-400' :
                                        ' absolute top-2.5 left-2 text-sm m-0 text-gray-400'}`}>Name</label>
                                </div>
                                <div className='box-content mb-1 relative mt-4 lg:w-1/2'>
                                    <input
                                        autoComplete='off'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="text"
                                        className=" peer block border bg-input-color border-gray-300 text-xs box-content w-full 
                                px-2 h-4 pt-3  pb-4 outline-1 rounded-sm outline-slate-300 placeholder-transparent"
                                        name="email"
                                        placeholder="Email" />
                                    <label className={` transition-all ${(email !== '') ? 'absolute top-0 left-2 text-xs text-gray-400' :
                                        ' absolute top-2.5 left-2 text-sm m-0 text-gray-400'}`}>Email</label>
                                </div>
                            </div>
                            <div>
                                <div className='box-content mb-1 relative mt-4'>
                                    <input
                                        autoComplete='off'
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                        type="text"
                                        className=" peer block border bg-input-color border-gray-300 text-xs box-content w-full 
                                px-2 h-4 pt-3  pb-4 outline-1 rounded-sm outline-slate-300 placeholder-transparent"
                                        name="Subject"
                                        placeholder="Subject" />
                                    <label className={` transition-all ${(subject !== '') ? 'absolute top-0 left-2 text-xs text-gray-400' :
                                        ' absolute top-2.5 left-2 text-sm m-0 text-gray-400'}`}>Subject</label>
                                </div>
                            </div>
                            <div>
                                <div className='box-content mb-1 relative mt-4'>
                                    <textarea
                                        autoComplete='off'
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        type="text"
                                        className=" peer block border bg-input-color border-gray-300 text-xs box-content w-full
                                    h-[150px] 
                                px-2 pt-3  pb-4 outline-1 rounded-sm outline-slate-300 placeholder-transparent"
                                        name="Message"
                                        placeholder="Message" />
                                    <label className={` transition-all ${(message !== '') ? 'absolute top-0 left-2 text-xs text-gray-400' :
                                        ' absolute top-2.5 left-2 text-sm m-0 text-gray-400'}`}>Message</label>
                                </div>
                            </div>
                        </div>
                        {/* submit button */}
                        <div className='w-full h-[40px] flex justify-center items-center mt-4'>
                            <button className='w-[80px] h-[40px] text-white rounded-md border
                         border-red-400 hover:bg-green-300'>
                                Send
                            </button>
                        </div>
                    </div>
                </div>
                {/* Location Img */}
                <div className='flex-1 relative'>
                    <img src='images/map.png' alt='map' className='w-full h-full' />
                    <div className='absolute top-[20px] left-[40px] w-[250px] h-[150px] bg-black rounded-md
                    flex justify-around items-start flex-col text-white text-sm'>
                        <div className='pl-1'>
                            <p>
                                {personal.name}
                            </p>
                            <p>
                                {contact.location}
                            </p>
                        </div>
                        <p className='pl-1'>
                            @: {contact.email}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact