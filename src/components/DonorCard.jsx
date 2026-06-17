function DonorCard({ donor }) {
  return (
    <div className="card">

      <h3>{donor.name}</h3>

      <p>Blood Group : {donor.bloodGroup}</p>

      <p>City : {donor.city}</p>

      <p>Phone : {donor.phone}</p>

    </div>
  );
}

export default DonorCard;