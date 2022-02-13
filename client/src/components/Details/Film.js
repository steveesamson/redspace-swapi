const Film = ({ title, director, producer, release_date }) => (
  <table>
    <tbody>
      <tr>
        <th>Title</th>
        <td>{title}</td>
      </tr>
      <tr>
        <th>Director</th>
        <td>{director}</td>
      </tr>
      <tr>
        <th>Producer</th>
        <td>{producer}</td>
      </tr>
      <tr>
        <th>Release date</th>
        <td>{release_date}</td>
      </tr>
    </tbody>
  </table>
);

export default Film;
