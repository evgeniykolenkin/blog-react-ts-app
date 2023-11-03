import { PostListType } from "../../App";
import "./PostsArea.css";

export type NewPostPropsType = {
  posts: Array<PostListType>;
};

export function PostsArea(props: NewPostPropsType) {
  return (
    <div className="posts__area">
      <h2>Лента</h2>
      <ul className="posts__list">
        {props.posts.map((post) => {
          return (
            <li key={post.id} className="post__list-item">
              <div>{post.userId}</div>
              <h3>{post.title}</h3>
              <div>{post.body}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
