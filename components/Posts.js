import React, { useEffect, useState } from "react";
import Post from "./Post";
import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { db } from "@/firebase";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    return onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );
  }, [db]);

  return (
    <div>
      {posts.length <= 0 && (
        <div className="mt-5">
          <img
            className="h-72 w-84 mx-auto"
            src="https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/1kutzil5lj0nvfsf_1596544016.jpeg"
          />
        </div>
      )}

      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  );
};

export default Posts;
