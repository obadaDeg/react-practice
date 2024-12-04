import logo from "@assets/logo.png";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p>A community of artists and art-lovers.</p>
      {/* <p
        // it takes an object
        // the regurals css properties naming is not valid hence we need to write it as camelCase. or wrape it with "" or ''
        style={{
          color: "red",
          textAlign: "center",
        }}
      >
        A community of artists and art-lovers.
      </p> */}
    </header>
  );
}
