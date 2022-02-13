import { useState, useCallback, useEffect } from "react";
import { getPage } from "../../api";
import Loader from "../Loader";
import "./People.css";

const PeopleList = ({ onDetails }) => {
  const [peeps, setPeeps] = useState({});
  const [error, setError] = useState("");

  const getPeeps = useCallback(async () => {
    const { next = 1 } = peeps;
    const { error, ...rest } = await getPage(next);
    if (error) {
      setError(error);
    } else {
      setPeeps(rest);
    }
  }, [peeps]);

  useEffect(() => {
    getPeeps();
  }, []);

  if (!peeps.data) {
    return <Loader text="Loading people..." size={18} />;
  }
  return (
    <ul className="App-menu">
      {peeps.data.map(({ name, id }) => (
        <li key={id}>
          <button type="button" onClick={(_) => onDetails(id)}>
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default PeopleList;
