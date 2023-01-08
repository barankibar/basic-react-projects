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
    <div>
      {data.map((e, index) => {
        console.log(e.links);
        return (
          <div className="card" key={index}>
            <img className="card-img-top" src={e.links.download} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{e.tags.map((el) => el.title)}</h5>
              <div className="card-text" key={e.id}>
                {e.alt_description}
              </div>
              <a href={e.user.links.portfolio} className="btn btn-primary">
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
