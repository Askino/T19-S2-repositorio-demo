export const Textarea = ({ label, id, placeholder, value, setValue }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <textarea
        name={id}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></textarea>
    </div>
  );
};
