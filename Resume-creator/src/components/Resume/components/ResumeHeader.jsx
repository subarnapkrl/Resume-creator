import emailIcon from '../../../assets/email-icon.svg';
import locationIcon from '../../../assets/location-icon.svg';
import phoneIcon from '../../../assets/phone-icon.svg';

function ResumeHeader({ personal }) {
  return (
    <header>
      <div>
        <h1>{personal.name}</h1>
        <h2>{personal.title}</h2>
      </div>
      <div>
        <ul>
          <li>
            <img src={phoneIcon} alt="icon" className="phone icon" />
            {personal.phone}
          </li>
          <li>
            <img src={emailIcon} alt="icon" className="email icon" />
            {personal.email}
          </li>
          <li>
            <img src={locationIcon} alt="icon" className="location icon" />
            {personal.address}
          </li>
        </ul>
      </div>
    </header>
  );
}

export default ResumeHeader;