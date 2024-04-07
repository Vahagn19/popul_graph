import {BarChart,XAxis,YAxis,Tooltip,Bar,CartesianGrid,Legend} from "recharts"


const Tester = () => {


    const data = [
        {
          "name": "Page A",
          "uv": 1,
          "pv": 240
        },
        {
          "name": "Page B",
          "uv": 5,
          "pv": 241
        },
        {
          "name": "Page C",
          "uv": 10,
          "pv": 245
        },
     
      ]
    
  return (
<BarChart width={730} height={250} data={data}>
 
  <XAxis dataKey="name" />
  <YAxis dataKey="pv" />
  <Tooltip />
  <Legend />
  <Bar dataKey="pv" fill="#8884d8"/>

</BarChart>

    )
}

export default Tester