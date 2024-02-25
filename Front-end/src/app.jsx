import { useEffect, useMemo, useState } from 'preact/hooks'
import './app.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
import { todosAtom } from "./store/atoms/todos";
import { useRecoilValue, useSetRecoilState, RecoilRoot } from 'recoil'

export function App() {
  const [todos, setTodos] = useState([])
  useEffect(()=>{fetch('http://localhost:3000/todos')
  .then(async function(res){
    const json = await res.json();
    setTodos(json.todos);
    console.log("render")
  })
}, [])
  

  return (
    <>
    <RecoilRoot>
      <CreateTodo></CreateTodo>
       <Todos todos = {todos}></Todos>
       </RecoilRoot>
    </>
  )
}
