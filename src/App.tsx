import { useState } from "react";
import Grid from "./Grid";
import recordsDb from "./records.db.json";
import { Record } from "./records";
import logo from "/logo.png";

function App() {
  const [records] = useState<Record[]>(recordsDb);

  const renderServiceIcons = (record: Record) => {
    if (!record.services || record.services.length === 0) return null;

    return (
      <div className="services-overlay">
        <div className="services-container">
          {record.services.map((service, index) => (
            <img
              key={`${service}-${index}`}
              src={service}
              alt={service}
              className="service-icon"
            />
          ))}
        </div>
      </div>
    );
  };

  const renderItem = (itemConfig: {
    gridIndex: number;
    isMoving: boolean;
    position: { x: number; y: number };
  }) => {
    const recordIndex = Math.abs(itemConfig.gridIndex) % records.length;
    const record = records[recordIndex];

    if (!record) return null;

    return (
      <div className="grid-item">
        <img src={record.artwork} alt={record.name} />
        {renderServiceIcons(record)}
      </div>
    );
  };

  return (
    <>
      <div className="logo-backdrop" />
      <img
        src={logo}
        alt="còlmemusica"
        className="logo"
        style={{ width: "160px" }}
      />
      <Grid gridSize={400} renderItem={renderItem} className="grid-container" />
    </>
  );
}

export default App;
