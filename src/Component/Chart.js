import React from 'react';
import { Axis, Legend, LineSeries, Plot, Heading } from 'react-plot';

const Chart = () => (

    <Plot
      width={550}
      height={500}
      margin={{ bottom: 50, left: 90, top: 50, right: 100 }}
    >
      <Heading
        title="Electrical characterization"
        subtitle="current vs voltage"
      />
      <LineSeries
        data={[
          { x: 0, y: 0 },
          { x: 1, y: 1 },
          { x: 2, y: 2 },
          { x: 3, y: 3 },
          { x: 4, y: 3 },
          { x: 5, y: 3 },
        ]}
        xAxis="x"
        yAxis="y"
        lineStyle={{ strokeWidth: 3 }}
        label="Vg = 7V"
        displayMarker={false}
      />
      <LineSeries
        data={[
          { x: 0, y: 0 },
          { x: 1, y: 1 },
          { x: 2, y: 2 },
          { x: 3, y: 3 },
          { x: 4, y: 3 },
          { x: 5, y: 3 },
        ]}
        xAxis="x"
        yAxis="y"
        displayMarker={true}
        markerShape="circle"
        label="Vg = 3V"
      />
      <Axis
        id="x"
        position="bottom"
        label="Drain voltage [V]"
        displayGridLines={true}
        max={6.1 / 2}
        tickStyle={{ fontSize: '0.8rem' }}
      />
      <Axis
        id="y"
        position="left"
        label="Drain current [mA]"
        displayGridLines={true}
        labelSpace={50}
        max={6.1 * 2}
        tickStyle={{ fontSize: '0.8rem' }}
      />
      <Legend position="right" />
    </Plot>
  );
  export default Chart;