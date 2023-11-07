import "./PostsArea.css";
import { PostListType } from "../../App";
import { IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";

export type NewPostPropsType = {
  posts: Array<PostListType>;
  deletePostHandler: (id: string | number) => void;
};

export function PostsArea(props: NewPostPropsType) {
  return (
    <div className="posts__area">
      <h2>Лента</h2>
      <ul className="posts__list">
        {props.posts.map((post) => {
          //!
          // ? это я пытаюсь сделать каждому посту, пришедшему с API,
          // ? уникальную дату, но это, походу, нереально хддд
          const parseDate = () => {
            const date = new Date();
            const day = date.getDate().toString().padStart(2, "0");
            const month = (date.getMonth() + 1).toString().padStart(2, "0");
            const fullYear = date.getFullYear().toString();
            const hours = date.getHours().toString().padStart(2, "0");
            const minutes = date.getMinutes().toString().padStart(2, "0");
            const seconds = date.getSeconds().toString().padStart(2, "0");
            return `Дата: ${day}.${month}.${fullYear} ${hours}:${minutes}:${seconds}`;
          };
          //!

          return (
            <li key={post.id} className="post__list-item">
              <div>
                {typeof post.userId === "number" ? parseDate() : post.userId}
              </div>
              <h3>{post.title}</h3>
              <div>{post.body}</div>
              <div className="icon__btn">
                <IconButton
                  onClick={() => props.deletePostHandler(post.id)}
                  aria-label="delete"
                  size="large"
                  color="error"
                >
                  <Delete />
                </IconButton>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
