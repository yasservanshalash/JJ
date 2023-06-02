'use client';
import styles from './JobHeader.module.css'
import WorkIcon from '@mui/icons-material/Work';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const JobHeader = () => {
  return (
    <main  className={styles.header}>

    <section className="w-[1200px] m-auto">
    <div className="flex items-center gap-x-3 py-10 ml-4">
        <p className="text-white">Home</p>
        <span className="bg-gray-400 w-[4px] h-[4px] rounded-full"></span>
        <p className="text-white">Jobs</p>
        <span className="bg-gray-400 w-[4px] h-[4px] rounded-full"></span>
        <p className="text-white">Marketing Coordinator</p>
        </div> 
        <h1 className='text-white text-3xl font-semibold ml-4 py-5'>
            Marketing Coordinator
        </h1>
        <div>
        <p className='text-gray-400 flex gap-3 items-center ml-4 font-semibold py-4'><WorkIcon /> Design</p>
        <p className='text-gray-400 flex gap-3 items-center ml-4 font-semibold py-4'><RemoveRedEyeIcon /> 420 views</p>
        <p className='text-gray-400 flex gap-3 items-center ml-4 font-semibold py-4'><LocationOnIcon /> Kenya</p>

        </div>
        <div>
            <button className='w-[240px] h-[32px] px-5 py-5 bg-orange-400 text-white rounded-md m-5 font-semibold'>Apply Now</button>
        </div>
</section>
</main>
  )
}

export default JobHeader