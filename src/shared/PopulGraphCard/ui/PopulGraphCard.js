import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { Card, CardContent, CardHeader } from "app/ui/card";
import getData from "services/PopulationApi";

function PopulGraphCard() {
  const [array, setArray] = useState(null);

  useEffect(() => {
    getData(setArray);
  }, []);

  return (
    <Card className="m-4 lg:col-span-4 w-full">
       <CardHeader>Graph for Population</CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={330}>
          <BarChart
            data={array?.map(({ Population, ...item }) => {
              return {
                ...item,
                Population: Population - 310_000_000,
              };
            })}
          >
            <XAxis
              dataKey="Year"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) =>
                `${300 + Math.floor(value / 1000_000)}mln`
              }
            />
            <Tooltip
              itemStyle={{ color: "black" }}
              labelStyle={{ color: "black" }}
              formatter={(value) => value + 300000000}
            />
            <Bar
              dataKey="Population"
              fill="currentColor"
              radius={[4, 4, 0, 0]}
              className="fill-primary"
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

export default PopulGraphCard;
