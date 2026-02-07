import './Input.css'
export function Input(){
    return(
       <div className = "input-field">
            <input placeholder = "Enter name:" type="text" />
            <input placeholder = "Enter Password:" type="password" />
            <div>
                <button>Login</button>
                <button>Signup</button>
            </div>
        </div> 
    );
}