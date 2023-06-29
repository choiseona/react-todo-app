//화면을 가운데에 정렬시켜 주며, 앱 타이틀(일정 관리)을 보여줌
//children으로 내부 JSX를 props로 받아 와서 렌더링해 줌

import './TodoTemplate.scss';

const TodoTemplate = ({ children }) => {
  return (
    <div className='TodoTemplate'>
      <div className='app-title'>To Do List</div>
      <div className='content'>{children}</div>
    </div>
  )
}

export default TodoTemplate;