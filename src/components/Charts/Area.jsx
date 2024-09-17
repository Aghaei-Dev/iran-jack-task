import { LineChart, lineElementClasses } from '@mui/x-charts/LineChart'

const uData = [4000, 3000, 2000, 2780, 1890, 2390]
const pData = [2400, 1398, 9800, 3908, 4800, 3800]
const xLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']

export default function Area({ ...props }) {
  return (
    <LineChart
      {...props}
      series={[
        { data: uData, label: 'uv', area: true, stack: 'total', showMark: false },
        { data: pData, label: 'pv', area: true, stack: 'total', showMark: false },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
      colors={['#00B7C34D', '#637CEF']}
      sx={{
        [`& .${lineElementClasses.root}`]: {
          //   display: 'none',
        },
      }}
    />
  )
}
