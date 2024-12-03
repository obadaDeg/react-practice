import reactCoreConcept from "@assets/react-core-concepts.png";

const reactDescriptions = ["Crutial", "Fundamental", "Core"];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {

    
  return (
    <header>
      <img src={reactCoreConcept} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[getRandomInt(reactDescriptions.length - 1)]} React
        concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}
