import JobCard from "@/components/cards/JobCard";
import JobtitleInputLanding from "@/components/inputs/landing/JobTitleInput";
import LocationLandingInput from "@/components/inputs/landing/LocationInput";
import SearchButton from "@/components/inputs/landing/SearchButton";
import Image from "next/image";
import jobApplication from "../../public/jobapplication.svg";
import airbnb from "../../public/airbnb.svg";
import dropbox from "../../public/dropbox.svg";
import facebook from "../../public/facebook.svg";
import google from "../../public/google.svg";
import { Divider } from "@mui/material";
import DividerVertical from "@/components/layout/divider/Divider";
export default function Home() {
  return (
    <main className="bg-white">
      <header className="bg-[#212B36] h-[120vh]">
        <h1 className="text-4xl text-white font-bold pt-8 px-5 text-center">
          Get The <span className="text-[#fa541c]">Career</span> You Deserve
        </h1>
        <p className="text-[#919eab] text-center p-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut atque
          dolores repudiandae ullam magnam.
        </p>
        <JobtitleInputLanding />
        <LocationLandingInput />
        <SearchButton />
        <section className="grid grid-cols-2 justify-items-center gap-y-8 mt-10">
          <Image
            src={airbnb}
            width="94"
            height="28"
            alt="airbnb"
            style={{
              filter:
                "invert(73%) sepia(17%) saturate(273%) hue-rotate(169deg) brightness(84%) contrast(83%)",
            }}
          />
          <Image
            src={dropbox}
            width="94"
            height="28"
            alt="dropbox"
            style={{
              filter:
                "invert(73%) sepia(17%) saturate(273%) hue-rotate(169deg) brightness(84%) contrast(83%)",
            }}
          />
          <Image
            src={facebook}
            width="94"
            height="28"
            alt="facebook"
            style={{
              filter:
                "invert(73%) sepia(17%) saturate(273%) hue-rotate(169deg) brightness(84%) contrast(83%)",
            }}
          />
          <Image
            src={google}
            width="94"
            height="28"
            alt="google"
            style={{
              filter:
                "invert(73%) sepia(17%) saturate(273%) hue-rotate(169deg) brightness(84%) contrast(83%)",
            }}
          />
        </section>
        <section className="grid grid-cols-2 justify-items-center gap-y-8 mt-10 w-[100%] m-auto">
        <div className="flex flex-col justify-center items-center gap-y-5">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-white">2m+</h1>
            <p className="text-gray-400">Jobs</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-white">250k+</h1>
            <p className="text-gray-400">Partners</p>
          </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-5">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-white">500k+</h1>
            <p className="text-gray-400">Successful Hiring</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <h1 className="text-white">156k+</h1>
            <p className="text-gray-400">Employee</p>
          </div>
          </div>
        </section>
      </header>
      <hr />
      <section className="flex flex-col gap-5">
        <JobCard />
        <JobCard />
        <JobCard />

        {/* <Image src={jobApplication} width="300" height="300" alt="job application" style={{filter: "invert(40%) sepia(58%) saturate(2780%) hue-rotate(349deg) brightness(98%) contrast(100%)"}} /> */}
      </section>
    </main>
  );
}
