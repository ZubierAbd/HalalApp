import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    color: "white",
    backgroundColor: "green"
  },
  input: {
    display: "none"
  }
}));

export default function SubmitButton() {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color={classes.backgroundColor}
        className={classes.button}
      >
        {" "}
        Submit{" "}
      </Button>
    </div>
  );
}
