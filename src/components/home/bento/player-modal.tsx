"use client";

import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  Tooltip as RechartsTooltip
} from "recharts";
import {ChartContainer} from "@/components/ui/chart";
import {cn} from "@/lib/utils";
import {leagueAverages} from "@/components/home/bento/players-data";

// --- Types ---
export type RadarDataPoint = {
  attribute: string;
  percentile: number;
  actualValue: string | number;
  leagueAverage: string | number;
};

type PlayerDataForRadar = {
  stats: { [key: string]: number | string | boolean | null } | null;
  player_pos?: string | null;
  position?: string | null;
};

type MetricAverage = {
  metric_name: string;
  average_value: number | string | null;
};

// --- Position Metrics ---
const sixMetricsWithLegend: { [position: string]: string[] } = {
  'Goalkeeper': ['Conceded goals per 90_percentile', 'Accurate passes, %_percentile', 'xG against per 90_percentile', 'Prevented goals per 90_percentile', 'Save rate, %_percentile', 'Exits per 90_percentile'],
  'Full Back': ['Successful defensive actions per 90_percentile', 'Defensive duels won, %_percentile', 'Accurate crosses, %_percentile', 'Accurate passes, %_percentile', 'Key passes per 90_percentile', 'xA per 90_percentile'],
  'Centre Back': ['Successful defensive actions per 90_percentile', 'Defensive duels won, %_percentile', 'Aerial duels won, %_percentile', 'Accurate passes to final third per 90_percentile', 'Accurate passes, %_percentile', 'Interceptions per 90_percentile'],
  'Defensive Midfielder': ['Accurate passes to final third per 90_percentile', 'Interceptions per 90_percentile', 'Sliding tackles per 90_percentile', 'Accurate passes to penalty area per 90_percentile', 'Aerial duels won, %_percentile', 'Accurate progressive passes per 90_percentile'],
  'Central Midfielder': ['Successful defensive actions per 90_percentile', 'Defensive duels won, %_percentile', 'Accurate passes, %_percentile', 'Accurate passes to final third per 90_percentile', 'Key passes per 90_percentile', 'xA per 90_percentile'],
  'Attacking Midfielder': ['Successful defensive actions per 90_percentile', 'Defensive duels won, %_percentile', 'Accurate smart passes per 90_percentile', 'Accurate passes to penalty area per 90_percentile', 'Goals per 90_percentile', 'Successful dribbles per 90_percentile'],
  'Winger': ['Non-penalty goals per 90_percentile', 'xG per 90_percentile', 'Shots on target per 90_percentile', 'Successful dribbles per 90_percentile', 'Assists per 90_percentile', 'xA per 90_percentile'],
  'Centre Forward': ['Non-penalty goals per 90_percentile', 'xG per 90_percentile', 'Shots on target per 90_percentile', 'Touches in box per 90_percentile', 'xA per 90_percentile', 'Offensive duels won, %_percentile']
};
const readableLabelsMap: { [key: string]: string } = {
  "Accurate progressive passes per 90": "Prog Pass per 90",
  "Accurate passes to final third per 90": "Pass 3rd per 90",
  "Accurate passes to penalty area per 90": "Pass Pen per 90",
  "Successful defensive actions per 90": "Def Actions per 90",
  "Non-penalty goals per 90": "Goals per 90",
  "Shots on target per 90": "Sh per 90",
  "Successful dribbles per 90": "Dribbles per 90",
  "Interceptions per 90": "Interceptions per 90",
  "Sliding tackles per 90": "Tackles per 90",
  "Touches in box per 90": "Touches Box per 90",
  "Key passes per 90": "Key Pass per 90",
  "Assists per 90": "Assists per 90",
  "xG per 90": "xG per 90",
  "xA per 90": "xA per 90",
  "Offensive duels won, %": "Off Duels %",
  "Aerial duels won, %": "Aerial Duels %"
};

