function page() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#1e3c72] to-[#2a5298] dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
            <div className="relative max-w-2xl w-full p-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-lg text-center transition-all duration-300">
                <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200 dark:from-gray-300 dark:to-gray-400">
                    Welcome to Your Future 🚀
                </h1>
                <p className="mt-4 text-lg text-gray-200 dark:text-gray-300">
                    Build stunning web experiences with Laravel, React, Vite & Inertia.js.
                </p>
                <button className="mt-6 px-8 py-3 text-lg font-semibold text-white bg-white/20 border border-white/30 rounded-full shadow-md backdrop-blur-lg transition-all duration-300 hover:bg-white/30 hover:scale-105">
                    Get Started
                </button>

               
                </div>
        </div>
    );
}

export default page;
