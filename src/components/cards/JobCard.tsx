'use client';

import { Paper } from '@mui/material'
import Image from 'next/image'
import CardImage from "../../../public/lidl.png"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const JobCard = () => {
  return (
    <Paper className='w-[90%] m-auto p-5' sx={{boxShadow: "0 0 2px 0 rgba(145, 158, 171, 0.2), 0 12px 24px -4px rgba(145, 158, 171, 0.12)"}}>
        <Image src={CardImage} width={48} height={48} alt=''  className='rounded-md'/>
        <section className='my-4'>
        <p className='font-semibold text-lg'>Corporate Data Officer</p>
        <p className='text-[#00b8d9] text-sm'>Altenwerth, Medhurst and Roberts</p>
        <p className='text-gray-400 text-sm flex items-center'><LocationOnIcon sx={{fontSize: "100%"}}/>Sierra Leone</p>
        </section>
        <p className='text-[#919eab] text-xs mb-5'>Posted day: 29 May 2023</p>
        <hr className='mb-5'/>
        <section className='grid grid-cols-2 gap-5'>
        <p className='text-gray-400 text-xs flex items-center gap-1'><SignalCellularAltIcon sx={{fontSize: "140%"}}/> 7 Year Exp</p>
        <p className='text-gray-400 text-xs flex items-center gap-1'><LocalAtmIcon sx={{fontSize: "140%"}}/> Freelance</p>
        <p className='text-gray-400 text-xs flex items-center gap-1'><AccessTimeIcon sx={{fontSize: "140%"}}/>Competitive</p>
        <p className='text-gray-400 text-xs flex items-center gap-1'><PersonOutlineIcon sx={{fontSize: "140%"}}/>Intern/Student</p>

        </section>
    </Paper>
  )
}

export default JobCard