import React from "react";
import { useState, } from "react";
import axios from "axios";

const Quote = () => {
  const [quotes, setQuotes] = useState([""]);

  const fetchUsers = async () => {
    const response = await axios.get("https://api.kanye.rest");
    setQuotes(response.data.quote);
  };

  return (
    <div>
      <div className="mt-16 mb-8">
  <a href="#_" className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group" onClick={fetchUsers}>
    <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
    <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
    <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
    <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
    <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
    <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
    <span className="relative mt-1 mb-1">Kanye Once Said</span>
  </a>
  <h1 className="mb-3 mt-12 text-2xl text-white">
    {quotes}
  </h1>
</div>

    </div>
  );
};

export default Quote;
