import React from 'react';

export default function MeasurementCard({ parameter, value, lastUpdated, unit, sourceName, averagingPeriod }) {
  return (
    <div className="card">
      <h3>{parameter}</h3>
      <div>{value} {unit}</div>
      <div>last updated: {lastUpdated}</div>
      <div>from: {sourceName}</div>
      <div>Averaging Period: {averagingPeriod.value} {averagingPeriod.unit}</div>
    </div>
  )
}