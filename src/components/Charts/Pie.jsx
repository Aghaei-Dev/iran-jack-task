import { PieChart } from '@mui/x-charts/PieChart'
import { useDrawingArea } from '@mui/x-charts/hooks'
import { styled } from '@mui/material/styles'

const data = [
  { value: 100, label: 'A' },
  { value: 50, label: 'B' },
  { value: 30, label: 'C' },
  { value: 20, label: 'D' },
  { value: 60, label: 'D' },
]

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 20,
}))

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea()
  return (
    <StyledText
      x={left + width / 2}
      y={top + height / 2}
    >
      {children}
    </StyledText>
  )
}

export default function Pie({ ...props }) {
  return (
    <PieChart
      series={[{ data, innerRadius: 110, paddingAngle: 1 }]}
      colors={['#A6E9ED', '#00666D', '#005B70', '#00B7C3', '#f5f5f5']}
      {...props}
      // slotProps={{ legend: { hidden: true } }}
    >
      <PieCenterLabel>1000</PieCenterLabel>
    </PieChart>
  )
}
