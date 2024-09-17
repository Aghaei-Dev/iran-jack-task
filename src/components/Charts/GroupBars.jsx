import { BarChart } from '@mui/x-charts/BarChart'

export default function GroupBars({ ...props }) {
  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: ['XS', 'S', 'M', 'L', 'XL', 'XXl'] }]}
      series={[{ data: [65, 65, 65, 65, 65, 65] }, { data: [80, 80, 80, 80, 80, 80] }, { data: [30, 30, 30, 30, 30, 30] }]}
      grid={{ horizontal: true }}
      colors={['#93C5FD', '#1D4ED8', '#888888']}
      {...props}
    />
  )
}
