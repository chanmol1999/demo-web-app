import { AppBar, Button, Modal, Tab, Tabs, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  button: {
    display: "flex",
    backgroundColor: "#000000",
    marginRight: 10,
    marginTop: 10,
    marginLeft: "auto",
    borderRadius: 39,
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
    opacity: 1,
    fontSize: 16,
  },
  textField: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    padding: 5,
    marginTop: 0,
    marginBottom: 10,
    fontWeight: 500,
    backgroundColor: "#F8F9FA",
    borderRadius: 16,
    opacity: 1,
  },
  paper: {
    position: "absolute",
    width: 500,
    backgroundColor: "#FCEBE5",
    borderRadius: 16,
    opacity: 1,
    padding: theme.spacing(2, 5, 3),
  },
}));
const NavBar = () => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h1
        style={{
          font: "Banana Grotesk",
          letterSpacing: "2.1",
          color: "#495057",
        }}
      >
        Contact
      </h1>
      <p style={{ color: "#ADB5BD" }}>Contact Anmol Chaddha for this UI</p>
      <form>
        <TextField
          className={classes.textField}
          label="Name"
          variant="outlined"
          required
        />
        <TextField
          className={classes.textField}
          label="Email"
          variant="outlined"
          type="email"
          required
        />
        <TextField
          className={classes.textField}
          label="Message"
          variant="outlined"
          required
        />
      </form>
      <Button
        className={classes.button}
        onClick={() => {
          alert("clicked");
        }}
        variant="contained"
        color="primary"
      >
        Submit
      </Button>
      <p style={{ color: "#495057" }}>Need more info? hello@newzera.com</p>
    </div>
  );
  return (
    <AppBar
      position="static"
      style={{ zIndex: 3, background: "transparent", boxShadow: "none" }}
    >
      <Tabs style={{ zIndex: 3, marginLeft: "auto" }}>
        <Tab label="About" />
        <Tab label="Blog" />
        <Tab label="Careers" />
        <Tab label="Contact" onClick={handleOpen} />
        <Modal open={open} onClose={handleClose}>
          {body}
        </Modal>
      </Tabs>
    </AppBar>
  );
};

export default NavBar;
