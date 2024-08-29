import ListForm from "./components/ListForm";
import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";
import UpdateObject from "./components/UpdateObject";
import UpdatingArrayObject from "./components/UpdatingArrayObject";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";
const App = () => {
  //list component
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

  //alert component
  const [alertVisible, setAlertVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Countries | null>(
    null
  );

  //list component
  const handleSelectedCountry = (country: Countries) => {
    setSelectedCountry(country);
  };

  //navbar, cart component
  const [cartItems, setCartItems] = useState(["Product 1", "Product 2"]);

  return (
    <>
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
        <UpdatingArrayObject />
        <Navbar cartItemsCount={cartItems.length}></Navbar>
        <Cart cartItemsProp={cartItems} onClear={() => setCartItems([])}></Cart>
        <ExpandableText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          quaerat culpa enim, consequatur commodi quos dolorem laborum error
          inventore necessitatibus officia saepe, ratione hic praesentium magni
          reprehenderit eius cum! Culpa itaque quo ducimus amet, id nesciunt aut
          ab dicta quaerat nostrum reiciendis at! Magnam quam eligendi possimus
          rem laudantium impedit unde totam natus debitis consequuntur quibusdam
          quia nesciunt harum est, tempore consequatur dignissimos, eveniet,
          molestias voluptatibus facere provident ipsam enim aliquid doloremque.
          Expedita earum iusto molestias ea cum eius, at a enim, labore omnis
          natus magni porro. Nostrum accusantium ducimus ipsa odit porro omnis.
          Soluta adipisci id aspernatur tempore odit. Maiores nisi deserunt
          minima iusto sunt ipsa vero dolorum? Nulla iusto dolorem optio
          assumenda quidem unde ab facilis quae consequuntur officiis et qui
          error soluta aperiam sed blanditiis id ex, expedita quia tempore
          deleniti perspiciatis. Odio autem, tempora illo iste accusantium ea
          provident, earum, ipsa similique neque voluptas aliquam. Sit animi
          amet vitae odit repellat ullam nemo, maxime voluptatem fuga! Unde vel,
          praesentium aliquam molestias voluptas consectetur ratione magnam
          explicabo quod alias, nisi labore quia repellat aperiam delectus
          impedit nostrum suscipit deleniti. Pariatur harum ratione obcaecati.
          Omnis autem amet in accusantium quasi. Modi esse magnam quae officia!
          Id, voluptates temporibus!
        </ExpandableText>
      </div>
    </>
  );
};

export default App;
