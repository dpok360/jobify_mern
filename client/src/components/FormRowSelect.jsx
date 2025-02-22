function FormRowSelect({ name, labelText, list, defaultValue = '', onChange }) {
  return (
    <div className="form-row">
      <label htmlFor="" className="form-label">
        {labelText || name}
      </label>
      <select
        name={name}
        id={name}
        className="form-input"
        defaultValue={defaultValue}
        onChange={onChange}
      >
        {list.map((itemValue) => {
          return (
            <option key={itemValue} value={itemValue}>
              {itemValue}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default FormRowSelect;
