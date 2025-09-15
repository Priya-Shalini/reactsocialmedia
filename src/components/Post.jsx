import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { PostList } from "./Store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card m-3 post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            style={{ cursor: "pointer" }}
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map(tag => (
          <span key={tag} className="badge text-bg-primary hashtag m-1">
            {tag}
          </span>
        ))}
        <div className="alert alert-success reactions mt-2" role="alert">
          This post has been reacted by {post.reactions} people.
        </div>
      </div>
    </div>
  );
};

export default Post;
