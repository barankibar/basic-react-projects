import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UserRoute() {
  const user = useParams().username;
  const [userData, setUserData] = useState(null); //Null because wait until data comes

  //For fetching data just once using useEffect
  useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/users?query=${user}&content_filter=high&client_id=2qlF-Za2eRi_pRnvI1WL7nFSouffihcJsIdWZUfD4BQ`
    )
      .then((res) => res.json())
      .then((res) => {
        setUserData(res.results[0]);
      });
  }, [user]);
  console.log(userData);

  if (userData) {
    return (
      <div class="container mt-5 mb-5">
        <div class="row no-gutters">
          <div class="col-md-4 col-lg-4">
            <img
              src={userData.profile_image.large}
              alt="profile"
              className="profile-img"
            />
          </div>
          <div class="col-md-8 col-lg-8">
            <div class="d-flex flex-column">
              <div class="d-flex flex-row justify-content-between align-items-center p-5 social-column ">
                <h3 class="display-5">
                  {userData.first_name} {userData.last_name}
                </h3>
                {/* Using noopener and noreferrer cause vulnerability issues */}
                {/* Show if exists */}
                {userData.social.instagram_username ? (
                  <a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`https://www.instagram.com/${userData.social.instagram_username}/`}
                    >
                      <i class="fa fa-instagram"></i>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="/">
                      <i class="fa fa-paypal"></i>
                    </a>
                  </a>
                ) : (
                  <div></div>
                )}

                {userData.social.portfoilo_url ? (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`${userData.social.portfoilo_url}`}
                  >
                    <i class="fa fa-briefcase"></i>
                  </a>
                ) : (
                  <div></div>
                )}
                {userData.social.twitter_username ? (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://twitter.com/${userData.social.twitter_username}`}
                    className="social-link"
                  >
                    <i class="fa fa-twitter"></i>
                  </a>
                ) : (
                  <div></div>
                )}
              </div>
              <div class="p-3 bg-black">
                <a href="/" className="btn btn-primary m-1  ">
                  HOME
                </a>
                {!userData.for_hire ? (
                  <button type="button" className="btn btn-success">
                    Hire!
                  </button>
                ) : (
                  <div className="display-none"></div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="row profile-row">
          {userData ? (
            userData.photos.map((e, index) => {
              return (
                <div className="card col-md-12" key={index}>
                  <img
                    className="card-img-top"
                    src={e.urls.full}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <div className="card-text" key={e.id}>
                      Created At: {e.created_at.substring(0, 10)}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div>Loading</div>
          )}
        </div>
      </div>
    );
  } else {
    return <div>Loading..</div>;
  }
}
