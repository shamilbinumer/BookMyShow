import schema from './user.model.js';
export function addTask(req,res){
    const {...movie}=req.body
    console.log(req.body);

    res.status(201).send(schema.create({...movie}));
    console.log(req.body);
    res.end();
}
export async function getTask(req,res){
    let Movie=await schema.find();
    console.log(Movie);
    res.status(200).send(Movie)
}
export async function getDetails(req,res){
    const{id}=req.params;
    console.log(id);
    let Movie=await schema.findOne({_id:id})
    console.log(Movie);
    res.status(200).send(Movie)
}

export async function delMovie(req,res){
    const {id}=req.params;
    console.log(id);
    const data=schema.deleteOne({_id:id})
    data.then((resp)=>{
        res.status(200).send(resp)
    }).catch((error)=>{
        res.status(404).send(error)
    })
}

export async function editMovie(req, res) {
    const {id}=req.params;
    try{
        const value=await schema.findOne({_id:id});
        res.status(200).send(value);
    }catch(error){
        res.status(404).send(error);
    }
}
export async function edit(req, res) {
    const { id } = req.params;
    console.log(id);
    const { ...movie } = req.body;
    await schema.updateOne({ _id: id }, { $set: { ...movie } });
    res.status(201).send("updated")
}

export function addUser(req,res){
    try {
        const {user,password}=req.body;
        if(!(user&&password))
        return res.status(404).send("Fields are empty")
    
    } catch (error) {
        
    }
}
