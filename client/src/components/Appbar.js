import React from "react";

import Navigation from "./Navigation";

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #2A363B",
  },
};

const Appbar = () => {
  return (
    <header style={styles.header}>
      <Navigation />
    </header>
  );
};

export default Appbar;
