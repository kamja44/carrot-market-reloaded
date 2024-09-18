export default function Home() {
  return (
    <main className="bg-gray-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 h-screen    flex items-center 2xl:bg-purple-100 justify-center p-5 ">
      <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col gap-3">
        <div className="group flex flex-col">
          <input
            className="bg-gray-100 w-full"
            placeholder="Write your email"
          />
          <span className="group-focus-within:block hidden">
            Make sure it is a valid email...
          </span>
          <button className="w-full h-[345.178px] bg-[#543cb8] text-white rounded-kamja m-tomato">
            Submit
          </button>
        </div>
      </div>
    </main>
  );
}
