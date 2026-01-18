import RecordCard from "./Card";

function RecordGrid({ records }) {
  return (
    <div className="record-grid">
      {records.map((record) => (
        <RecordCard key={record.id} artwork={record.artwork} />
      ))}
    </div>
  );
}

export default RecordGrid;
