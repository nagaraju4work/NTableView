import { NTableView } from '../lib/NTableView';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Example/NTableView',
  component: NTableView,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    caption: 'Table View',
    listType: 'none',
    columns : [
      { label: "First Name", accessor: "firstName", sortable: true },
      { label: "Last Name", accessor: "lastName", sortable: true },
      { label: "Employee Code", accessor: "employeeCode", sortable: true },
      { label: "Phone Number", accessor: "phoneNumber", sortable: false },
      { label: "Email Address", accessor: "emailAddress", sortable: true },
    ],
    data :[
      {
        "id": 1,
        "userId": "rirani",
        "jobTitleName": "Developer",
        "firstName": "Romin",
        "lastName": "Irani",
        "preferredFullName": "Romin Irani",
        "employeeCode": "E1",
        "region": "CA",
        "phoneNumber": "408-1234567",
        "emailAddress": "romin.k.irani@gmail.com"
      },
      {
        "id": 2,
        "userId": "nirani",
        "jobTitleName": "Developer",
        "firstName": "Neil",
        "lastName": "Irani",
        "preferredFullName": "Neil Irani",
        "employeeCode": "E2",
        "region": "CA",
        "phoneNumber": "408-1111111",
        "emailAddress": "neilrirani@gmail.com"
      },
      {
        "id": 3,
        "userId": "thanks",
        "jobTitleName": "Program Directory",
        "firstName": "Tom",
        "lastName": "Hanks",
        "preferredFullName": "Tom Hanks",
        "employeeCode": "E3",
        "region": "CA",
        "phoneNumber": "408-2222222",
        "emailAddress": "tomhanks@gmail.com"
      }
    ],

  },
};

export const SingleSelectList = {
  args: {
    caption: 'Single Select List',
    listType: 'single-select',
    columns : [
      { label: "First Name", accessor: "firstName", sortable: true },
      { label: "Last Name", accessor: "lastName", sortable: true },
      { label: "Employee Code", accessor: "employeeCode", sortable: true },
      { label: "Phone Number", accessor: "phoneNumber", sortable: false },
      { label: "Email Address", accessor: "emailAddress", sortable: true },
    ],
    data :[
      {
        "id": 1,
        "userId": "rirani",
        "jobTitleName": "Developer",
        "firstName": "Romin",
        "lastName": "Irani",
        "preferredFullName": "Romin Irani",
        "employeeCode": "E1",
        "region": "CA",
        "phoneNumber": "408-1234567",
        "emailAddress": "romin.k.irani@gmail.com"
      },
      {
        "id": 2,
        "userId": "nirani",
        "jobTitleName": "Developer",
        "firstName": "Neil",
        "lastName": "Irani",
        "preferredFullName": "Neil Irani",
        "employeeCode": "E2",
        "region": "CA",
        "phoneNumber": "408-1111111",
        "emailAddress": "neilrirani@gmail.com"
      },
      {
        "id": 3,
        "userId": "thanks",
        "jobTitleName": "Program Directory",
        "firstName": "Tom",
        "lastName": "Hanks",
        "preferredFullName": "Tom Hanks",
        "employeeCode": "E3",
        "region": "CA",
        "phoneNumber": "408-2222222",
        "emailAddress": "tomhanks@gmail.com"
      }
    ],

  },
};

export const MultipleSelectList = {
  args: {
    caption: 'Multiple Select List',
    listType: 'multi-select',
    columns : [
      { label: "First Name", accessor: "firstName", sortable: true },
      { label: "Last Name", accessor: "lastName", sortable: true },
      { label: "Employee Code", accessor: "employeeCode", sortable: true },
      { label: "Phone Number", accessor: "phoneNumber", sortable: false },
      { label: "Email Address", accessor: "emailAddress", sortable: true },
    ],
    data :[
      {
        id: 1,
        "userId": "rirani",
        "jobTitleName": "Developer",
        "firstName": "Romin",
        "lastName": "Irani",
        "preferredFullName": "Romin Irani",
        "employeeCode": "E1",
        "region": "CA",
        "phoneNumber": "408-1234567",
        "emailAddress": "romin.k.irani@gmail.com"
      },
      {
        id: 2,
        "userId": "nirani",
        "jobTitleName": "Developer",
        "firstName": "Neil",
        "lastName": "Irani",
        "preferredFullName": "Neil Irani",
        "employeeCode": "E2",
        "region": "CA",
        "phoneNumber": "408-1111111",
        "emailAddress": "neilrirani@gmail.com"
      },
      {
        id: 3,
        "userId": "thanks",
        "jobTitleName": "Program Directory",
        "firstName": "Tom",
        "lastName": "Hanks",
        "preferredFullName": "Tom Hanks",
        "employeeCode": "E3",
        "region": "CA",
        "phoneNumber": "408-2222222",
        "emailAddress": "tomhanks@gmail.com"
      }
    ],
  },
};

export const SortingList = {
  args: {
    listType: 'sort',
    caption: 'Sorting List',
    columns : [
      { label: "Name", accessor: "name", sortable: true },
      { label: "City", accessor: "city", sortable: true },
      { label: "Country", accessor: "country", sortable: true },
      { label: "IATA CODE", accessor: "iata_code", sortable: true },
    ],
    data :[
      {
        name: "Hartsfield Jackson Atlanta Intl",
        city: "Atlanta",
        country: "United States",
        iata_code: "ATL",
        id: 1826,
      },
      {
        name: "Chicago Ohare Intl",
        city: "Chicago",
        country: "United States",
        iata_code: "ORD",
        id: 1108,
      },
      {
        name: "Capital Intl",
        city: "Beijing",
        country: "China",
        iata_code: "PEK",
        id: 1069,
      },
      {
        name: "Heathrow",
        city: "London",
        country: "United Kingdom",
        iata_code: "LHR",
        id: 1051,
      },
      {
        name: "Charles De Gaulle",
        city: "Paris",
        country: "France",
        iata_code: "CDG",
        id: 1041,
      },
      {
        name: "Los Angeles Intl",
        city: "Los Angeles",
        country: "United States",
        iata_code: "LAX",
        id: 991,
      },
      {
        name: "Frankfurt Main",
        city: "Frankfurt",
        country: "Germany",
        iata_code: "FRA",
        id: 990,
      },
      {
        name: "Dallas Fort Worth Intl",
        city: "Dallas-Fort Worth",
        country: "United States",
        iata_code: "DFW",
        id: 936,
      },
      {
        name: "John F Kennedy Intl",
        city: "New York",
        country: "United States",
        iata_code: "JFK",
        id: 911,
      },
      {
        name: "Schiphol",
        city: "Amsterdam",
        country: "Netherlands",
        iata_code: "AMS",
        id: 903,
      }
    ],
  },
};
