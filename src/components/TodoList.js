import TodoListItem from "./TodoListItem";
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="TodoList">
      {todos.map(todo => (
        //map을 사용하여 컴포넌트로 변환할 때는 key props를 전달해 줘야 함
        //여러 종류의 값을 전달해야 할 때는 객체 통재로 전달하는게 성능 최적화할 때 편리함
        <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />
      ))}
    </div>
  )
}

export default TodoList;