import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../../../app/ui/card";
import { Button } from "../../../app/ui/button";
import { Euro, AlignCenter } from "lucide-react";
import { useEffect, useState } from "react";
import getCurrency from "../../../services/CryptoApi";

function CryptoCurseCard() {
  const [exchange, setExchange] = useState(null);

  useEffect(() => {
    getCurrency(setExchange);
  }, []);

  return exchange?.map(({ code, rate, description }) => {
    return (
      <Card
        className="ml-2 w-full md:max-w-[370px] h-[250px] flex flex-col justify-between"
        key={code}
      >
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
          <Button variant="default" size="default">
            <AlignCenter size={25} />
          </Button>
          <Button>Trade</Button>
        </CardFooter>
      </Card>
    );
  });
}

export default CryptoCurseCard;
