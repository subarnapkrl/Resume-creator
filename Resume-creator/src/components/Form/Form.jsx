import './Form.css';
import Personal from './components/FormPersonal';
import Experience from './components/FormExperience';
import Education from './components/FormEducation';
import { Add, Clear, Delete } from './components/Buttons';

function Form({
  educationList,
  experienceList,
  onChange,
  onClick,
  personalInfo,
}) {
  return (
    <form>
      <section>
        <h2>Personal Information</h2>
        <Personal onChange={onChange} personalInfo={personalInfo} />
        <div className="btn-container">
          <Clear onClick={onClick} />
        </div>
      </section>
      <section>
        <h2>Experience</h2>
        <Experience onChange={onChange} experienceList={experienceList} />
        <div className="btn-container">
          <Clear onClick={onClick} />
          <Delete onClick={onClick} />
          <Add onClick={onClick} />
        </div>
      </section>
      <section>
        <h2>Education</h2>
        <Education onChange={onChange} educationList={educationList} />
        <div className="btn-container">
          <Clear onClick={onClick} />
          <Delete onClick={onClick} />
          <Add onClick={onClick} />
        </div>
      </section>
    </form>
  );
}

export default Form;