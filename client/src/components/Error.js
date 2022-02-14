import "./Error.css";

const Error = ({ children }) => (
  <section className="App-error-wrapper">
    <div className="App-error">{children}</div>
  </section>
);

export default Error;
