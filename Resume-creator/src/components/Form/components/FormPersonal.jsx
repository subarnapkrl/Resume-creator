function FormPersonal({ personalInfo, onChange }) {
  return (
    <div id="personal">
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={personalInfo.name}
        onChange={onChange}
      />
      <input
        name="title"
        type="text"
        placeholder="Title"
        value={personalInfo.title}
        onChange={onChange}
      />
      <input
        name="address"
        type="text"
        placeholder="Address"
        value={personalInfo.address}
        onChange={onChange}
      />
      <input
        name="phone"
        type="text"
        placeholder="Phone"
        value={personalInfo.phone}
        onChange={onChange}
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={personalInfo.email}
        onChange={onChange}
      />
      <textarea
        name="summary"
        placeholder="Professional Summary"
        value={personalInfo.summary}
        onChange={onChange}
      />
    </div>
  );
}

export default FormPersonal;