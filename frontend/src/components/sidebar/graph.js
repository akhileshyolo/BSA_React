import React from 'react'
import { Chart } from 'react-charts'
 
export default function Graph(props) {
  const data = React.useMemo(
    () => props.dataSet,
    [props.dataSet]
  )

  const series = React.useMemo(
    () => ({
      type: 'bar'
    }),
    [props.dataSet]
  )
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'ordinal', position: 'left' },
      { position: 'bottom', type: 'linear', stacked: false }
    ],
    [props.dataSet]
  )
 
  return (
    <div
      style={{
        width: '600px',
        height: '300px'
      }}
      className="chart"
    >
      <p>{props.country} Graph</p>
      <Chart data={data} series={series} axes={axes} tooltip />
    </div>
  )
}