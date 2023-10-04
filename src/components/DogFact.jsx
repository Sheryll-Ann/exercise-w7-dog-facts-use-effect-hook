// DogFact Component
export const DogFact = ({ fact }) => {

  // Hint: Extract the 'body' from 'attributes' of the 'fact' prop
  
  // Here fact prop is stored in a variable to be used in local scope, but imported as a prop in form of a key in the parent component where the child component is mounted
  const cleanFact = fact;

  // Hint: Render the 'cleanFact' if available, otherwise show a loading message
  return (
    <div>
      <h4>{!cleanFact ? "Loading..." : cleanFact} </h4>
    </div>
  )
};

// Hint: To use this component, import it in your main App component and pass the 'fact' prop to where the component is mounted.
// Example: <DogFact fact={yourFactData} />
