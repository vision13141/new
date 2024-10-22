import React from 'react'
import Container from '../Component/Container'
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


const SubNav = ({ className }) => {
    return (
        <div className={`${className} bg-subNav h-[45px] flex items-center`}>
            <Container className={`flex items-center justify-between`}>

                <div className="flex items-center gap-5">
                    <a href="" className='text-white flex items-center gap-2 font-montserrat'>
                        <FiPhone />
                        (414) 857 - 0107
                    </a>
                    <a href="" className='text-white flex items-center gap-2 font-montserrat'>
                        <MdOutlineEmail />
                        yummy@bistrobliss
                    </a>
                </div>

                <div className="flex gap-2">
                    <div className="bg-[#5C5C5C] h-7 w-7 rounded-full flex items-center justify-center">
                        <FaTwitter className='text-white ' />
                    </div>
                    <div className="bg-[#5C5C5C] h-7 w-7 rounded-full flex items-center justify-center">
                        <TiSocialFacebook className='text-white text-[22px]' />
                    </div>
                    <div className="bg-[#5C5C5C] h-7 w-7 rounded-full flex items-center justify-center">
                        <FaInstagram className='text-white' />
                    </div>
                    <div className="bg-[#5C5C5C] h-7 w-7 rounded-full flex items-center justify-center">
                        <FaWhatsapp className='text-white' />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default SubNav