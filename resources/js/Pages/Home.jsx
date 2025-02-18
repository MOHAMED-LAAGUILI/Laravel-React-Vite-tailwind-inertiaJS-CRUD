import Layout from "../Layout/Layout";

 function Home({name}) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#1e3c72] to-[#2a5298] dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
        <div className="relative max-w-2xl w-full p-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-lg text-center transition-all duration-300">
          <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200 dark:from-gray-300 dark:to-gray-400">
            Welcome {name} to Your Future 🚀
          </h1>
          <p className="mt-4 text-lg text-gray-200 dark:text-gray-300">
            Build stunning web experiences with Laravel, React, Vite & Inertia.js.
          </p>
          <button className="mt-6 px-8 py-3 text-lg font-semibold text-white bg-white/20 border border-white/30 rounded-full shadow-md backdrop-blur-lg transition-all duration-300 hover:bg-white/30 hover:scale-105">
            Get Started
          </button>
  
          {/* Floating Glass Effects */}
          <div className="absolute top-[-40px] left-[10%] w-16 h-16 bg-white/10 backdrop-blur-md rounded-full shadow-lg"></div>
          <div className="absolute bottom-[-60px] right-[15%] w-20 h-20 bg-white/10 backdrop-blur-md rounded-full shadow-lg"></div>
          <div className="absolute top-[50px] left-[60%] w-14 h-14 bg-white/10 backdrop-blur-md rounded-full shadow-lg"></div>
          <div className="absolute bottom-[20px] right-[5%] w-24 h-24 bg-white/10 backdrop-blur-md rounded-full shadow-lg"></div>
          <div className="absolute top-[-30px] right-[40%] w-18 h-18 bg-white/10 backdrop-blur-md rounded-full shadow-lg"></div>
          <div className="absolute bottom-[80px] left-[30%] w-16 h-16 bg-white/10 backdrop-blur-md rounded-full shadow-lg"></div>
          <div className="absolute top-[90px] left-[5%] w-22 h-22 bg-white/10 backdrop-blur-md rounded-full shadow-lg"></div>
          <div className="absolute bottom-[-40px] right-[50%] w-14 h-14 bg-white/10 backdrop-blur-md rounded-full shadow-lg"></div>
        </div>
      </main>
    );
  }
  

  export default Home;