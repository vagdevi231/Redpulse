import donors from "../data/donors";
import DonorCard from "./DonorCard";

function SearchDonor() {
  return (
    <div className="search">

      <h2>Available Donors</h2>

      {donors.map((donor) => (
        <DonorCard
          key={donor.id}
          donor={donor}
        />
      ))}

    </div>
  );
}

export default SearchDonor;