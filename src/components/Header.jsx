import { useState, useEffect } from "react";
import { Sidebar } from "./Sidebar";

export function Header() {
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    setShowSidebar(true);
  }, [showSidebar]);

  return (
    <>
      <div className="header p-2 flex flex-row justify-between items-center sticky top-0 bg-slate-500 ">
        <div
          className="profile rounded-full bg-red-400 w-12 h-12"
          style={{ cursor: "pointer" }}
          onClick={() => {
            setShowSidebar(!showSidebar);
          }}></div>
        <h1 className=" text-lg lg:text-3xl">Thread2GetHer</h1>
        <h1 className="text-xl">Buscar</h1>
      </div>
      <Sidebar showSidebar={showSidebar} />
    </>
  );
}
