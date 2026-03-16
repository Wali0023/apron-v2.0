export default async function Home() {
  return (
    <div className="mt-4 items-center justify-center flex flex-col gap-2">
      <div className="text-4xl ">January</div>
      <div className="w-88 h-120 bg-[#F5E7C6] rounded-lg border-black border ">
        <div className="w-full bg-[#f67d31] h-18 rounded-lg font-bold items-center justify-center flex text-amber-50 text-2xö">
          Today's Menu
        </div>
        <div className="font-bold justify-center items-center flex flex-col gap-4 mt-8">
          <span className="text-xl">Breakfast</span>
          <span>Cereal</span>
          <div className="h-3 w-3 rounded-full bg-[#f67d31]"></div>
          <span className="text-xl">Lunch</span>
          <span>Margherita Pizza</span>
          <div className="h-3 w-3 rounded-full bg-[#f67d31]"></div>
          <span className="text-xl">Dinner</span>
          <span>Beef and Broccoli Stir-Fry</span>
        </div>
      </div>
    </div>
  );
}
