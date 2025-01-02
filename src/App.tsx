import React from "react";
import "reflect-metadata";

import "./App.css";
import { EventsTable } from "./components/EventsList";
import { Header } from "./components/Headers";
import { ModalComponent } from "./components/Modal";

function App() {
  return (
    <div className="App">
      <Header />
      <EventsTable />
      <ModalComponent />
    </div>
  );
}

export default App;
