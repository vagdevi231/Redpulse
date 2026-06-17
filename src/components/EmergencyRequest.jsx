function EmergencyRequest() {
  return (
    <div className="emergency">

      <h2>Emergency Blood Request</h2>

      <form>

        <input placeholder="Patient Name" />

        <input placeholder="Blood Group Needed" />

        <input placeholder="Hospital Name" />

        <input placeholder="Contact Number" />

        <button>
          Submit Request
        </button>

      </form>

    </div>
  );
}

export default EmergencyRequest;