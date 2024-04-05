import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../../ui/card";
import { Button } from "../../ui/button";
import {Info,Euro,DollarSign,BadgePoundSterling,AlignCenter } from "lucide-react";
import { useEffect, useState } from "react";

function CryptoCurse() {
  const [exchange, setExchange] = useState(null);
  const baseUrl = "https://api.coindesk.com/v1/bpi/currentprice.json";

  const newArray = (obj) => {
    const result = [];
    for (let key in obj) {
      result.push(obj[key]);
    }
    return result;
  };

  useEffect(() => {
    async function getCurrency() {
      try {
        const response = await fetch(baseUrl);
        if (!response.ok) {
          throw Error("Cannot get data");
        }
        const result = await response.json();
        const data = newArray(result.bpi);
        setExchange(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getCurrency();
  }, []);

  console.log(exchange);

  return (

     exchange?.map(({code,rate,description})=>{
        return(
          <Card className="ml-4 mt-3 w-[370px] h-[250px] flex flex-col justify-between" key={code}>
          <CardHeader className="flex-row items-center p-2 pl-0 ml-4">
            <Euro className="mt-2 text-xl" />
            <h2 className="mt-2 scroll-m-20 text-2xl font-semibold tracking-tight">
              {code}
            </h2>
          </CardHeader>
          <CardTitle>
            <p className="text-xl text-muted-foreground ml-4 p-2">
              {description}
            </p>
          </CardTitle>
          <CardContent className="p-2 ml-4">
            <h2 className="scroll-m-20 pb-1 text-3xl font-semibold tracking-tight first:mt-0">
              {rate.slice(0, 5)}
            </h2>
          </CardContent>
          <CardFooter className="flex justify-between p-4 ml-4 mr-4 ">
            <Button variant="outline" size="icon" >
              <AlignCenter color="hsl(346.8 77.2% 49.8%)"   size={48} />
            </Button>
            <Button>Trade</Button>
          </CardFooter>
        </Card>
        
        )
    })
 
    );
}

export default CryptoCurse;
