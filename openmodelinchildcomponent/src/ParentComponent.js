import { Button } from "@material-ui/core";
import React from "react";
import ChildCopmponent from "./CildComponent";
import Typography from "@material-ui/core/Typography";

const ParentComponent = () => {
  const emails = ["username@xyz.com", "username2@zyz.com"];
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };
  return (
    <div>
      <Typography variant="subtitle1">Selected: {selectedValue}</Typography>
      <br />
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Open Dialoq
      </Button>
      <ChildCopmponent
        emails={emails}
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
};
export default ParentComponent;
