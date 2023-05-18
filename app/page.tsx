import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-200 h-screen w-screen overflow-hidden">
      <main className="max-w-screen-2xl m-auto bg-white">
        <nav className="bg-white p-2 flex justify-between">
          <Link href={"/"} className="font-bold text-grey-700 text-2xl">
            OpenTable
          </Link>
          <div className="flex gap-4 text-sm">
            <button className="bg-sky-700 hover:bg-sky-600 text-white py-2 px-4 border p-2 rounded">
              Sign In
            </button>
            <button className="py-2 px-4 border rounded hover:bg-slate-200">Sign Up</button>
          </div>
        </nav>
        <div className="min-h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984]">
          <div className="text-center py-10 mx-5">
            <h1 className="text-white text-5xl font-bold mb-2">
              Find your table for any occasion
            </h1>
            <div className="text-left py-3 sm:m-5 flex gap-3 flex-col sm:flex-row justify-center align-middle">
              <input className="rounded text-lg w-full sm:w-[400px] p-2 " placeholder="State, city or town" />
							<button className="bg-red-600 text-lg w-full sm:w-auto py-2 px-8  text-white hover:bg-red-500 transition ease-in rounded">Let's GO</button>
						</div>
          </div>
        </div>
				<main>
					<div className="py-3 md:px-36  mt-10 flex flex-wrap justify-center md:justify-normal">
						<div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer ">
							<img 
								src='https://resizer.otstatic.com/v2/photos/wide-huge/3/50615219.jpg'
								alt="food"
								className="w-full h-36"
							/>
							<div className="p-1">
								<h3 className="font-bold text-2xl mb-2 truncate">Culichi Town - Sacramento</h3>
							</div>
							<div className="flex item-start">
								<div className="flex mb-2">******</div>
								<p className="ml-2">90 reviews</p>
							</div>
							<div className="flex font-light capitalize">
								<p className="text-reg">Mexican</p>
								<p className="mr-3">$$$</p>
								<p className="p">Torento</p>
							</div>
							<p className="text-reg mt-1">Booked 3 times today</p>
						</div>
					</div>
				</main>
      </main>
    </main>
  );
}
