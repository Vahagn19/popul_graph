import { Bar, BarChart, XAxis,YAxis, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardTitle, CardHeader } from "../../ui/card";
import { useState,useEffect } from "react";


function Tester() {



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
    }, [])







  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-2">
      <Card style={{
        background:"hsl(240 3.7% 15.9%)"
      }}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-base font-normal">Subscriptions</CardTitle>
        </CardHeader>
        <CardContent>
          {/* <div className="text-2xl font-bold">+2350</div>
            <p className="text-xs text-muted-foreground">
              +180.1% from last month
            </p> */}
          <div className="mt-4 h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={array} >
                <XAxis dataKey="Year"/>
                <YAxis />
                <Bar
                
                  dataKey="Population"
                  style={
                    {
                      fill: "hsl(346.8 77.2% 49.8%)",
                      opacity: 1,
                      "--theme-primary": `hsl(${ "dark" 
                          .primary
                      })`,
                      
                    }
                  }
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Tester;
