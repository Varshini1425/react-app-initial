import ListForm from "./components/ListForm";
import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";
import UpdateObject from "./components/UpdateObject";
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
    { id: 10, country: "Botswana", code: "BW" },
    { id: 11, country: "Malaysia", code: "MY" },
    { id: 12, country: "Maldives", code: "MV" },
    { id: 13, country: "Mali", code: "ML" },
    { id: 14, country: "Malta", code: "MT" },
  ];

  const [alertVisible, setAlertVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Countries | null>(
    null
  );

  const handleSelectedCountry = (country: Countries) => {
    setSelectedCountry(country);
  };

  return (
    <div>
      <ListForm
        items={countries}
        heading="Countries"
        onSelectedItem={handleSelectedCountry}
      />

      <Button color="secondary" onclick={() => setAlertVisible(true)}>
        Sumbit
      </Button>

      {selectedCountry && alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          {` Selected Country:  ${selectedCountry.country} `}
        </Alert>
      )}

      <UpdateObject />
    </div>
  );
};

export default App;
