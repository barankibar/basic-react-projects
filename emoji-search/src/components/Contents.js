import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../context/FormContext";
import EmojiData from "../Emoji.json";

const Contents = () => {
  const { search } = useContext(SearchContext);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const newData = EmojiData.filter((emoji) => emoji.tags.includes(search));
    setIsLoaded(true);
    setData(newData);
    console.log(newData);
  }, [search]);

  if (!isLoaded) {
    return <div className="loading">Loading...</div>;
  } else {
    return (
      <div className="content">
        {data.map((emoji) => (
          <div className="card">
            {emoji.emoji}: {emoji.description}
          </div>
        ))}
      </div>
    );
  }
};

export default Contents;
