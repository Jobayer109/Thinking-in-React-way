const TodoList = (todo) => {
  return (
    <div key={todo.id}>
      <h5>{todo.name}</h5>
      <p>
        <small>{todo.status}</small>
      </p>
      <p>{todo.comment}</p>
    </div>
  );
};

export default TodoList;
