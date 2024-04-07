import Graph from "../../Graph";
import { Card } from "../../ui/card";
import CryptoCurse from "../../CryptoCurse";
import SideBar from "../../SideBar";
import Header from "../../Header";

export function Navbar() {
  return (
    <Card className="grid min-h-screen w-full md:grid-cols-[230px_1fr] lg:grid-cols-[280px_1fr]">
      <SideBar />
      <div className="flex flex-col">
        <Header />
        <Graph />
        <CryptoCurse />
      </div>
    </Card>
  );
}

export default Navbar;















