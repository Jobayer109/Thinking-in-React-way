import CommentBox from "./CommentBox";
import { currentDay, dateFormat } from "./Date";
import TagList from "./TagList";
import TodoList from "./TodoList";

const Card = (task) => {
  return (
    <div>
      <div className="date">
        <h3>
          {currentDay(task.createdAt)}, {dateFormat(task.createdAt)}
        </h3>
        <p>{task.subtitle}</p>
      </div>
      <div className="tags__list">
        <ul>
          {task.tags.map((tag) => (
            <TagList key={tag.id} {...tag} />
          ))}
        </ul>
      </div>
      <div className="horizontal__line"></div>
      <div className="comment__box">
        <p>People who are linked</p>
        {task.comments.map((comment) => (
          <CommentBox key={comment.id} {...comment} />
        ))}
      </div>
      <div className="todo__list">
        {task.tasks.map((todo) => (
          <TodoList key={todo.id} {...todo} />
        ))}
      </div>
    </div>
  );
};

export default Card;
