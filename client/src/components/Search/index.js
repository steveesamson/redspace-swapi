import { useState } from "react";
import "./Search.css";

export default ({ onDetails }) => {
  const [id, setId] = useState("");
  const onSearch = () => {
    if (!id.trim()) return;
    onDetails(id);
    setId("");
  };
  return (
    <div className="App-input">
      <input
        type="text"
        value={id}
        onInput={(e) => setId(e.target.value)}
        placeholder="Enter an ID to search"
      />
      <button type="button" onClick={onSearch}>
        SEARCH
      </button>
    </div>
  );
};
