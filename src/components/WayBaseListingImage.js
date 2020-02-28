import React, { Component } from "react";
import { DropzoneDialog } from "material-ui-dropzone";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

export default class WayBaseListingImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      files: []
    };
  }

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  handleSave = files => {
    //Saving files to state for further use and closing Modal.
    this.setState({
      files: files,
      open: false
    });
  };

  handleOpen = () => {
    this.setState({
      open: true
    });
  };

  render() {
    return (
      <Box>
        <Box mb={2}>
          <Card>
            <CardContent>Render the uploaded image here</CardContent>
            <CardActions>
              <Button onClick={this.handleOpen}>Add Logo</Button>
            </CardActions>
          </Card>
        </Box>
        <DropzoneDialog
          open={this.state.open}
          onSave={this.handleSave}
          acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
          showPreviews={true}
          maxFileSize={5000000}
          onClose={this.handleClose}
        />
      </Box>
    );
  }
}
