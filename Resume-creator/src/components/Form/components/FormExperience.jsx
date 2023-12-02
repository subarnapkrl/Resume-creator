function FormExperience({ experienceList, onChange }) {
  return (
    <div id="experienceList">
      {experienceList.map((experience) => {
        return (
          <div key={experience.id} id={experience.id}>
            <input
              name="position"
              type="text"
              placeholder="Position"
              value={experience.position}
              onChange={onChange}
            ></input>
            <input
              name="company"
              type="text"
              placeholder="Company"
              value={experience.company}
              onChange={onChange}
            ></input>
            <input
              name="location"
              type="text"
              placeholder="City"
              value={experience.location}
              onChange={onChange}
            ></input>
            <input
              name="from"
              type="text"
              placeholder="From"
              value={experience.from}
              onChange={onChange}
            ></input>
            <input
              name="to"
              type="text"
              placeholder="To"
              value={experience.to}
              onChange={onChange}
            ></input>
            <textarea
              name="responsibilities"
              placeholder="Responsibilities"
              value={experience.responsibilities}
              onChange={onChange}
            ></textarea>
          </div>
        );
      })}
    </div>
  );
}

export default FormExperience;