import "./Toggle.css";

function Toggle({ handleChange, isChecked }) {
  return (
    <div className="toggle-cont">
      <input
        type="checkbox"
        id="check"
        className="toggle"
        onChange={handleChange}
        checked={isChecked}
      ></input>
      <label htmlFor="check">&nbsp;Dark Mode</label>
    </div>
  );
}

export default Toggle;
