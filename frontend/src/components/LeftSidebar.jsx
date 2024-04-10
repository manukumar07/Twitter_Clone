import React from "react";
import { CiHome } from "react-icons/ci";
import { CiHashtag } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { IoMdLogOut } from "react-icons/io";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
  return (
    <>
      <div className="w-[20%]">
        <div>
          <div>
            <img
              className="ml-5"
              width={"35px"}
              src="https://img.freepik.com/free-vector/twitter-new-2023-x-logo-white-background-vector_1017-45422.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1712361600&semt=ais"
              alt="twitter-logo"
            ></img>
          </div>
          <div className="my-4">
            <Link
              to="/"
              className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full"
            >
              <div>
                <CiHome size={"24px"} />
              </div>
              <h1 className="font-bold text-lg ml-2">Home</h1>
            </Link>
            {/* // */}
            <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
              <div>
                <CiHashtag size={"24px"} />
              </div>
              <h1 className="font-bold text-lg ml-2">Explore</h1>
            </div>
            {/* // */}
            <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
              <div>
                <IoIosNotificationsOutline size={"24px"} />
              </div>
              <h1 className="font-bold text-lg ml-2">Notifications</h1>
            </div>
            {/* // */}
            <Link
              to="/profile"
              className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full"
            >
              <div>
                <CiUser size={"24px"} />
              </div>
              <h1 className="font-bold text-lg ml-2">Profile</h1>
            </Link>
            {/* // */}
            <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
              <div>
                <CiBookmark size={"24px"} />
              </div>
              <h1 className="font-bold text-lg ml-2">Bookmarks</h1>
            </div>
            {/* // */}
            <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
              <div>
                <IoMdLogOut size={"24px"} />
              </div>
              <h1 className="font-bold text-lg ml-2">Logout</h1>
            </div>
            {/* // */}
            <button className="px-4 py-2 border-none text-md bg-[#1098F0] w-full rounded-full text-white font-bold">
              Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSidebar;
