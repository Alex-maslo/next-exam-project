import React from "react";

const RecipeTags = ({ array }: { array: string[] }) => {
  return (
    <>
      <ul className="list-disc p-4">
        {array ? (
          array.map((element, index) => <li key={index}>{element}</li>)
        ) : (
          <p>...</p>
        )}
      </ul>
    </>
  );
};

export default RecipeTags;
