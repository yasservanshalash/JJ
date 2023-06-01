import CategoryInput from "@/components/inputs/jobs/Category"
import KeywordInput from "@/components/inputs/jobs/Keyword"
import LocationInput from "@/components/inputs/jobs/Location"

const page = () => {
  return (
    <main className="w-[1200px] m-auto">
      <section className="flex gap-x-10">
      <KeywordInput />
        <CategoryInput />
        <LocationInput />
      </section>
    </main>
  )
}

export default page