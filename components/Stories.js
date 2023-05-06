import React, { useEffect, useState } from "react";
import MOCK_DATA from "../MOCK_DATA.json";
import Story from "./Story";
import { useSession } from "next-auth/react";

const Stories = () => {
  const [suggestion, setSuggestion] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    setSuggestion(MOCK_DATA);
  }, []);

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {/* rendered list of story */}

      {
        session && (
          <Story img={session?.user?.image} username={session?.user?.username} />
        )
      }

      {suggestion.map((profile) => {
        return (
          <Story
            key={profile.id}
            img={profile.avatar}
            username={profile.username}
          />
        );
      })}
    </div>
  );
};

export default Stories;
