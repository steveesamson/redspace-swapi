const HomePlanet = ({ title, terrain, population }) => (
  <table>
    <tbody>
      <tr>
        <th>Title</th>
        <td>{title}</td>
      </tr>
      <tr>
        <th>Terrain</th>
        <td>{terrain}</td>
      </tr>
      <tr>
        <th>Population</th>
        <td>{population}</td>
      </tr>
    </tbody>
  </table>
);

export default HomePlanet;
