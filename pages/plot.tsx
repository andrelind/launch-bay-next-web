import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import json from '../public/static/plot_data.json';

const Plot = dynamic(() => import('react-plotly.js'), {
  ssr: false,
});

export type Faction =
  | 'First Order'
  | 'Galactic Empire'
  | 'Galactic Republic'
  | 'Rebel Alliance'
  | 'Resistance'
  | 'Scum and Villainy'
  | 'Separatist Alliance';

type Props = {};
const PlotPage: NextPage<Props> = ({}) => {
  console.log(json);
  const firstOrder = json.filter((j) => j.faction === 'First Order');
  const empire = json.filter((j) => j.faction === 'Galactic Empire');
  const republic = json.filter((j) => j.faction === 'Galactic Republic');
  const rebels = json.filter((j) => j.faction === 'Rebel Alliance');
  const resistance = json.filter((j) => j.faction === 'Resistance');
  const scum = json.filter((j) => j.faction === 'Scum and Villainy');
  const cis = json.filter((j) => j.faction === 'Separatist Alliance');

  const line = {
    x: [0, 11],
    y: [0, 11],
    mode: 'lines',
    type: 'scatter',
    name: 'Reference line',
  };

  return (
    <div style={{ height: '100vh' }}>
      <Plot
        useResizeHandler
        style={{ width: '100%', height: '100%' }}
        data={[
          //@ts-ignore
          ...[firstOrder, empire, republic, rebels, resistance, scum, cis].map(
            (j) => ({
              x: j.map((x) => x.cost),
              y: j.map((x) => x.pred),
              type: 'scatter',
              mode: 'markers',
              marker: { color: j[0].color },
              text: j.map(
                (x) => `${x.name} ${x.diff > 0 ? '+' : ''}${x.diff} points`
              ),
              customdata: j.map((x) => x.ship),
              name: j[0].faction,
              hovertemplate:
                '<b>%{text}</b><br>' +
                '%{customdata}<br>' +
                '<i>Cost</i>: %{x} points<br>' +
                '<i>Prediction</i>: %{y} points',
            })
          ),
          //@ts-ignore
          line,
        ]}
        layout={{
          autosize: true,
          title: 'X-Wing ML',
          xaxis: { title: 'cost' },
          yaxis: { title: 'pred' },
        }}
      />
    </div>
  );
};

export default PlotPage;
