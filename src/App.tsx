import { useState } from "react";
import Grid from "./Grid";
import recordsDb from "./records.db.json";
import { Record } from "./records";

//@ts-ignore
import logo from "/logo.jpeg";
import spotifyLogo from "/services/spotify.png";
import youtubeLogo from "/services/youtube.png";
import appleLogo from "/services/apple.png";
import deezerLogo from "/services/deezer.png";
import amazonLogo from "/services/amazon.png";

function App() {
  const [records] = useState<Record[]>(recordsDb);

  const getServiceIcon = (serviceName: string) => {
    switch (serviceName) {
      case "Spotify":
        return spotifyLogo;
      case "YouTube Music":
        return youtubeLogo;
      case "Apple Music":
        return appleLogo;
      case "Deezer":
        return deezerLogo;
      case "Amazon Music":
        return amazonLogo;
      default:
        return null;
    }
  };

  const renderServiceIcons = (record: Record) => {
    if (!record.services || record.services.length === 0)
      return (
        <div className="services-backdrop">
          <p> Coming soon</p>
        </div>
      );

    return (
      <div className="services-backdrop">
        <div className="services-container">
          {record.services.map((service, index) => {
            const icon = getServiceIcon(service.name);
            if (!icon) return null;

            return (
              <a
                key={`${service.name}-${index}`}
                href={service.url}
                target="_blank"
                rel="noopener noreferrer"
                className="service-link"
              >
                <img src={icon} alt={service.name} className="service-icon" />
              </a>
            );
          })}
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
      <div className="grid-item-wrapper">
        <div className="grid-item">
          <img className="artwork" src={record.artwork} alt={record.name} />
          {renderServiceIcons(record)}
        </div>
      </div>
    );
  };

  return (
    <>
      <a href="https://danicolms.xyz" target="_blank">
        <img src={logo} alt="danicolms Logo" className="logo" />
      </a>
      <Grid gridSize={300} renderItem={renderItem} className="grid-container" />
    </>
  );
}

export default App;
