import React, { useContext } from 'react'
import { FaCartPlus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import Context from '../Context/Context';

const SpecialCard = ({ item }) => {

    const { AddcartPopUp } = useContext(Context)
    const { id, image, name, description, price } = item

    return (
        <div className='w-[310px] h-[440px] bg-transparent rounded-md relative hover:-translate-y-3 duration-150 ease-linear hover:scale-[1.05] group'>
            <img src={image} alt=""
                className=' rounded-full w-[220px] h-[220px] object-cover scale-[0.9] ease-linear duration-150 absolute top-0 z-30 group-hover:scale-[1] group-hover:-rotate-6 left-1/2 -translate-x-1/2' />

            <div
                className="group-hover:bg-[#c31c1edb] border-[2px] shadow-2xl ease-linear duration-150 w-[270px] h-[325px] absolute bottom-[10px] 
                rounded-tl-[40px] rounded-tr-[5px] rounded-br-[40px] rounded-bl-[5px] ml-[20px] px-[20px]">
                <h3 className=' text-prh2 font-bold text-[24px] pt-[120px] group-hover:text-[#ffffffd6] ease-linear duration-150'>
                    {name}
                </h3>
                <p className='font-sans font-normaltext-[18px] pt-[5px] pb-[15px] group-hover:text-[#ffffffd6] ease-linear duration-150'>
                    {description}
                </p>

                <div className="flex items- justify-between text-prh2 group-hover:text-[#ffffffd6]">
                    <h3 className='font-bold font-matter text-[24px]'>${price}</h3>

                    <div className="flex items-center gap-3 pr-5 text-[24px]">
                        <button className=''>
                            <CiHeart className='text-2xl' />
                        </button>

                        <button onClick={() => AddcartPopUp(id)} className='flex items-center gap-1 font-serif text-sm text-white group-hover:text-prh2 bg-btn group-hover:bg-white  py-2 px-3 rounded-md'>
                            Add <FaCartPlus className='' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialCard