import React, { useState} from "react";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { RxCaretDown, RxHamburgerMenu } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import Autosuggest from "react-autosuggest";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import "./Navbar.css";

const products = ["Black Grown", "Deshi bridal sharee", "Jamdani sharee"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchBoxOpen, setSearchBoxOpen] = useState(false);
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const handleSuggestionSelected = (event, { suggestion }) => {
    console.log("Selected suggestion:", suggestion);
  };

  const getSuggestions = (inputValue) => {
    const inputValueLower = inputValue.toLowerCase();
    const filteredProducts = products.filter((product) =>
      product.toLowerCase().includes(inputValueLower)
    );
    return filteredProducts;
  };

  const renderSuggestion = (suggestion) => <div>{suggestion}</div>;

  const inputProps = {
    value,
    onChange: handleChange,
    placeholder: "Type a product name",
    className: " focus:outline-none  text-2xl p-2 bg-transparent",
    style: {
      width: "1400px",
    },
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div class="container mx-auto lg:py-2 sm:py-0">
      {/* <nav class="flex justify-between"
        <div class="block lg:flex items-center gap-3 space-x-20">
          <div class="hidden lg:block">
            <img
              src="https://sportsapi.selopia.com/uploads/images/general-setting/1684070710.png"
              width={150}
              height={150}
              alt="Logo"
            />
          </div>

          <ul class="hidden sm:hidden md:flex items-center gap-10 ">
            <li>
              <a href="" class="common_font_style">
                Home
              </a>
            </li>
            <li class="flex items-center showingItem relative mt-1" >
              <a href="" class=" common_font_style  ">
                Pages
              </a>
              <span class="">
                <RxCaretDown />
              </span>
              <ul class="space-y-2 text-sm common_font_style px-4 py-4 hoverPage">
                <li>
                  <a href="" class="text-gray-700">
                    Womens zone
                  </a>
                </li>

                <li>
                  <a href="" class="text-gray-700">
                    Baby Shop
                  </a>
                </li>

                <li>
                  <a href="" class="text-gray-700">
                    Official women products
                  </a>

                  <a href="" class="text-gray-700">
                    Women party ware
                  </a>
                </li>

                <li>
                  <a href="" class="text-gray-700">
                    Women Traditional product
                  </a>
                </li>
              </ul>
            </li>

            <li class="flex items-center showingItem1 relative mt-1" >
              <a href="" class=" common_font_style  ">
                Shop
              </a>
              <span class="">
                <RxCaretDown />
              </span>
              <ul class="space-y-2 text-sm common_font_style px-4 py-4 hoverPage1">
                <li>
                  <a href="" class="text-gray-700 hover:text-gray-900">
                    Womens zone
                  </a>
                </li>

                <li>
                  <a href="" class="text-gray-700 hover:text-gray-900">
                    Baby Shop
                  </a>
                </li>

                <li>
                  <a href="" class="text-gray-700  hover:text-gray-900">
                    Official women products
                  </a>

                  <a href="" class="text-gray-700 hover:text-gray-900">
                    Women party ware
                  </a>
                </li>

                <li>
                  <a href="" class="text-gray-700 hover:text-gray-900">
                    Women Traditional product
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="" class="common_font_style ">
                Portfolio
              </a>
            </li>
            <li>
              <a href="" class="py-4 px-2 common_font_style ">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div class="hidden lg:flex items-center gap-3">
          <AiOutlineHeart size={22} />
          <AiOutlineShoppingCart size={22} />
          <AiOutlineUser size={22} />
          <AiOutlineSearch
            size={22}
            onClick={() => {
              setSearchBoxOpen(!searchBoxOpen);
            }}
          />
        </div>
      </nav> */}

<div className="hidden lg:grid lg:grid-cols-12">
              <div className="col-span-9">
                  <div className="grid grid-cols-12">
                     <div className="hidden lg:block  col-span-3 pb-3">
                     <img
              src="https://sportsapi.selopia.com/uploads/images/general-setting/1684070710.png"
              className="w-full h-1/2 "
              alt="Logo"
            />
                     </div>
                     <div className="col-span-9 place-items-center py-5">
                     <ul class="hidden sm:hidden md:flex items-center gap-10 ">
            <li>
              <a href="" class="common_font_style">
                Home
              </a>
            </li>
            <li class="flex items-center showingItem relative mt-1" >
              <a href="" class=" common_font_style  ">
                Pages
              </a>
              <span class="">
                <RxCaretDown />
              </span>
              <ul class="space-y-2 text-sm common_font_style px-4 py-4 hoverPage">
                <li>
                  <a href="" class="text-gray-700">
                    Womens zone
                  </a>
                </li>

                <li>
                  <a href="" class="text-gray-700">
                    Baby Shop
                  </a>
                </li>

                <li>
                  <a href="" class="text-gray-700">
                    Official women products
                  </a>

                  <a href="" class="text-gray-700">
                    Women party ware
                  </a>
                </li>

                <li>
                  <a href="" class="text-gray-700">
                    Women Traditional product
                  </a>
                </li>
              </ul>
            </li>

            <li class="flex items-center showingItem1 relative mt-1" >
              <a href="" class=" common_font_style  ">
                Shop
              </a>
              <span class="">
                <RxCaretDown />
              </span>
              <ul class="space-y-2 text-sm common_font_style px-4 py-4 hoverPage1">
                <li>
                  <a href="" class="text-gray-700 hover:text-gray-900">
                    Womens zone
                  </a>
                </li>

                <li>
                  <a href="" class="text-gray-700 hover:text-gray-900">
                    Baby Shop
                  </a>
                </li>

                <li>
                  <a href="" class="text-gray-700  hover:text-gray-900">
                    Official women products
                  </a>

                  <a href="" class="text-gray-700 hover:text-gray-900">
                    Women party ware
                  </a>
                </li>

                <li>
                  <a href="" class="text-gray-700 hover:text-gray-900">
                    Women Traditional product
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="" class="common_font_style ">
                Portfolio
              </a>
            </li>
            <li>
              <a href="" class="py-4 px-2 common_font_style ">
                Blog
              </a>
            </li>
                     </ul>
                     </div>
                  </div>
              </div>
              <div className="hidden lg:block lg:col-span-3 py-5 ">
             <div className="flex justify-end gap-5">
             <AiOutlineHeart size={22} className="" />
          <AiOutlineShoppingCart size={22} className=""  />
          <AiOutlineUser size={22} className="" />
          <AiOutlineSearch
          className=""
            size={22}
            onClick={() => {
              setSearchBoxOpen(!searchBoxOpen);
            }}
          />
             </div>
              </div>
          </div>

      {searchBoxOpen && (
        <Rodal
          visible={searchBoxOpen}
          onClose={() => setSearchBoxOpen(!searchBoxOpen)}
          animation="slideDown"
          customStyles={{
            height: "auto",
            bottom: "auto",
            width: "100%",
            top: "10%",
            transform: "translateY(-50%)",
          }}
        >
          <div class=" bg-white p-10  container mx-auto ">
            <p class="text-sm text-slate-300">What are you Looking For ?</p>
            <form>
              <div class="mb-4 flex items-center border-b">
                <div>
                  <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={({ value }) =>
                      setSuggestions(getSuggestions(value))
                    }
                    onSuggestionsClearRequested={() => setSuggestions([])}
                    onSuggestionSelected={handleSuggestionSelected}
                    getSuggestionValue={(suggestion) => suggestion}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps}
                  />
                </div>

                <FiSearch
                  class="ml-2 rounded-lg  p-2"
                  size={50}
                  color={"gray"}
                />
              </div>
            </form>
          </div>
        </Rodal>
      )}
      <div class="md:hidden mobile_device py-0">
        <div>
          <img
            src="https://sportsapi.selopia.com/uploads/images/general-setting/1684070710.png"
            alt="Logo"
            class="h-10 w-20 mr-2"
          />
        </div>
        <div>
          <RxHamburgerMenu
            onClick={toggleMenu}
            className={`cursor-pointer  focus:outline-none {isOpen && 'hidden'}`}
            size={30}
          />
        </div>
      </div>
      <div className={isOpen ? "block" : "hidden"}>
        <div class="h-screen w-80 float-right mr-3 bg-slate-400">
          <ul class="common_font_style py-5 px-5 ">
            <li class="active">
              <a href="index.html" class="block text-sm  py-1 font-semibold ">
                Home
              </a>
            </li>
            <li>
              <a href="#services" class="block text-sm  py-1">
                Services{" "}
              </a>{" "}
            </li>
            <li>
              <a href="#about" class="block text-sm  py-1 ">
                About
              </a>
            </li>
            <li>
              <a href="#contact" class="block text-sm  py-1 ">
                Contact Us
              </a>
            </li>
          </ul>
          <div class="flex px-2">
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none  focus:shadow-outline"
              type="text"
              placeholder="Search product"
            />
            <FiSearch
              class=" mt-3 ml-1 rounded-lg "
              size={25}
              color={"black"}
            />
          </div>
          <div class="flex items-center justify-center mt-5 gap-3 ">
            <AiOutlineHeart size={22} />
            <AiOutlineShoppingCart size={22} />
            <AiOutlineUser size={22} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
