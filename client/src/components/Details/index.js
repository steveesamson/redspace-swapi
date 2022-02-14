import { useEffect, useCallback, useState } from "react";
import { getPeople } from "../../api";
import HomePlanet from "./HomePlanet";
import Film from "./Film";
import Specie from "./Spicie";
import Loader from "../Loader";
import Error from "../Error";
import NoSelection from "../NoSelection";
import "./Details.css";

const Details = ({ id }) => {
  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getPerson = useCallback(async () => {
    setLoading(true);
    const { error, data } = await getPeople(id);
    if (error) {
      setError(error);
    } else {
      setError("");
      setPerson(data);
    }
    setLoading(false);
  }, [id]);
  useEffect(() => {
    if (id) {
      getPerson();
    }
  }, [id]);

  if (loading) {
    return <Loader text={`Loading person with ID '${id}'...`} size={24} />;
  }
  if (error) {
    return (
      <Error>
        <p>{error}</p>
      </Error>
    );
  }
  if (!person) {
    return <NoSelection />;
  }

  return (
    <table className="App-detail">
      <colgroup>
        <col span={1} style={{ width: "35%" }}></col>
        <col span={1} style={{ width: "65%" }}></col>
      </colgroup>
      <tbody>
        <tr>
          <td colSpan={2} className="App-detail-title">
            {person.name}
          </td>
        </tr>
        <tr>
          <th>Name</th>
          <td>{person.name}</td>
        </tr>
        <tr>
          <th>Height</th>
          <td>{person.height}</td>
        </tr>
        <tr>
          <th>Mass</th>
          <td>{person.mass}</td>
        </tr>
        <tr>
          <th>Hair Color</th>
          <td>{person.hair_color}</td>
        </tr>
        <tr>
          <th>Skin Color</th>
          <td>{person.skin_color}</td>
        </tr>
        <tr>
          <th>Gender</th>
          <td>{person.gender}</td>
        </tr>
        <tr>
          <th>Birth Year</th>
          <td>{person.birth_year}</td>
        </tr>
        <tr>
          <th>Home planet</th>
          <td>
            {person.home_planet && <HomePlanet {...person.home_planet} />}
          </td>
        </tr>
        <tr>
          <th>Species</th>
          <td>
            {person.species.map((specie) => (
              <Specie key={specie.name} {...specie} />
            ))}
          </td>
        </tr>
        <tr>
          <th>Films</th>
          <td>
            {person.films.map((film) => (
              <Film key={film.title} {...film} />
            ))}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Details;
