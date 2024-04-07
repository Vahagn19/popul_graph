import { Button } from "../../ui/button"
import { Atom } from "lucide-react"

function NavLogo() {


  return (

    <div className="flex h-14 items-center  md:px-4 lg:h-[60px] lg:px-6">
      <Button variant="ghost" size="icon" className="md:h-8 md:w-8">
        <Atom className="h-8 w-8" />
        <span className="sr-only" >Atom Icon</span>
      </Button>
      <div className="flex">
        <h2 className="scroll-m-20 pb-1 text-2xl font-bold tracking-tight first:mt-0 ml-3">
          Carbon
        </h2>
        <p className="croll-m-20 pb-1 text-2xl tracking-tight first:mt-0 ml-0">
          Cell
        </p>
      </div>
    </div>

  )
}

export default NavLogo