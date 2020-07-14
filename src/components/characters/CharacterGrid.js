import React from "react";

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className="cards">
      {items.map((item) => (
        <h2>{item.name}</h2>
      ))}
    </section>
  );
};

export default CharacterGrid;
