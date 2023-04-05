import "../Reused/reused.css";
import Grid from "@mui/material/Grid";
import UserInfo from "./UserInfo/UserInfo";
import LikedAlbums from "./UserInfo/LikedAlbums";
import React, {useEffect, useState} from "react";
import {getReviewsForUser} from "../../services/reviews-service";
import ReviewsCardList from "../Reviews/ReviewsCardList";
import {getReviewHeaderDataShowAlbum} from "../Reused/ReusedFunctions";

const Profile = ({loading, user}) => {
  const [reviewsLoading, setReviewsLoading] = useState(true);
  const [reviewsData, setReviewsData] = useState([]);

  const fetchReviewsData = async () => {
    const reviews = await getReviewsForUser(user.id);
    setReviewsData(reviews);
    setReviewsLoading(false);
  };

  useEffect(() => {
    if (!loading) {
      setReviewsLoading(true);
      setReviewsData([]);
      fetchReviewsData();
    }
  }, [loading]);

  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <LikedAlbums userId={user.id}/>
          </Grid>
          <Grid item xs={0.5}/>
          <Grid item xs={7}>
            <UserInfo user={user}/>
            <ReviewsCardList reviewsData={reviewsData} loading={reviewsLoading}
                             getReviewHeaderData={getReviewHeaderDataShowAlbum}
                             reviewsListTitle="Reviews"
                             setReviewsData={setReviewsData}
                             loggedInUserId={user.id}/>
          </Grid>
        </Grid>
    );
  }

};

export default Profile;