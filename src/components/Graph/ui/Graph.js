import { useEffect, useState } from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader} from "../../ui/card";

export default function Graph() {
  const [array, setArray] = useState(null);
  const apiUrl =
    "https://datausa.io/api/data?drilldowns=Nation&measures=Population";

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(apiUrl);
        const result = await response.json();

        setArray(result.data.reverse());
      } catch (error) {
        console.log(error.message);
      }
    }
    getData();
  }, []);
console.log(array);
  return (

    <Card className="lg:col-span-4">
      <CardHeader>Graph for Population</CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart
            data={array?.map(({ Population, ...item }) => {
              return {
                ...item,
                Population: Population - 300_000_000,
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
              tickFormatter={(value) => `${Math.floor(value/100_000)}mln`}
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
