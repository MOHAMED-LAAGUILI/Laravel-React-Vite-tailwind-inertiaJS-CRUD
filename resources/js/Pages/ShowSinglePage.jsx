import { useState, useEffect } from "react";
import { Link, useForm, usePage } from "@inertiajs/react";
import toast from "react-hot-toast";
import { useRoute } from "../../../vendor/tightenco/ziggy";

function ShowSinglePage({ post }) {
 const { delete: destroy, processing } = useForm();
  const route = useRoute();

  const onSubmit = (e) => {
    e.preventDefault();
    destroy(route("posts.destroy", post), {
      onSuccess: () => toast.success("Post Deleted Successfully!"),
    });
  };

 
  useEffect(() => {
    toast.success(`Post ID: ${post.id}`);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="w-full max-w-lg p-6 bg-white/20 backdrop-blur-md rounded-2xl shadow-xl transition-all duration-300 hover:bg-white/30">
        <h3 className="text-2xl font-semibold text-gray-200 text-center">
          {new Date(post.created_at).toLocaleString()}
        </h3>
        <p className="mt-4 text-lg text-gray-300 text-center">{post.body}</p>

        {/* Buttons Section */}
        <div className="flex justify-between items-center mt-6">
          <form onSubmit={onSubmit}>
            <button
              type="submit"
              className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition"
              disabled={processing}
            >
              {processing ? "Deleting..." : "Delete"}
            </button>
          </form>

          {/* Update button triggers the modal */}
          <Link 
           href={`/posts/${post.id}/edit`}
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
          >
            Update
          </Link>
        </div>
      </div>

    </div>
  );
}

export default ShowSinglePage;
