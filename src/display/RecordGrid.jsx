import React from 'react'
import RecordCard from './RecordCard'

function RecordGrid({ records }) {
  return (
    <div className="record-grid">
      {records.map((record) => (
        <RecordCard key={record.id} record={record} />
      ))}
    </div>
  )
}

export default RecordGrid
