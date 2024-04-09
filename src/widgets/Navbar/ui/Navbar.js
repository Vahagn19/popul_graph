import PopulGraphCard from "../../../shared/PopulGraphCard";
import { Card } from "../../../app/ui/card";
import CryptoCurseCard from "../../../shared/CryptoCurseCard";
import Header from "../../Header";
import SideBar from "../../SideBar";
import MetamaskCard from "../../../shared/MetamaskCArd";

export function Navbar() {
  return (
    <Card className="grid min-h-screen w-full md:grid-cols-[230px_1fr] lg:grid-cols-[280px_1fr]">
      <SideBar />
      <div className="flex flex-col">
        <Header />
        <div className="flex flex-col md:flex-row">

        <PopulGraphCard />
        <MetamaskCard/>
        </div>
   
        <div className="mr-4 ml-4 mb-2 flex flex-col md:flex-row">

          <CryptoCurseCard />
        </div>
      </div>
    </Card>
  );
}

export default Navbar;


