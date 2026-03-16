import MainNavigation from "./MainNavigation";

export default function Header() {
  return (
    <header className="bg-[#F5E7C6]">
      <div className="mx-auto flex h-15.5 max-w-6xl justify-between">
        <div className="flex h-15.5 items-center justify-center ml-5 ">
          <img
            src="/Apron-Logo.png"
            alt="A cartoon apron as the logo of the page"
            className="h-20 w-auto"
          />
          <span className="font-bold text-2xl">Apron</span>
        </div>
        <MainNavigation />
      </div>
    </header>
  );
}
