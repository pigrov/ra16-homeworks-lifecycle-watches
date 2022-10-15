import "./App.css";
import Watches from "./components/Watches";
import uuid from "react-uuid";

function App() {
  const data = [
    {
      id: uuid(),
      city: "Moscow",
      zone: 3,
    },
  ];

  return <Watches data={data} />;
}

export default App;
