import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Resume from './components/Resume/Resume';
import uniqid from 'uniqid';
import { useState, useEffect } from 'react';

function App() {
  const [personal, setPersonal] = useState({
    name: '',
    title: '',
    address: '',
    phone: '',
    email: '',
    summary: '',
  });
  const [experienceList, setExperienceList] = useState([
    {
      position: '',
      company: '',
      location: '',
      from: '',
      to: '',
      responsibilities: '',
      id: uniqid(),
    },
  ]);
  const [educationList, setEducationList] = useState([
    {
      degree: '',
      major: '',
      university: '',
      graduated: '',
      description: '',
      id: uniqid(),
    },
  ]);

  useEffect(() => {
    console.log('Mounted');
  }, []);

  const handleChange = (e) => {
    const element = e.target.parentElement;
    const stateKey =
      element.id === 'personal' ? 'personal' : element.parentElement.id;
    const subKey = e.target.name;

    if (stateKey === 'personal') {
      setPersonal({
        ...personal,
        [subKey]: e.target.value,
      });
    } else {
      let newArr =
        stateKey === 'experienceList'
          ? [...experienceList]
          : [...educationList];

      for (let i = 0; i < newArr.length; i++) {
        if (newArr[i].id === element.id) {
          let newObj = { ...newArr[i] };
          newObj[subKey] = e.target.value;
          newArr[i] = newObj;
        }
      }

      stateKey === 'experienceList'
        ? setExperienceList(newArr)
        : setEducationList(newArr);
    }
  };

  const handleClick = (e) => {
    const action = e.target.name;
    const element = e.target.parentElement.previousElementSibling;
    const stateKey = element.id;

    if (action === 'clear') {
      if (stateKey === 'personal') {
        setPersonal({
          name: '',
          title: '',
          address: '',
          phone: '',
          email: '',
          summary: '',
        });
      } else {
        const newArr =
          stateKey === 'experienceList'
            ? [...experienceList]
            : [...educationList];

        for (let i = 0; i < newArr.length; i++) {
          for (let key in newArr[i]) {
            if (key !== 'id') newArr[i][key] = '';
          }
        }

        stateKey === 'experienceList'
          ? setExperienceList(newArr)
          : setEducationList(newArr);
      }
    } else if (action === 'add') {
      if (stateKey === 'experienceList') {
        setExperienceList([
          ...experienceList,
          {
            position: '',
            company: '',
            location: '',
            from: '',
            to: '',
            responsibilities: '',
            id: uniqid(),
          },
        ]);
      } else {
        // stateKey === 'educationList'
        setEducationList([
          ...educationList,
          {
            degree: '',
            major: '',
            university: '',
            graduated: '',
            description: '',
            id: uniqid(),
          },
        ]);
      }
    } else {
      // action === 'delete'
      const newArr =
        stateKey === 'experienceList'
          ? [...experienceList]
          : [...educationList];

      newArr.pop();

      stateKey === 'experienceList'
        ? setExperienceList(newArr)
        : setEducationList(newArr);
    }
  };

  return (
    <div>
      <Header />

      <div id="ui">
        <Form
          onChange={handleChange}
          onClick={handleClick}
          personalInfo={personal}
          experienceList={experienceList}
          educationList={educationList}
        />

        <Resume
          personal={personal}
          experienceList={experienceList}
          educationList={educationList}
        />
      </div>
    </div>
  );
}

export default App;