import data from "./data";
import Card from "./Card";

function App() {
  return (
    <div>
      <h1>My Cards</h1>

      {data.map((item) => (
        <Card key={item.id} name={item.name} info={item.info} />
      ))}
    </div>
  );
}

export default App;