import hospitals from "../data/hospitals";

function HospitalDirectory() {
  return (
    <div className="hospital">

      <h2>Partner Hospitals</h2>

      <ul>
        {hospitals.map((hospital, index) => (
          <li key={index}>
            {hospital}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default HospitalDirectory;
