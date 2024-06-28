import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Eatsy.png";
import { LiaHomeSolid, LiaShoppingCartSolid } from "react-icons/lia";
import { TfiHelpAlt } from "react-icons/tfi";
import { CiLogin } from "react-icons/ci";
const PageHeader = () => {
  const [user, setUser] = useState("login");
  return (
    <>
      <div className="flex items-center justify-between px-24 py-2 shadow-xl relative">
        <div className="w-1/4 flex justify-start items-center">
          <img className="h-14 w-10" src={logo} alt="logo" />
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <ul className="flex gap-9 items-center mx-2">
            <li
              key="1"
              className="text-md text-gray-700  font-mono hover:text-orange-600"
            >
              <Link className="flex gap-1 items-center " to="/">
                <LiaHomeSolid /> Home
              </Link>
            </li>
            <li
              key="2"
              className="text-md text-gray-700  font-mono hover:text-orange-600 flex gap-1 items-center "
            >
               <Link className="flex gap-1 items-center " to="/cart">
               <LiaShoppingCartSolid /> Cart
               </Link>
              
            </li>
            <li
              key="3"
              className="text-md text-gray-700  font-mono hover:text-orange-600"
            >
              <Link to="/about" className="flex gap-1 items-center ">
                <TfiHelpAlt /> Help
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-1/4 flex justify-end items-center">
          <div className=" bottom-6 right-16 ">
            <button
              className="text-md text-gray-700  font-mono hover:text-orange-600  flex gap-1 items-center"
              onClick={() =>
                user == "login" ? setUser("logout") : setUser("login")
              }
            >
              <CiLogin />
              {user}
            </button>
          </div>{" "}
        </div>
      </div>
      <div className="flex justify-between items-center"></div>
    </>
  );
};

export default PageHeader;
