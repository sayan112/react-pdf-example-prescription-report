const FirstNameForm = ({ firstName, setFirstName, handleSubmit }) => (
  <div className="form-container">
    <label htmlFor={firstName} className="custom-field one">
      <input
        type="text"
        placeholder=" "
        onChange={(e) => setFirstName(e.target.value)}
      />
      <span className="placeholder">Enter your name</span>
    </label>
    <button
      className="btn"
      type="button"
      // disabled={firstName.length === 0}
      onClick={() => {
        console.log('handleSubmit');
        handleSubmit();
      }}
    >
      <span>Submit</span>
    </button>
  </div>
);

export default FirstNameForm;
