import { Head, useForm, usePage } from "@inertiajs/react";
import toast from 'react-hot-toast';

const CreatePostPage = () => {
  const {component} = usePage();

  const { data, setData, post, processing, errors } = useForm({
    body: "",
  });

  const handleChange = (e) => {
    setData(e.target.name, e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    post("/posts", {
      onSuccess: () => toast.success('Post Created'),
    });
  };
  return (
   <>
      <Head title={`${component} - LRT  `}/>
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white/20 backdrop-blur-md rounded-2xl shadow-lg transition-all duration-300 p-8 max-w-lg w-full">
        <h2 className="text-2xl font-semibold text-gray-100 text-center">
          Create a New Post
        </h2>

        <form onSubmit={onSubmit} className="mt-6 space-y-6">
          {/* Post Body Field */}
          <div>
            <label
              htmlFor="body"
              className="block text-lg font-medium text-gray-100"
            >
              Post Body
            </label>
            <textarea
              id="body"
              name="body"
              placeholder="Write your post here..."
              rows={10}
              value={data.body}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
            {errors.body && (
              <p className="text-red-500 text-sm mt-2">{errors.body}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition duration-300"
              disabled={processing}
            >
              {processing ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default CreatePostPage;
