import { Button } from "@material-ui/core";

const ParentComponent = () => {
  return (
    <React.Fragment>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Open Dialog
      </Button>
    </React.Fragment>
  );
};

export default ParentComponent;
