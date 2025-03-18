import NavBar from "../components/navbar";
import Carousel from "../components/coursel";

export default function Home() {
  const arr = ["hi", "this", "is", "gogul"];

  return (
    <div className="min-h-screen flex flex-col gap-8 mb-12">
      <div className="flex justify-center">
        <NavBar />
      </div>

      <div className="text-center px-4 sm:px-8 md:px-16 lg:px-32 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Welcome to Trendy Threads
        </h1>
        <p className="text-base sm:text-lg text-cyan-600">
          Discover the latest fashion trends with us!
        </p>
      </div>

      <div className="flex justify-center items-center w-full">
        {/* <video autoPlay loop muted playsInline className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full max-w-3xl" style={{ boxShadow: '1px 3px 52px 5px #a5f3fc' }}>
          <source src="/t-shirt.webm" />
        </video> */}
      </div>

      <div className="flex justify-center items-center mt-6 sm:mt-10">
        <Carousel items={arr} />
      </div>
    </div>
  );
}
