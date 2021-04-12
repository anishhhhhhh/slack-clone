import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { db } from "../firebase";

const getModalStyle = () => {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
};

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    height: 300,
    backgroundImage: "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  title: {
    color: "#3f0f40",
    marginBottom: 70,
    // width: 500,
    fontSize: 22,
  },
  textField: {
    width: 400,
  },
  modalButtons: {
    position: "absolute",
    right: 0,
    bottom: 0,
    paddingBottom: 40,
    paddingRight: 30,
  },
  addBtn: {
    marginLeft: 20,
  },
  addChannelBtn: {
    width: 160,
    fontSize: 17,
    fontWeight: "bold",
    backgroundColor: "#3f0f40",
    borderColor: "transparent",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
    outline: "none",
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [channelName, setChannelName] = useState(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addChannel = () => {
    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
    handleClose();
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className={classes.title}>
        <h2 id="simple-modal-title">Create Channel</h2>
      </div>
      <TextField
        className={classes.textField}
        id="standard-basic"
        label="Add channel name"
        variant="outlined"
        color="primary"
        onChange={(e) => setChannelName(e.target.value)}
        value={channelName}
      />
      <div className={classes.modalButtons}>
        <Button variant="contained" color="primary" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.addBtn}
          onClick={addChannel}
        >
          Add
        </Button>
      </div>
      {/* <SimpleModal /> */}
    </div>
  );

  return (
    <div>
      <button
        type="button"
        onClick={handleOpen}
        className={classes.addChannelBtn}
      >
        <AddIcon />
        Add Channel
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
