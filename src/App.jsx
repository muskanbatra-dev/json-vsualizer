import React from "react";
import JsonInput from "./components/JsonInput";
import SearchBar from "./components/SearchBar";
import TreeVisualizer from "./components/TreeVisualizer";
const App = () => {
  return (
    <div>
      <JsonInput />
      <SearchBar />
      <TreeVisualizer />
    </div>
  );
};

export default App;
