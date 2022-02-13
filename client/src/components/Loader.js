import "./Loader.css";

const Loader = ({ size = 100, text }) => (
  <section className="App-loader-wrapper">
    <div className="App-loader">
      <em>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={size}
          width={size}
          viewBox="0 0 100 100"
        >
          <circle
            fill="none"
            stroke="currentColor"
            strokeWidth="9"
            cx="50"
            cy="50"
            r="40"
            opacity="0.5"
          />
          <circle
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="7"
            cx="13"
            cy="54"
            r="9"
          >
            <animateTransform
              attributeName="transform"
              dur="2s"
              type="rotate"
              from="0 50 48"
              to="360 50 52"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </em>
      <span>{text}</span>
    </div>
  </section>
);

export default Loader;
