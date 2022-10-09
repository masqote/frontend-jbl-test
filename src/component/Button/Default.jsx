const Default = (props) => {
  return (
    <div>
      <button
        className={"px-4 py-2 hover:opacity-80 rounded-lg " + props.color}
      >
        {props.name}
      </button>
    </div>
  );
};

Default.defaultProps = {
  name: "default",
  color: "bg-primary",
};

export default Default;
