import JobCard from "@/components/cards/JobCard";
import JobtitleInputLanding from "@/components/inputs/landing/JobTitleInput";
import LocationLandingInput from "@/components/inputs/landing/LocationInput";
import SearchButton from "@/components/inputs/landing/SearchButton";

export default function Home() {
  return (
    <main className="bg-white">
      <header className="bg-[#212B36] h-[85vh]">
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
      </header>
      <hr />
      <section className="flex flex-col gap-5">
      <JobCard />
      <JobCard />
      <JobCard />

      </section>
    </main>
  );
}
