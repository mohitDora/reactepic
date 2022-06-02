import React from "react";
import "./index.css"
function getdata(){
    const list=localStorage.getItem("todolist");
    if(list){
        return JSON.parse(list);
    }
    else{
        return [];
    }
}

export default function Todo() {
    const [inputdefault, changeinput] = React.useState("");
    function updateinput(e) {
        changeinput(e.target.value);
    }
    const [task, functask] = React.useState(getdata());
    const [editit,funceditid]=React.useState("");
    const [toggle,settoggle]=React.useState(false);
    function additem() {
        if (!inputdefault) {
            alert("please Enter something")
        }
        else if(inputdefault && toggle){
            functask(
                task.map((item)=>{
                    if(item.idnum===editit){
                        return{...item,name:inputdefault}
                    }
                    return item
                })
            )
            changeinput("");
            funceditid(null);
            settoggle(false)
        }
        else {
            const newData = {
                name: inputdefault,
                idnum: new Date().getTime().toString()
            }
            functask([...task, newData]);
            changeinput("")
        }
    }
  
    const alltask = task.map(({ name, idnum }) => {
        return (
            <div className="taskcon">
                <div className="taskname" key={idnum}>{name}</div>
                <div className="btndiv">
                    <div className="taskicon"><i class="fas fa-edit" onClick={()=>edititem(idnum)}></i></div>
                    <div className="taskicon"><i class="fas fa-trash" onClick={()=>deleteitem(idnum)}></i></div>
                </div>
            </div>
        )
    })
    function clearall() {
        functask([])
    }
    function deleteitem(index){
        const newlist=task.filter((item)=>{
            return item.idnum !== index
        })
        functask(newlist)
    }
    function edititem(index){
        const newlist1=task.find((item)=>{
            return item.idnum == index
        })
        changeinput(newlist1.name);
        funceditid(index);
        settoggle(true)
    }
    React.useEffect(()=>{
        localStorage.setItem("todolist",JSON.stringify(task))
    },[task])
    return (
        <div className="formcon">
            <h1>Todo List</h1>
            <div className="tag">Organize your work and life</div>
            <div className="inputcon">
                <input type="text" value={inputdefault} onChange={updateinput} />
                <div className="icon">
                    {toggle? <i class="fas fa-edit" onClick={additem}></i>: <i class="fas fa-plus" onClick={additem}></i>}
                   
                </div>
            </div>
            <div className="task">
                {alltask}
            </div>
            <div className="btn" onClick={clearall}>Button</div>
        </div>
    )
}