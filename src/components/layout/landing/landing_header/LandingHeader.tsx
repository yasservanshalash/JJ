import JobtitleInputLanding from "@/components/inputs/landing/JobTitleInput";
import LocationLandingInput from "@/components/inputs/landing/LocationInput";
import SearchButton from "@/components/inputs/landing/SearchButton";
import Image from "next/image";
import airbnb from "../../../../../public/airbnb.svg"
import dropbox from "../../../../../public/dropbox.svg";
import facebook from "../../../../../public/facebook.svg";
import google from "../../../../../public/google.svg";

const LandingHeader = () => {
  return (
    <header className="bg-[#171728] h-[140vh]">
    <div className="w-[85%] m-auto py-2">
    <h1 className="text-[2.5rem] text-white font-bold pt-8 text-center">
      Get The <span className="text-[#fa541c]">Career</span> You Deserve
    </h1>
    </div>
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
    <section className="grid grid-cols-2 justify-items-center gap-y-8 mt-10 w-[100%] m-auto relative right-3 top-5">
    <div className="flex flex-col justify-center items-center gap-y-10">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-white font-bold text-xl">2m+</h1>
        <p className="text-gray-400 text-sm font-semibold">Jobs</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-white font-bold text-xl">250k+</h1>
        <p className="text-gray-400 text-sm font-semibold">Partners</p>
      </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-y-10 relative left-4">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-white font-bold text-xl">500k+</h1>
        <p className="text-gray-400 text-sm font-semibold">Successful Hiring</p>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h1 className="text-white font-bold text-xl">156k+</h1>
        <p className="text-gray-400 text-sm font-semibold">Employee</p>
      </div>
      </div>
    </section>
  </header>
  )
}

export default LandingHeader