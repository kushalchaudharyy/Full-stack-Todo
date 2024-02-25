import { useState } from "preact/hooks";
import { todosAtom } from "./store/atoms/todos";
import { useRecoilValue, useSetRecoilState, RecoilRoot } from 'recoil'
import './sty.css'
export function CreateTodo(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return (
        <div id="form">
        <input style={{
            padding:10, margin:10
        }} type="text"placeholder="Title" onChange={function(e){
            const value = e.target.value;
            setTitle(value);
        }} /> <br />

        <input style={{
            padding:10, margin:10, width:300
        }} type="text"placeholder="Desription" onChange={function(e){
            const value = e.target.value;
            setDescription(value);
        }} /> <br />

        <button style={{
            padding:10, margin:10
        }} onClick={()=>{
            fetch('http://localhost:3000/todo',{
            method:"POST",
            body: JSON.stringify({
                title : title,
                description : description
            }),
            headers:{
                "Content-type" :"application/json"
            }
            })
            .then(async  function(res){
                const json = await res.json();
                alert("Todo added");
            })
        }} >Add Todo</button>
      
        </div>
    )
}