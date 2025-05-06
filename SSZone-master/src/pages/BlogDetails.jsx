import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ins from "../assets/image/ins.jpg";
import related from "../assets/image/related.jpg";
import { useForm } from "react-hook-form";
import BlogCard from "../componant/BlogCard";
import { FaLongArrowAltRight } from "react-icons/fa";
import {
  CiFacebook,
  CiLinkedin,
  CiTwitter,
  CiBasketball,
} from "react-icons/ci";

const BlogDetails = () => {
  // const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { blogData, allBlogs } = location.state || {};
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Russell Sprout",
      date: "Apr 24, 2025  10:30 AM",
      comment:
        "Great read for beginners! I finally understand how JavaScript fits in with HTML and CSS. Excited to start coding!",
      avatar: ins,
    },
  ]);

  const handleRelatedBlogClick = (blog) => {
    navigate(`/blogs/${blog.id}`, {
      state: { blogData: blog, allBlogs },
      replace: true,
    });
  };

  if (!blogData) {
    return <div className="text-center py-10">Blog not found</div>;
  }

  const relatedBlogs = allBlogs
    ?.filter((blog) => blog.id !== blogData?.id)
    .slice(0, 3);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const newComment = {
      id: comments.length + 1,
      name: `${data.firstName} ${data.lastName}`,
      date: new Date().toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      }),
      comment: data.comment,
      avatar: ins,
    };

    setComments((prevComments) => [newComment, ...prevComments]);
    reset();
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
      {/* Banner */}
      <div className="w-full h-64 md:h-96 overflow-hidden rounded-xl">
        <img
          src={blogData.image}
          alt={blogData.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-6 mt-6 justify-between">
        {/* Main Column */}
        <div className="bg-white rounded-lg shadow-md flex flex-col gap-5 items-start justify-start w-full md:w-2/3 px-3">
          <h1 className="text-3xl font-bold mb-4">{blogData.title}</h1>
          <p className="text-gray-600 mb-4">{blogData.date}</p>
          <p className="h-1/2">{blogData.about}</p>
          <div className="quote px-4 py-3 bg-gray-100 rounded">
            <h1 className="text-lg font-semibold">
              This blog offers a clear and beginner-friendly introduction to
              JavaScript, making it an excellent starting point for new
              learners.
            </h1>
            <pre className="text-sm text-blue-600 font-serif">Dhna wayle</pre>
          </div>

          <div className="px-2 py-8 flex flex-wrap items-start gap-6">
            <div className="tags flex flex-wrap gap-2">
              <h1 className="font-semibold text-lg">Tags:</h1>
              <button className="py-1 px-2 rounded-md bg-gray-300 text-gray-600">
                Education
              </button>
              <button className="py-1 px-2 rounded-md bg-gray-300 text-gray-600">
                Branding
              </button>
              <button className="py-1 px-2 rounded-md bg-gray-300 text-gray-600">
                JavaScript
              </button>
            </div>
            <div className="socialbtn flex flex-wrap items-center gap-4">
              <h1 className="font-semibold text-lg">Social Network</h1>
              <CiFacebook size={30} />
              <CiLinkedin size={30} />
              <CiTwitter size={30} />
              <CiBasketball size={30} />
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="w-full md:w-1/3 flex flex-col gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold mb-4">Recent Posts</h2>
            <ul className="space-y-6 py-4">
              {[...Array(5)].map((_, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 shadow-md shadow-gray-300 rounded-md p-2"
                >
                  <img
                    src={related}
                    alt="Recent Post"
                    className="w-16 h-16 rounded object-cover"
                  />
                  <div>
                    <p className="text-sm text-gray-500">📅 April 20, 2025</p>
                    <p className="font-medium">
                      Why online learning is the key to career growth
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      {/* Related Blogs section */}
      <div className="mt-12 px-5">
        <h2 className="text-2xl font-bold mb-6">Related Blogs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {relatedBlogs?.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              handleBlogClick={handleRelatedBlogClick}
            />
          ))}
        </div>
      </div>

      {/* Comments & Form */}
      <section className="space-y-6 mt-12 px-5 py-6 bg-gray-50">
        <h2 className="text-2xl font-bold">Comments ({comments.length})</h2>

        {/* Display Comments */}
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="flex gap-4 bg-white p-4 rounded-xl shadow"
          >
            <img
              src={comment.avatar}
              alt="Commenter"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">{comment.name}</p>
              <p className="text-sm text-gray-500">{comment.date}</p>
              <p className="mt-2 text-gray-700">{comment.comment}</p>
            </div>
          </div>
        ))}

        {/* Comment Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-6 rounded-xl shadow space-y-4 w-1/2"
        >
          <h3 className="text-xl font-bold">Leave a Comment</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">First Name</label>
              <input
                {...register("firstName", {
                  required: "First name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                  placeholder: "Enter your First Name",
                })}
                className="w-full rounded border px-3 py-2 placeholder-gray-400"
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm mb-1">Last Name</label>
              <input
                {...register("lastName", {
                  required: "Last name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                  placeholder: "Enter your Last Name",
                })}
                className="w-full rounded border px-3 py-2 placeholder-gray-400"
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs">Last name is required</p>
              )}
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                  placeholder: "Enter your Email",
                })}
                className="w-full border rounded px-3 py-2 placeholder-gray-400"
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label className="block text-sm mb-1">Phone Number</label>
              <input
                {...register("phoneNumber", {
                  required: true,
                  placeholder: "Enter your Phone Number",
                })}
                className="w-full border rounded px-3 py-2 placeholder-gray-400"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-xs">
                  Enter a valid phone number
                </p>
              )}
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm mb-1">Comment</label>
              <textarea
                {...register("comment", {
                  required: "Comment is required",
                  minLength: {
                    value: 10,
                    message: "Comment must be at least 10 characters",
                  },
                  placeholder: "Write your comment here...",
                })}
                className="w-full rounded border  px-3 py-2 h-24 resize-none text-gray-700  placeholder-gray-800"
              ></textarea>
              {errors.comment && (
                <p className="text-red-500 text-xs">{errors.comment.message}</p>
              )}
            </div>
          </div>
          <div className="flex items-center">
            <input
              {...register("agree", { required: true })}
              type="checkbox"
              className="mr-2"
            />
            <label className="text-sm text-gray-700">
              I agree that my data is collected and stored
            </label>
          </div>
          {errors.agree && (
            <p className="text-red-500 text-xs">You must agree to continue</p>
          )}
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Post Comment
          </button>
        </form>
      </section>
    </div>
  );
};

export default BlogDetails;
