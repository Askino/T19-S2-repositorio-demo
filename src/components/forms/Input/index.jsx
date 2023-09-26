export const Input = ({ label, id, type, placeholder, value, setValue }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        name={id}
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};
