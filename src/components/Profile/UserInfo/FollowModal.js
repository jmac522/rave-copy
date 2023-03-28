import React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListSubheader from "@mui/material/ListSubheader";
import Typography from "@mui/material/Typography";
import ImageText from "../../Reused/ImageText";
import "../../Reused/reused.css";

const FollowModal = ({followers, data, loading}) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const word = followers ? (data.length === 1 ? "follower" : "followers")
      : "following";
  const buttonLabel = `${data.length} ${word}`;

  if (loading) {
    return "Loading...";
  } else {
    return (
        <>
          <Button onClick={handleOpen}>{buttonLabel}</Button>
          <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
          >
            <List className="scrollable-list center-modal" subheader={<li/>}>
              <ListSubheader>
                <Typography variant="h6">{buttonLabel}</Typography>
              </ListSubheader>

              {data.map(user => {
                return (<div key={user.id}>
                  <ListItem>
                    <Grid container spacing={2} sx={{m: 0}}>
                      <ImageText bigText={user.username}
                                 smallText={user.name}
                                 image={user.image}/>
                    </Grid>
                  </ListItem>
                  <Divider/>
                </div>);
              })}
            </List>
          </Modal>
        </>
    );
  }
};

export default FollowModal;