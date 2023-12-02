function ResumeEducation({ educationList }) {
  return (
    <div>
      {educationList.map((education) => {
        return (
          <div key={education.id} id={education.id} className="info">
            <div>
              {education.degree} {education.major} • {education.university}
              <span>{education.graduated}</span>
            </div>
            <div>{education.description}</div>
          </div>
        );
      })}
    </div>
  );
}

export default ResumeEducation;