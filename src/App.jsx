// Import required  hooks
import { useEffect, useState } from "react";
// import { DogFactContainer } from "./components/DogFactContainer";
import { DogFact } from "./components/DogFact";

export const App = () => {

  // Hint: Initialize state for storing the dog fact
  const [dogFact, setDogFact] = useState(null); //null used as it is interchangeable to any other data type

  // Hint: Define the API endpoint
  const API = "https://dogapi.dog/api/v2/facts";

  // Hint: Create a function (async in nature) to fetch the dog fact

  const fetchDogFact = async () => {

    await fetch(API)
      .then((notClean) => {
        console.log(notClean);
        return notClean.json();
      })
      .then((cleanInfo) => {
        if (cleanInfo.data) {
          let cleanData = cleanInfo.data;

          let dogInfo = cleanData[0].attributes.body

          setDogFact(dogInfo)
        }
      })
    console.log(cleanInfo)
      .catch((error) => { console.log(error) })
  }
  // Hint: Use the useEffect hook to fetch the dog fact when the component mounts i.e. empty dependency array

  useEffect(() => {
    fetchDogFact()
  }, [])


  return (
    <div className="App">
      {/* <DogFactContainer fact={dogFact} /> */}
      {/* Here, the prop from the child ocmponent is passed to the parent component as a key, storing a value in useState method */}
      <DogFact fact={dogFact} />
      <button onClick={fetchDogFact}>Get another dog fact</button>
    </div>
  );
};
