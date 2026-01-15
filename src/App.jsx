import React, { useState } from "react";
import Header from "./layout/Header";
import NowPlaying from "./layout/NowPlaying";
import RecordGrid from "./display/RecordGrid";
import Navigation from "./controls/Navigation";

const mockRecords = Array.from({ length: 8 }, (_, i) => ({
  id: `record-${i}`,
  title: `Record ${i + 1}`,
  artist: `Artist ${i + 1}`,
  coverImage: null,
  isPlaying: false,
}));

function App() {
  const [records, setRecords] = useState(mockRecords);

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
        <Navigation onPrevious={handlePrevious} onNext={handleNext} />
        <RecordGrid records={records} />
      </main>
      <NowPlaying currentRecord={null} />
    </div>
  );
}

export default App;
