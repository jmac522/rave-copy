import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import {Link} from 'react-router-dom';

// A SeeMoreItem represents a single list item in a see more list.
//
//  Items are formed as follows:
//    -- stats: string representing statistic (e.g. rating out of ten, number of likes, number of followers, etc.)
//    -- primaryText: The main text for the item (e.g. Album name, user name, etc.)
//    -- secondaryText: optional string for subtext of the item (e.g. genre, truncated review text, etc.)
//    -- linkUrl: a url that clicking this item in the list will redirect to
//    -- imgUrl: path to image to be used for item (e.g. album artwork, profile picture, etc.)
//  Example item:
// {
//     stats: "2.1k",
//     primaryText: "Dark Side of the Moon",
//     secondaryText: "Psychedelic Rock",
//     linkUrl: "/",
//     imgUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Drake_-_Take_Care_cover.jpg/220px-Drake_-_Take_Care_cover.jpg",
// }
//
const SeeMoreItem = ({
  stats,
  imgUrl,
  linkUrl,
  primaryText,
  secondaryText
}) => {
  return (
      <ListItem button component={linkUrl === "" ? "div" : Link} to={linkUrl} sx={{
        backgroundColor: "#ececec",
        borderRadius: "5px",
        marginTop: "5px"
      }} secondaryAction={stats}
      >
        <ListItemAvatar>
          <Avatar src={imgUrl ? imgUrl : "/images/rave-logo.jpg"}/>
        </ListItemAvatar>
        <ListItemText
            primary={primaryText}
            secondary={secondaryText}
        />
      </ListItem>
  );
};

export default SeeMoreItem;
