function RegisterDonor() {
  return (
    <div className="register">

      <h2>Register Donor</h2>

      <form>

        <input
          type="text"
          placeholder="Full Name"
        />

        <input
          type="text"
          placeholder="Blood Group"
        />

        <input
          type="text"
          placeholder="City"
        />

        <input
          type="text"
          placeholder="Phone Number"
        />

        <button>
          Register
        </button>

      </form>

    </div>
  );
}

export default RegisterDonor;