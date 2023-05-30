import JobCard from "@/components/cards/JobCard";
import CandidatesSection from "@/components/layout/landing/for_candidates/CandidatesSection";
import LandingHeader from "@/components/layout/landing/landing_header/LandingHeader";

export default function Home() {
  return (
    <main className="bg-white">
      <LandingHeader />
      <hr />
      <CandidatesSection />
      <section className="flex flex-col gap-5 mt-10">
        <JobCard />
        <JobCard />
        <JobCard />

        {/* <Image src={jobApplication} width="300" height="300" alt="job application" style={{filter: "invert(40%) sepia(58%) saturate(2780%) hue-rotate(349deg) brightness(98%) contrast(100%)"}} /> */}
      </section>
    </main>
  );
}
