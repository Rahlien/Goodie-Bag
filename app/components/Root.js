import React from "react";
import { Routes, Route } from 'react-router-dom' 
import CandiesList from "./CandiesList";

const Root = () => {
  return (
    <div>
      <nav>Goodie Bag</nav>
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <p>What a nice home page for your goodies!</p>
        <Routes>
          <Route index element={<CandiesList />} />
        </Routes>
      </main>
    </div>
  );
};

export default Root;
