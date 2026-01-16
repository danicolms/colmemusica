import React, { useState } from "react";
import Header from "./layout/Header";
import NowPlaying from "./layout/NowPlaying";
import RecordGrid from "./display/RecordGrid";
import Navigation from "./controls/Navigation";
import { getRecordList } from "./api";

function App() {
  const [records, setRecords] = useState(getRecordList());

  console.log(records);
  const handlePrevious = () => {
    console.log("Previous");
  };

  const handleNext = () => {
    console.log("Next");
  };

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        {/* <Navigation onPrevious={handlePrevious} onNext={handleNext} />*/}
        <RecordGrid records={records} />
      </main>
      {/* <NowPlaying currentRecord={null} />*/}
    </div>
  );
}

export default App;
