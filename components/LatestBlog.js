import userData from "@constants/data";

export default function LatestBlog({ blogs }) {
  return (
    <section className="bg-[#F1F1F1] -mt-40 dark:bg-black pb-40">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:pt-40 mx-10">
          <h1 className="text-6xl lg:text-9xl max-w-lg font-bold text-black my-20 dark:text-gray-100 text-center lg:text-left">
            Blog Posts
          </h1>

          <a
            href={`https://medium.com/@${userData.mediumUsername}`}
            target="_blank"
            className="mb-20 md:mb-0 px-8 py-4 rounded-md bg-white shadow-lg text-xl font-semibold flex flex-row space-x-4 items-center dark:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-up-right-square"
              stroke="4"
              strokeWidth="4"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
              />
            </svg>
            <p>View Medium</p>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-10 lg:-mt-10 gap-y-20">
        {blogs && blogs.map((blog, idx) => <BlogCard blog={blog} key="idx" />)}
      </div>
    </section>
  );
}

const BlogCard = ({ blog }) => {
  const date = new Date(blog.pubDate);
  const formattedDate = date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <div className="bg-white drop-shadow-2xl p-5">
      <div className="github-repo">
        <img
          src={blog.thumbnail}
          className="object-cover h-20 w-80 mb-4 rounded-md"
        />
        <h1 className="font-semibold text-lg text-black truncate">
          {blog.title}
        </h1>
        <p className="text-gray-600 text-sm truncate">
          Published on {formattedDate}
        </p>
        <a
          href={blog.link}
          target="_blank"
          className="font-semibold group flex flex-row space-x-2 w-full items-center text-gray-900"
        >
          <p className="text-sm">Read Blog </p>
          <div className="transform group-hover:translate-x-2 transition duration-300">
            &rarr;
          </div>
        </a>
      </div>
    </div>
  );
};
