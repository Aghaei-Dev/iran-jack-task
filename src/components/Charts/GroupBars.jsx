import * as React from 'react'
import { BarChart } from '@mui/x-charts/BarChart'

export default function GroupBars({ ...props }) {
  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
      barLabel='value'
      grid={{ horizontal: true }}
      {...props}
    />
  )
}
