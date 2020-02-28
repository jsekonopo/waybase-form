import React from "react";
import Button from '@material-ui/core/Button';
import MaterialTable from "material-table";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import WayBaseListingContact from './WayBaseListingContact';

export default function WayBaseListingContactList() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <MaterialTable
        title={null}
        columns={[
          {
            title: "Avatar",
            field: "imageUrl",
            render: rowData => (
              <img
                src={rowData.imageUrl}
                style={{ width: 40, borderRadius: "50%" }}
                alt={rowData.fullName}
              />
            )
          },
          { title: "Full Name", field: "fullName" },
          { title: "Title", field: "contactTitle" }
        ]}
        data={[
          {
            imageUrl:
              "https://avatars0.githubusercontent.com/u/7895451?s=460&v=4",
            fullName: "Baran Test",
            contactTitle: "Pastor"
          },
          {
            imageUrl:
              "https://avatars0.githubusercontent.com/u/7895451?s=460&v=4",
            fullName: "Baran Test",
            contactTitle: "Pastor"
          }
        ]}
        actions={[
          rowData => ({
            icon: "delete",
            tooltip: "Delete User",
            onClick: (event, rowData) =>
              console.log("You want to delete " + rowData.name),
            disabled: rowData.birthYear < 2000
          }),
          {
            icon: "add",
            tooltip: "Add User",
            isFreeAction: true,
            onClick: event => handleClickOpen()
          }
        ]}
        options={{
          actionsColumnIndex: -1
        }}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add a listing contact</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add a new contact
          </DialogContentText>
          <WayBaseListingContact/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Add Contact
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
