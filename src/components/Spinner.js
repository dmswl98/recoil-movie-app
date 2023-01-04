import "./Spinner.module.css";

const Spinner = () => {
  return (
    <div class="spinner">
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
