import Input from "./Input.jsx";

export default function NewProject(){
    return(
        <div>
            <menu>
                <li><button> Cancle </button></li>
                <li><button> Save </button></li>
                
            </menu>
            <div>
                <Input label="Title"/>
                <Input label="Description"/>
                <Input label="Due Date"/>
            </div>
        </div>
    );
}