import React, { useEffect, useState } from "react";
import MOCK_DATA from "../MOCK_DATA.json";


const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    setSuggestions(MOCK_DATA.splice(0,5));
  }, []);

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
        </div>
        {
          suggestions.map(profile => (
            <div key={profile.id} className="flex items-center justify-between mt-3">
              <img src={profile.avatar} alt="suggested profile" className="w-10 h-10 rounded-full border p-[2px]" />
              <div className="flex-1 ml-4">
                <h2 className="font-semibold text-sm ">{profile.username}</h2>
                <h3 className="text-xs text-gray-400">Works at {profile.company.name}</h3>
                </div>
                <button className="text-blue-500 text-sm font-semibold">Follow</button>

            </div>
          ))
        }
    </div>
  )
}

export default Suggestions