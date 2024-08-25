const ListForm = () => {
  const countries = [
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
    <>
      <h1>List Group</h1>

      <ul className="list-group">
        {countries.map((item) => (
          <li key={item.id}>
            CountryID: {item.id}, CountryName: {item.country}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListForm;
