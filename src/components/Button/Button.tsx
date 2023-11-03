import "./Button.css";

export type ButtonPropsType = {
  postTitle: string;
  postBody: string;
  addNewPost: (postTitle: string, postBody: string) => void;
  clearInputs: () => void;
};

export function Button(props: ButtonPropsType) {
  const addNewPostHandler = () => {
    if (props.postTitle.trim() && props.postBody.trim()) {
      props.addNewPost(props.postTitle, props.postBody);
      props.clearInputs();
    } else {
      // ? сюда реакцию на проверочку засунуть
      alert("поля обязательны");
      props.clearInputs();
    }
  };

  return (
    <div>
      <button onClick={addNewPostHandler} className="add__btn">
        Добавить
      </button>
    </div>
  );
}
