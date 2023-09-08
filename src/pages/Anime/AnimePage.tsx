import React from "react";
import { Link } from "react-router-dom";

const AnimePage = () => {
   return (
      <div className="flex flex-col items-center mt-[10%]">
         <h1 className="text-6xl p-5 text-gray">Ooops!</h1>
         <h2 className="text-2xl p-5 text-gray">Anime Page in Construction</h2>
         <Link to="/">
            <button className="btn btn-primary">Back to Home</button>
         </Link>
      </div>
   )
};

export default AnimePage;