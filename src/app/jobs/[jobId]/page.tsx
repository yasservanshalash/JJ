import JobHeader from "@/components/layout/jobPageLayout/JobHeader"
import styles from "./page.module.css"
import JobInfoCard from "@/components/layout/jobPageLayout/JobInfoCard"
const JobPage = () => {
  return (
    <main>
        <JobHeader />
        <JobInfoCard />
    </main>
  )
}

export default JobPage