// Function to generate random address data
const generateRandomAddress = () => {
    const names = ['John Doe', 'Jane Smith', 'Alice Johnson', 'Bob Brown'];
    const addresses = ['123 Main St', '456 Elm St', '789 Oak St', '101 Pine St'];
    const zipcodes = ['12345', '23456', '34567', '45678'];
    const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston'];
    const countries = ['USA', 'Canada', 'UK', 'Australia'];

    // Choose random values from each array
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomAddress = addresses[Math.floor(Math.random() * addresses.length)];
    const randomZipcode = zipcodes[Math.floor(Math.random() * zipcodes.length)];
    const randomCity = cities[Math.floor(Math.random() * cities.length)];
    const randomCountry = countries[Math.floor(Math.random() * countries.length)];

    return {
      name: randomName,
      address: randomAddress,
      zipcode: randomZipcode,
      city: randomCity,
      country: randomCountry,
    };
  };

  // Example of using the generateRandomAddress function to create fake address data
  const fakeAddress = generateRandomAddress();
  console.log(fakeAddress);
