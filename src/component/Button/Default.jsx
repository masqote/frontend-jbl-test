const Default = (props) => {
  return (
    <div>
      <button
        className={
          "px-4 py-2 hover:opacity-80 rounded-lg text-sm  font-semibold " +
          props.color +
          " " +
          props.textColor
        }
      >
        {props.name}
      </button>
    </div>
  );
};

Default.defaultProps = {
  name: "default",
  color: "bg-primary",
  textColor: "text-white",
};

export default Default;
