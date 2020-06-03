import React from 'react';

export default function MeasurementCard({ parameter, value, lastUpdated, unit, sourceName, averagingPeriod }) {
  return (
    <div className="card">
      <h3>{parameter}</h3>
      <div>Quantity: {value} {unit}</div>
      <div>Last Updated: {lastUpdated}</div>
      <div>From: {sourceName}</div>
      <div>Averaging Period: {averagingPeriod.value} {averagingPeriod.unit}</div>
    </div>
  )
}