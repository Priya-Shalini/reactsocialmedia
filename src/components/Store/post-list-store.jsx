import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [
        {
          id: Date.now(),
          title: action.payload.title,
          body: action.payload.body,
          reactions: action.payload.reactions,
          tags: action.payload.tags,
        },
        ...currentPostList,
      ];
    case "DELETE_POST":
      return currentPostList.filter((post) => post.id !== action.payload.postId);
    default:
      return currentPostList;
  }
};

const PostListProvider = ({ children }) => {
  const [postList, dispatch] = useReducer(postListReducer, []);

  const addPost = (userId, title, body, reactions, tags) => {
    dispatch({
      type: "ADD_POST",
      payload: { userId, title, body, reactions, tags },
    });
  };

  const deletePost = (postId) => {
    dispatch({ type: "DELETE_POST", payload: { postId } });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;