import Header from './components/ResumeHeader';
import Summary from './components/ResumeSummary';
import Experience from './components/ResumeExperience';
import Education from './components/ResumeEducation';
import './Resume.css';

function Resume({ educationList, experienceList, personal }) {
  // Get all info except summary from "personal" key
  const personalInfo = (({ name, title, address, phone, email }) => ({
    name,
    title,
    address,
    phone,
    email,
  }))(personal);
  const { summary } = personal;

  return (
    <div id="resume-preview">
      <Header personal={personalInfo} />

      <section className="section">
        <h3>SUMMARY</h3>
        <Summary summary={summary} />
      </section>

      <section className="section">
        <h3>EXPERIENCE</h3>
        <Experience experienceList={experienceList} />
      </section>

      <section className="section">
        <h3>EDUCATION</h3>
        <Education educationList={educationList} />
      </section>
    </div>
  );
}

export default Resume;