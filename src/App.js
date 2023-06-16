import logo from "./logo.svg";
import "./App.css";
import { NTableView } from "./lib/NTableView";

function App() {
  return (
    <div className="App">
      <NTableView
        caption="Sorting List"
        columns={[
          {
            accessor: "name",
            label: "Name",
            sortable: true,
          },
          {
            accessor: "city",
            label: "City",
            sortable: true,
          },
          {
            accessor: "country",
            label: "Country",
            sortable: true,
          },
          {
            accessor: "iata_code",
            label: "IATA CODE",
            sortable: true,
          },
        ]}
        data={[
          {
            city: "Atlanta",
            country: "United States",
            iata_code: "ATL",
            id: 1826,
            name: "Hartsfield Jackson Atlanta Intl",
          },
          {
            city: "Chicago",
            country: "United States",
            iata_code: "ORD",
            id: 1108,
            name: "Chicago Ohare Intl",
          },
          {
            city: "Beijing",
            country: "China",
            iata_code: "PEK",
            id: 1069,
            name: "Capital Intl",
          },
          {
            city: "London",
            country: "United Kingdom",
            iata_code: "LHR",
            id: 1051,
            name: "Heathrow",
          },
          {
            city: "Paris",
            country: "France",
            iata_code: "CDG",
            id: 1041,
            name: "Charles De Gaulle",
          },
          {
            city: "Los Angeles",
            country: "United States",
            iata_code: "LAX",
            id: 991,
            name: "Los Angeles Intl",
          },
          {
            city: "Frankfurt",
            country: "Germany",
            iata_code: "FRA",
            id: 990,
            name: "Frankfurt Main",
          },
          {
            city: "Dallas-Fort Worth",
            country: "United States",
            iata_code: "DFW",
            id: 936,
            name: "Dallas Fort Worth Intl",
          },
          {
            city: "New York",
            country: "United States",
            iata_code: "JFK",
            id: 911,
            name: "John F Kennedy Intl",
          },
          {
            city: "Amsterdam",
            country: "Netherlands",
            iata_code: "AMS",
            id: 903,
            name: "Schiphol",
          },
        ]}
        onClick={() => {}}
      />
    </div>
  );
}

export default App;
