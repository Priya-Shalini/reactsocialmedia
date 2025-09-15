import React, { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "./Store/post-list-store";

const PostList = () => {
  const { postList } = useContext(PostListData);

  if (postList.length === 0) {
    return <p className="m-3">No posts available. Create one!</p>;
  }

  return (
    <div className="d-flex flex-column align-items-center">
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;

