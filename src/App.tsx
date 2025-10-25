import "./App.css";
import Entry from "./components/Entry";
import Header from "./components/Header";
import data from "./data";

function App() {
  const entryElements = data.map((entry) => {
    return (
      <Entry
        key={entry.id}
        entry={entry}
      />
    );
  });

  return (
    <>
      <Header />
      {entryElements}
    </>
  );
}

export default App;