// --- Generate Radar Data ---
export const generateRadarData = (
    player: PlayerDataForRadar,
    positionMetricAverages: MetricAverage[]
): RadarDataPoint[] => {
  if (!player.stats) return [];
  const currentPosition = player.player_pos ?? player.position ?? 'Other';
  const percentileMetricKeys = sixMetricsWithLegend[currentPosition] || [];
  if (percentileMetricKeys.length === 0) return [];

  const averagesMap = new Map(positionMetricAverages.map(avg => [avg.metric_name, avg.average_value]));

  return percentileMetricKeys.map((metricKey) => {
    const actualMetricKey = metricKey.replace(/_percentile$/, '');
    const readableAttribute = readableLabelsMap[actualMetricKey] ?? actualMetricKey;

    const percentileValue = player.stats![metricKey];
    const playerStatPercent = percentileValue != null && !isNaN(Number(percentileValue))
        ? Math.round(Number(percentileValue) * 100)
        : 0;

    const rawActualValue = player.stats![actualMetricKey];
    let actualValueDisplay: string | number = 'N/A';
    if (rawActualValue !== null && rawActualValue !== undefined) {
      const numVal = Number(rawActualValue);
      if (!isNaN(numVal)) {
        actualValueDisplay = actualMetricKey.includes('%') ? `${numVal.toFixed(1)}%` : numVal.toFixed(2);
      } else {
        actualValueDisplay = rawActualValue.toString();
      }
    }

    const leagueAverageForMetric = averagesMap.get(actualMetricKey);
    let leagueAverageDisplay: string | number = 'N/A';
    if (leagueAverageForMetric != null && !isNaN(Number(leagueAverageForMetric))) {
      const numAvg = Number(leagueAverageForMetric);
      leagueAverageDisplay = actualMetricKey.includes('%') ? `${numAvg.toFixed(1)}%` : numAvg.toFixed(2);
    }

    return {
      attribute: readableAttribute,
      percentile: playerStatPercent,
      actualValue: actualValueDisplay,
      leagueAverage: leagueAverageDisplay,
    };
  });
};

// --- Custom Tooltip ---
const CustomRadarTooltip = ({active, payload}: any) => {
  if (active && payload && payload.length) {
    const dataPoint = payload[0].payload as RadarDataPoint;
    if (!dataPoint) return null;
    return (
        <div className="rounded-md border bg-popover p-2.5 shadow-lg text-xs">
          <div className="font-semibold text-popover-foreground mb-1.5">{dataPoint.attribute}</div>
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground mr-2">Percentile:</span>
              <span className="font-mono text-primary font-medium">{dataPoint.percentile}%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground mr-2">Actual Value:</span>
              <span className="font-mono text-primary font-medium">{dataPoint.actualValue}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground mr-2">League Average:</span>
              <span className="font-mono text-primary font-medium">{dataPoint.leagueAverage}</span>
            </div>
          </div>
        </div>
    );
  }
  return null;
};

// --- Radar Chart Component ---
export default function PlayerRadarChart({
                                           data,
                                           className
                                         }: {
  data: RadarDataPoint[];
  height?: number;
  className?: string
}) {
  if (!data || data.length === 0) {
    return <div className="text-center text-muted-foreground py-8 h-[400px] flex items-center justify-center">Radar
      chart data not available.</div>;
  }

  return (
      <ChartContainer config={{percentile: {label: "Percentile", color: "var(--chart-4)"}}}
                      className={cn(``, className)}>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart
              cx="50%"
              cy="50%"
              outerRadius="94%"
              data={data}
              margin={{top: 20, right: 30, bottom: 20, left: 30}}
          >
            <PolarGrid/>
            <PolarAngleAxis dataKey="attribute"
                            tick={{fontSize: 12}}/>
            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{fontSize: 9}}/>
            <RechartsTooltip content={<CustomRadarTooltip/>}/>
            <Radar
                name="Percentile"
                dataKey="percentile"
                stroke="var(--chart-2)"
                fill="var(--chart-2)"
                fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </ChartContainer>
  );
}


export function PlayerRadarBento({player}) {
  const radarData: RadarDataPoint[] = generateRadarData(player, leagueAverages);
  return (
      <div className="flex flex-col gap-1.5 sm:gap-3 max-w-full justify-center items-center">

        <PlayerRadarChart data={radarData} className={"z-10 w-full h-60 sm:h-[20rem]"}/>
      </div>
  )
}