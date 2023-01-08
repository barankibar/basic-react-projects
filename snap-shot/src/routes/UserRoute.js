import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UserRoute() {
  const username = useParams().username;
  const [userData, setUserData] = useState({});

  const getUserData = (username) => {
    fetch(
      `https://api.unsplash.com/search/users?query=${username}&content_filter=high&client_id=2qlF-Za2eRi_pRnvI1WL7nFSouffihcJsIdWZUfD4BQ`
    )
      .then((res) => res.json())
      .then((res) => {
        setUserData(res.results[0]);
      });
  };

  //For fetching data just once using useEffect with empty array
  useEffect(() => {
    getUserData(username);
  }, []);

  return <div>{username}</div>;
}
