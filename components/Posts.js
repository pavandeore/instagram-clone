import React from "react";
import Post from "./Post";

const posts = [
  {
    id: 1,
    username: "one",
    userImg: "https://avatars.githubusercontent.com/u/61040146",
    img: "https://avatars.githubusercontent.com/u/61040146",
    caption: "YOO what is this",
  },
  {
    id: 2,
    username: "two",
    userImg: "https://avatars.githubusercontent.com/u/61040146",
    img: "https://avatars.githubusercontent.com/u/61040146",
    caption: "YOO what is this",
  }
];

const Posts = () => {
  return (
    <div>
      {posts.map((post) => {
        return(
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />);
      })}

      <Post />
    </div>
  );
};

export default Posts;
