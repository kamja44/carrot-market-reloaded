export default function Home() {
  return (
    <main className="bg-gray-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 h-screen    flex items-center 2xl:bg-purple-100 justify-center p-5 ">
      <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col gap-3">
        {["Nico", "Me", "kamja", "YourSelf", ""].map((person, index) => (
          <div key={index} className="flex items-center gap-5">
            <div className="size-10 bg-blue-400 rounded-full" />
            <span className="text-lg font-medium empty:w-24 empty:h-5 empty:rounded-full empty:animate-pulse empty:bg-gray-300">
              {person}
            </span>
            <div className="size-6  bg-red-500 text-white flex items-center justify-center rounded-full relative">
              {/* animate ping을 사용할때는 항상 같은 원 2개를 만든 후 사용 */}
              <span className="z-10">{index}</span>
              <div className="size-6  bg-red-500 rounded-full absolute animate-ping" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
