export const formatCount = (num) => {
  return num > 1000000000
    ? `${(num / 1000000000).toFixed(0)} Billion`
    : num > 1000000
    ? `${(num / 1000000).toFixed(0)} Million`
    : num > 1000
    ? `${(num / 1000).toFixed(0)} Thousand`
    : num;
};

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
        <td>{formatCount(population)}</td>
      </tr>
    </tbody>
  </table>
);

export default HomePlanet;
