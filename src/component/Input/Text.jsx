const Text = (props) => {
  const handleChange = (event) => {
    const value = event.target.value;
    props.onValueChange(value);
  };
  return (
    <div className="w-full">
      <input
        disabled={props.disabled}
        name={props.name}
        type="text"
        className="w-full p-2 border  border-gray-400 rounded text-sm disabled:bg-gray-300"
        placeholder={props.placeholder}
        onChange={handleChange}
        value={props.value}
      />
    </div>
  );
};

export default Text;
