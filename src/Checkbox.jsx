import styles from "./Checkbox.module.css";

const Checkbox = ({ label, className, value, checked, onChange }) => {
  return (
    <div className={`${styles["form-control"]} ${className || ""}`}>
      <input
        type="checkbox"
        id={label}
        value={value}
        checked={checked || false}
        onChange={onChange}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

export default Checkbox;
