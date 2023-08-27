"use client";
import { readJsonFile } from "@/utils/reader";
import { Search } from "@/components/Search";
import Header from "@/components/Header";
import { useEffect } from "react";


export default function Home() {
  
  const handleSubmit = () => {
    const websiteName = document.getElementById("website");
    const websiteType = document.getElementById("type");
    const websiteDesc = document.getElementById("desc");

  
    const elementsArray = [
      { id: "website", value: websiteName.value },
      { id: "type", value: websiteType.value },
      { id: "desc", value: websiteDesc.value }
    ];
    

 
   
    // TODO Add theese to json file
    
  };
  

  return (
    <div>
        <title>Arkhio</title>
      <Header />
      <div className="inputs">
        <div className="grid h-screen place-items-center">
          <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12 h-3/4">
            <h1 className="text-xl font-semibold">
              <span className="font-normal">Add a new website to </span>
              Arkhio
            </h1>
            <form className="mt-6" id="myForm">
              <div className="flex justify-between gap-3">
                <span className="w-1/2">
                  <label className="block text-xs font-semibold text-gray-600 uppercase">
                    Website URL
                  </label>
                  <input
                    id="website"
                    type="url"
                    placeholder="www.arkhio.com"
                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    required
                  />
                </span>
                <span className="w-1/2">
                  <label className="block text-xs font-semibold text-gray-600 uppercase">
                    Type
                  </label>
                  <select
                    name="type"
                    id="type"
                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  >
                    <option value="0">Select</option>
                    <option value="1">UI</option>
                    <option value="2">Code</option>
                    <option value="3">Design</option>
                    <option value="4">Icon</option>
                    <option value="5">Extension</option>
                  </select>
                </span>
              </div>
              <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
                Description
              </label>
              <input
                id="desc"
                type="text"
                placeholder="Arkhio is a source library for developers."
                autoComplete="email"
                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
              />

              <button
                id="submit-button"
                type="submit"
                className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
