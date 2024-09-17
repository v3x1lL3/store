import "./App.css";
import FilterProductTable from "./store/FilterProductTable";
import ProductTable from "./store/ProductTable";
import SearchBar from "./store/SearchBar";

function App() {
  return (
    <FilterProductTable>
      <SearchBar></SearchBar>
      <ProductTable></ProductTable>
    </FilterProductTable>
  );
}

export default App;
