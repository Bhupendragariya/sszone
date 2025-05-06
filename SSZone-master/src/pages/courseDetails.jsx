import React, { useEffect, useState } from "react";
import { useLocation, Link, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaTwitter, FaDribbble, FaLinkedin } from "react-icons/fa";
import CourseCard from "../componant/CourseCard";
import arrow from "../assets/image/up_line 1.png";
import video from "../assets/image/video.jpg";
import card from "../assets/image/card.jpg";
import right from "../assets/image/checkmark-circle-02.png";
import avatar from "../assets/image/avatar.png";
import { useCart } from "../context/CartContext";
import all_course from "../assets/Course_Data"
import { MdCurrencyRupee } from "react-icons/md";
import Card from "../componant/Card";
import { toast } from "react-toastify";

const CourseDetails = () => {
  const { addToCart } = useCart()
  const { courseId } = useParams()
  const course = all_course.find((e)=> e.id === Number(courseId))
  if (!course) {
    return (
      <div className="max-w-[1440px] mx-auto py-20 text-center text-red-600 text-xl">
        Course not found.
      </div>
    )
  }

  // const location = useLocation();
  // const data = location.state;
  const [activeTab, setActiveTab] = useState("Overview");

  const courses = [
    {
      image: card,
      duration: "12 weeks",
      title: "Full Stack Web Development",
      description: "Become a proficient full-stack developer with HTML, CSS, JavaScript, React.",
      lessons: 20,
      rating: 4.8,
      price: 4999,
    },
    {
      image: card,
      duration: "8 weeks",
      title: "Frontend Mastery",
      description: "Master frontend development with Tailwind, React, and performance techniques.",
      lessons: 15,
      rating: 4.7,
      price: 3999,
    },
    {
      image: card,
      duration: "12 weeks",
      title: "Full Stack Web Development",
      description: "Become a proficient full-stack developer with HTML, CSS, JavaScript, React.",
      lessons: 20,
      rating: 4.8,
      price: 4999,
    },
  ];

  const reviews = [
    {
      name: "Russell Sprout",
      date: "April 19, 2025 AT 10:47 PM",
      comment: "Great read for beginners! I finally understand how JavaScript fits in with HTML and CSS.",
      rating: 4.5,
      image: "/images/user1.jpg",
    },
    {
      name: "Amelia Pond",
      date: "April 20, 2025 AT 11:00 AM",
      comment: "The examples helped me a lot! Thank you!",
      rating: 5,
      image: "/images/user2.jpg",
    },
    {
      name: "John Smith",
      date: "April 18, 2025 AT 09:15 PM",
      comment: "Good course, but I wish there were more advanced topics.",
      rating: 3.5,
      image: "/images/user3.jpg",
    },
  ];

  const content = {
    Overview: (
      <div className="px-6 md:px-12 my-6">
        <h1 className="text-xl font-bold mb-4">Description</h1>
        <p className="text-gray-600 mb-6">
          Dive into the world of Full Stack Web Development and learn how to build complete, dynamic web applications from start to finish. ...
        </p>
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold">What You Will Learn</h1>
          {[
            "Build responsive websites using HTML, CSS, and JavaScript.",
            "Develop dynamic web applications with front-end frameworks.",
            "Create and manage server-side logic with backend technologies.",
            "Work with databases and perform CRUD operations.",
            "Connect frontend and backend using RESTful APIs.",
            "Deploy full stack applications to live servers.",
            "Understand version control with Git and GitHub.",
            "Gain real-world experience through hands-on projects."
          ].map((item, index) => (
            <p key={index} className="flex items-center gap-2">
              <img src={right} alt="check" className="w-4 h-4" /> {item}
            </p>
          ))}
        </div>
      </div>
    ),
    Curriculum: (
      <div className="px-6 md:px-12 my-6">
        <h2 className="text-xl font-bold mb-4">Course Modules</h2>
        <div className="flex flex-col gap-2 border border-gray-300 max-w-4xl">
          {[
            "Introduction to web development",
            "Frontend Development - HTML, CSS, JS",
            "Frontend Framework - React.js",
            "Version Control with Git & GitHub",
            "Backend Development with Node.js & Express",
            "Databases - MongoDB",
            "User Authentication & Authorization",
            "Deployment & Hosting",
            "Project Work"
          ].map((module, index) => (
            <h2 key={index} className="p-3 border-b flex justify-between items-center">
              {module} <img src={arrow} alt="arrow" className="w-5" />
            </h2>
          ))}
        </div>
      </div>
    ),
    Instructor: (
      <div className="px-6 md:px-12 my-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img src={avatar} alt="Instructor" className="w-40 mx-auto md:mx-0" />
          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-bold">Dylan Meringue</h1>
            <p className="text-blue-500 font-semibold">Back-End Development</p>
            <p className="text-gray-600">This course is designed to give learners a clear and practical understanding of back-end development...</p>
          </div>
        </div>
      </div>
    ),
    Review: (
      <div className="px-6 md:px-12 my-6">
        {reviews.map((review, index) => (
          <div key={index} className="flex flex-col md:flex-row items-start gap-4 mb-6">
            <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
            <div className="flex-1">
              <h1 className="text-lg font-bold">{review.name}</h1>
              <p className="text-sm text-gray-500">{review.date}</p>
              <p className="mt-2 text-gray-700">{review.comment}</p>
              <div className="flex gap-1 mt-2 text-amber-300">
                {[...Array(Math.floor(review.rating))].map((_, i) => (
                  <FaStar key={i} />
                ))}
                {review.rating % 1 !== 0 && <FaRegStarHalfStroke />}
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {/* Banner Image */}
      <div className="p-3">
        <img src={course.image} alt="Course Banner" className="h-[50vh] md:h-[70vh] w-full object-cover rounded" />
      </div>

      {/* Course Info */}
      <div className="relative  ">
        <div className="shadow-lg bg-white px-6 py-4 max-w-4xl md:mx-20 mx-auto rounded-xl -mt-20 md:-mt-28">
          <h1 className="text-2xl font-bold mb-3">{course.title}</h1>
          <div className="flex flex-wrap md:flex-nowrap gap-6">
            <div className="flex-1">
              <h3 className="text-gray-500">Instructor</h3>
              <p className="font-semibold">{course.author}</p>
            </div>
            <div className="flex-1">
              <h3 className="text-gray-500">Category</h3>
              <p className="font-semibold">Online Technique</p>
            </div>
            <div className="flex-1">
              <h3 className="text-gray-500">Review</h3>
              <div className="flex items-center gap-1 text-amber-300">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStarHalfStroke />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-col md:flex-row gap-8 px-6 md:px-12 my-12">
        {/* Left Content */}
        <div className="flex-1">
          <div className="flex gap-4 border-b mb-6 overflow-x-auto">
            {["Overview", "Curriculum", "Instructor", "Review"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 md:px-4 px-3 font-medium ${
                  activeTab === tab
                    ? "border-b-2 border-blue-500 text-blue-500"
                    : "border-transparent text-gray-600 hover:text-blue-500"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div>{content[activeTab]}</div>
        </div>

        {/* Sidebar */}
        <div className="w-full md:w-[400px] flex-shrink-0 shadow-lg p-6 rounded-xl bg-white">
          <img src={video} alt="Demo Video" className="rounded-md mb-6" />
          <div className="flex items-center justify-center mb-4">
            <MdCurrencyRupee className="h-6 w-6" />
            <h2 className="text-2xl font-bold font-[Manrope]">{course.price}</h2>
          </div>

          <button onClick={()=>{
                addToCart(course)
                toast("Added to Cart")
              }}
           className="cursor-pointer w-full bg-blue-700 text-white py-3 rounded-lg mb-6 hover:bg-blue-800">Add To Cart</button>
          <div className="flex flex-col gap-2 text-gray-600">
            <p>✅ 62 hours on-demand video</p>
            <p>✅ Instructor: Dylan Meringue</p>
            <p>✅ Language: English</p>
            <p>✅ Level: Advanced</p>
            <p>✅ Certificate of Completion</p>
            <p>✅ Access on Mobile and TV</p>
          </div>

          <div className="flex items-center gap-3 mt-6">
            <h3 className="font-bold">Share:</h3>
            <Link to="#" className="p-2 bg-gray-300 rounded-full">
              <FaDribbble />
            </Link>
            <Link to="#" className="p-2 bg-gray-300 rounded-full">
              <FaLinkedin />
            </Link>
            <Link to="#" className="p-2 bg-gray-300 rounded-full">
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>

      {/* Recommended Courses */}
      <div className="px-6 md:px-12 my-20 text-center">
        <h2 className="text-blue-500 text-sm">Explore Recommended Courses</h2>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">You Might Also Like</h1>
        <p className="text-gray-600 mb-12">Discover personalized course recommendations curated to match your interests and learning goals.</p>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              image={course.image}
              duration={course.duration}
              title={course.title}
              description={course.description}
              lessons={course.lessons}
              rating={course.rating}
              price={course.price}
            />
          ))}
        </div> */}
        
        <Card all_course={all_course.slice(0,3)}/>
      </div>
    </>
  );
};

export default CourseDetails;
