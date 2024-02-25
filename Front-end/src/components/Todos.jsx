import './sty.css'
export function Todos({todos}){
    return <>
    {todos.map((todo)=>{
        return <div id="todo">
        <h1 style={{marginTop:20, paddingLeft:10, paddingRight:10}}>{todo.title}</h1>
        <h2 style={{marginTop:20, paddingLeft:10, paddingRight:10}}>{todo.description}</h2>
            <button style={{marginLeft:13, marginBottom:10, marginRight:13}} onClick={()=>{
                fetch(`http://localhost:3000/completed`, {
                    method: "PUT",
                    body: JSON.stringify({
                        _id : todo._id
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                .then(response => response.json())
                .then(data => {
                    console.log("Todo updated successfully:", data);
                    // Handle success, if needed
                })
            }}>
                {todo.completed== true ? "✅Completed" : "▢Mark as done"}</button>
                <button style={{marginLeft:13, marginBottom:10, marginRight:13}} onClick={()=>{
                fetch(`http://localhost:3000/delete`, {
                    method: "DELETE",
                    body: JSON.stringify({
                        _id : todo._id
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                .then(response => response.json())
                .then(data => {
                    console.log("Todo updated successfully:", data);
                    // Handle success, if needed
                })
            }}>
                Delete Todo</button>
        </div>
    })}
    </>
}