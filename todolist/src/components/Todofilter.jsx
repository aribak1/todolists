import React from "react";

const Todofilter = ({ filters, setfilters }) => {
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <button
        disabled={filters === "showall"}
        onClick={() => {
          setfilters("showall");
        }}
      >
        All
      </button>
      <button
        disabled={filters === "incomplete"}
        onClick={() => {
          setfilters("incomplete");
        }}
      >
        incomplete
      </button>
      <button
        disabled={filters === "completed"}
        onClick={() => {
          setfilters("completed");
        }}
      >
        completed
      </button>
    </div>
  );
};

export default Todofilter;
