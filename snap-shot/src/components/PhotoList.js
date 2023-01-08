import { useContext, useEffect, useState } from "react";
import { SnapContext } from "../context/SnapContext";

const PhotoList = () => {
  const { search } = useContext(SnapContext);
  const [data, setData] = useState([]);
  //Fetch the data and filter
  useEffect(() => {
    if (search) {
      fetch(
        `https://api.unsplash.com/search/photos?query=${search}&content_filter=high&client_id=2qlF-Za2eRi_pRnvI1WL7nFSouffihcJsIdWZUfD4BQ`
      )
        .then((res) => res.json())
        .then((res) => {
          setData(res.results);
        });
    }
  }, [search]);
  return (
    <div className="row">
      {data.map((e, index) => {
        return (
          <div className="card col-md-12" key={index}>
            <img
              className="card-img-top"
              src={e.links.download}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{e.tags.map((el) => el.title)}</h5>
              <div className="card-text" key={e.id}>
                {e.alt_description}
              </div>
              <a
                href={`/user/${e.user.username}`}
                className="btn btn-primary user-btn"
              >
                {e.user.first_name} {e.user.last_name}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PhotoList;
