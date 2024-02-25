
const express = require('express')
const app = express();
const {createTodo, updateTodo} = require('./types.js')
const {todo} = require('./db.js')
const cors = require('cors');
app.use(express.json())
app.use(cors())
    app.post('/todo',async (req, res)=>{
        const payload = req.body;
        console.log(payload)
        console.log("req")
    /*const parsePayload = createTodo.safeparse(payload);
        if(!parsePayload.success){
            res.status(411).json({
                msg:"You sent wrong inputs"
            })
            return;
        }*/
        await todo.create({
            title : payload.title,
            description : payload.description,
            completed: false
        })
        res.json({
            msg:"Todo created successfully"
        })
    })

app.get('/todos',async (req, res)=>{
    const todos = await todo.find({})
    res.json({todos})
    
})

app.put('/completed',async (req, res)=>{
    try {
        const updatePayload = req.body;
        console.log(updatePayload)
        // Validate updatePayload using updateTodo schema (optional)
    
       const updateTodo= await todo.findOneAndUpdate(
          { _id: updatePayload._id },
          { $set: { completed: true } },
          { new: true }
        );
    
        res.json({ msg: 'Marked as done', updateTodo });
      } catch (error) {
        console.error('Error updating todo:', error);
        res.status(500).json({ error: 'An error occurred while updating the todo' });
      }
    })

app.delete('/delete', async(req, res)=>{
    const id = req.body._id
    await todo.deleteOne({_id: id})
    res.json({msg:"Todo deleted successfully"})
})

app.listen(3000)