import React from 'react'

function RecordCard({ artwork }) {
  return (
    <div className="record-card">
      <div className="record-placeholder">
      <img src={artwork} alt="album artwork"/>
      </div>
    </div>
  )
}

export default RecordCard
