function FormEducation({ educationList, onChange }) {
  return (
    <div id="educationList">
      {educationList.map((education) => {
        return (
          <div key={education.id} id={education.id}>
            <input
              name="degree"
              type="text"
              placeholder="Degree"
              value={education.degree}
              onChange={onChange}
            ></input>
            <input
              name="major"
              type="text"
              placeholder="Major"
              value={education.major}
              onChange={onChange}
            ></input>
            <input
              name="university"
              type="text"
              placeholder="University"
              value={education.university}
              onChange={onChange}
            ></input>
            <input
              name="graduated"
              type="text"
              placeholder="Graduated"
              value={education.graduated}
              onChange={onChange}
            ></input>
            <textarea
              name="description"
              placeholder="Description"
              value={education.description}
              onChange={onChange}
            ></textarea>
          </div>
        );
      })}
    </div>
  );
}

export default FormEducation;