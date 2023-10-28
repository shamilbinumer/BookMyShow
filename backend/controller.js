import schema from './user.model.js'
export function addTask(req,res){
    const {...movie}=req.body
    console.log(req.body);

    res.status(201).send(schema.create({...movie}));
    console.log(req.body);
    res.end();
}