import JobCard from "@/components/cards/JobCard";
import ViewAllJobsButton from "@/components/inputs/landing/ViewAllJobsButton";

const FeaturedJobs = () => {
  return (
    <section>
      <header className="flex flex-col items-center w-[90%] m-auto text-center mt-16 mb-10">
        <p className="text-[0.75rem] font-extrabold text-gray-400 mb-10">
          FEATURED JOBS
        </p>
        <h1 className="text-[1.5rem] font-bold text-[#212b36] mb-6">
          Jobs available apply to Editorial Specialist, Account Manager, Human Resources Specialist and more!
        </h1>
      </header>
      <section className="flex flex-wrap md:grid md:grid-cols-2 lg:w-[60%] lg:m-auto lg:grid lg:grid-cols-3 items-center">
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      </section>
      <section className="flex justify-center">
      <ViewAllJobsButton />

      </section>

    </section>
  );
};

export default FeaturedJobs;
