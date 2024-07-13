function FormInput({ name, label, type, status, placeholder, className}) {
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text capitalize">{label}</span>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className={`input input-bordered  w-full max-w-xs ${status}  h-11 `}
        name={name}
      />
    </label>
  );
}

export default FormInput;