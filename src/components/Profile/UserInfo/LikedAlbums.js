import React, {useEffect, useState} from "react";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListSubheader from "@mui/material/ListSubheader";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "../../Reused/reused.css";
import {getLikedAlbums} from "../../../services/likes-service";
import ImageText from "../../Reused/ImageText";

const LikedAlbums = ({userId}) => {
  const [loading, setLoading] = useState(true);
  const [albumData, updateAlbumData] = useState([]);

  const fetchLikedAlbumsData = async () => {
    const likedAlbums = await getLikedAlbums(userId);
    likedAlbums.map(likedAlbum => {
      return {
        id: likedAlbum.id,
        name: likedAlbum.name,
        artist: likedAlbum.artist,
        image: likedAlbum.image
      }
    })
    updateAlbumData(likedAlbums);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    updateAlbumData([]);
    fetchLikedAlbumsData();
  }, []);

  function getlikes() {
    return albumData.map(data => {
      return (<div key={data.spotifyId}>
        <ListItem>
          <Grid container spacing={2} sx={{m: 0}}>
            <ImageText bigText={data.name} smallText={data.artist}
                       image={data.image}/>
          </Grid>
        </ListItem>
        <Divider/>
      </div>);
    });
  }

  return (<List className="scrollable-list" subheader={<li/>}>
    <ListSubheader>
      <Typography variant="h6">Liked Albums</Typography>
    </ListSubheader>
    {loading && "Loading..."}
    {!loading && getlikes()}
  </List>);
};

export default LikedAlbums;