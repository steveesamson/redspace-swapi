const Specie = ({ name, average_lifespan, classification, language }) => (
  <table>
    <tbody>
      <tr>
        <th>Name</th>
        <td>{name}</td>
      </tr>
      <tr>
        <th>Average Lifespan</th>
        <td>{average_lifespan}</td>
      </tr>
      <tr>
        <th>Classification</th>
        <td>{classification}</td>
      </tr>
      <tr>
        <th>Language</th>
        <td>{language}</td>
      </tr>
    </tbody>
  </table>
);

export default Specie;
