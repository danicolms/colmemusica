import Header from "./Header";
import RecordGrid from "./Record/Grid";
import { getRecordList } from "./Record/api";

function App() {
  const records = getRecordList();

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <RecordGrid records={records} />
      </main>
    </div>
  );
}

export default App;
