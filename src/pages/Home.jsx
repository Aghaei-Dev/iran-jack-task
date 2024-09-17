import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge'

import styled from '@emotion/styled'
import { ChartCard } from '../components'
import { Area, Bars, GroupBars, Pie } from '../components/Charts'
import { periods } from '../assets/constants'

export default function Home() {
  return (
    <ChartWrapper>
      <ChartCard
        tabs
        array={periods}
        singleIcon
        chart={
          <Gauge
            height={300}
            value={72}
            startAngle={-90}
            endAngle={90}
            innerRadius='80%'
            outerRadius='100%'
            text={({ value }) => `${value} %`}
            sx={{
              [`& .${gaugeClasses.valueText}`]: {
                fontSize: 40,
                transform: 'translate(1px, -50px)',
              },
              [`& .${gaugeClasses.valueArc}`]: {
                fill: 'var(--green-500)',
              },
            }}
          />
        }
        desc='Description'
        title='Card title'
        icons={'DoDisturb'}
      />
      <ChartCard
        singleIcon
        chart={<Bars height={300} />}
        desc='Description'
        title='Card title'
        icons={'DoDisturb'}
      />
      <ChartCard
        singleIcon
        chart={<Area height={300} />}
        desc='Description'
        title='Card title'
        icons={'DoDisturb'}
      />

      <ChartCard
        singleIcon
        chart={<Pie height={300} />}
        desc='Description'
        title='Card title'
        icons={'DoDisturb'}
      />
      <ChartCard
        singleIcon
        chart={<GroupBars height={300} />}
        desc='Description'
        title='Card title'
        icons={'DoDisturb'}
      />
    </ChartWrapper>
  )
}

const ChartWrapper = styled('section')(() => ({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(358px, 1fr))',
  gap: '1rem',
  margin: '0 auto 4.5rem',
  padding: '1rem',
}))
