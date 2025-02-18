import { Head, Link, usePage } from "@inertiajs/react";
import { useRoute } from "../../../vendor/tightenco/ziggy";



function Home({ posts }) {
    const route = useRoute();
    const {component} = usePage();
  return (
    <>

    <Head title={`${component} - LRT  `}/>

      <div className="container mx-auto px-4">
        {/* Display posts as cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.data.map((post) => (
            <div
              key={post.id}
              className="relative p-6 bg-white/20 backdrop-blur-md rounded-2xl shadow-lg transition-all duration-300 hover:bg-white/30"
            >
              <h3 className="text-2xl font-semibold text-gray-200">
                {new Date(post.created_at).toLocaleString()}
              </h3>
              <p className="mt-4 text-lg text-gray-200 dark:text-gray-300">
                {post.body}
              </p>
{/*              
<Link href={`/posts/${post.id}`} className="text-blue-400 hover:underline">
                Read More...
              </Link>
              */}

              <Link href={route("posts.show", post)}>
               Read More...
              </Link>

            </div>
          ))}
        </div>

        {/* Pagination Links */}
        <div className="mt-8 flex flex-wrap justify-center items-center gap-3">
          {posts.links.map((link) =>
            link.url ? (
              <Link
                key={link.label}
                href={link.url}
                className={`px-4 py-2 text-lg font-semibold rounded-full transition-all duration-300 ${
                  link.active
                    ? "bg-blue-700 text-white"
                    : "bg-white text-black hover:bg-blue-600 hover:text-white"
                }`}
                dangerouslySetInnerHTML={{ __html: link.label }}
              />
            ) : (
              <span
                key={link.label}
                dangerouslySetInnerHTML={{ __html: link.label }}
                className="text-gray-500 px-4 py-2 text-lg font-semibold rounded-full cursor-not-allowed"
              ></span>
            )
          )}
        </div>
   
      </div>
    </>
  );
}

export default Home;
