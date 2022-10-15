import "./App.css";
import Watches from "./components/Watches";
import uuid from "react-uuid";

function App() {
  const data = [
    {
      id: uuid(),
      city: "Moscow",
      time: new Date().toLocaleTimeString(),
    },
  ];

  return <Watches data={data} />;
}

export default App;
