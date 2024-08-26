import ListForm from "./components/ListForm";
const App = () => {
  interface Countries {
    id: number;
    country: string;
    code: string;
  }

  let countries: Countries[] = [
    { id: 1, country: "Iceland", code: "IS" },
    { id: 2, country: "India", code: "IN" },
    { id: 3, country: "Indonesia", code: "ID" },
    { id: 4, country: "Iran, Islamic Republic Of", code: "IR" },
    { id: 5, country: "Iraq", code: "IQ" },
    { id: 6, country: "Germany", code: "DE" },
    { id: 7, country: "Ghana", code: "GH" },
    { id: 8, country: "Gibraltar", code: "GI" },
    { id: 9, country: "America", code: "US" },
  ];

  return (
    <div>
      <ListForm items={countries} heading="Cities" />
    </div>
  );
};

export default App;
