import classes from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={classes.spinner}>
      <div className={classes["lds-ellipsis"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
