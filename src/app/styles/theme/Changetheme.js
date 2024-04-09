import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Button } from "../../ui/button";

function Changetheme() {
  const [color, setColor] = useState("light");
  const { setTheme } = useTheme();

  const handleChangeTheme = () => {
    if (color === "dark") {
      setColor("light");
    }
    if (color === "light") {
      setColor("dark");
    }
  };
  useEffect(() => {
    setTheme(color);
  }, [color, setTheme]);

  return (
    <div>
      <Button size="icon" onClick={handleChangeTheme}>
        {color === "light" ? (
          <>
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          </>
        ) : (
          <>
            <MoonIcon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </>
        )}
      </Button>
    </div>
  );
}

export default Changetheme;
