
 //react is the main library/
 // usestate is the raect hook to store data and update data inside a component*/}
import "./Login.css";
import React, { useState } from "react";    
function Login() {

    const [firstname,setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [mothername,setMothername] =useState("");
    const [fathername,setFathername] = useState("");
    //email is the state variable which is empty,setEmail is used to change the value */}
    const [email, setEmail] = useState("");               
    const [phonenumber,setPhonenumber] = useState("");           
    const [address,setAddress] = useState("");
    const [password, setPassword] = useState("");
    
    

    const handleLogin = (e) => {
        //e.preventDefault is used to prevent page refresh/
        e.preventDefault();

        const nameRegex = /^[A-Za-z ]+$/;
        const phoneRegex = /^[6-9]\d{9}$/;
        const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

       if (firstname === ""){
        alert("Enetr First Name");
        return;
       }
       if(!nameRegex.test(firstname)){
        alert("Firstname Should Contains Only Letters");
        return;
       }

       
       if (lastname === ""){
        alert("Enetr Last Name");
        return;
       }
       if(!nameRegex.test(lastname)){
        alert("Lastname Should Contains Only Letters");
        return;
       }


       if(mothername==""){
        alert("Enter Mother Name");
        return;
       }
       if(!nameRegex.test(mothername)){
        alert("Mothername Should Contains Only Letters");
        return;
       }


       if(fathername==""){
        alert("Enter Father Name");
        return;
       }
       if(!nameRegex.test(fathername)){
        alert("Fathername Should Contains Only Letters");
        return;
       }


        if (email === "") {
            alert("Please fill all fields");
            return;
        }

        if (!emailRegex.test(email)) {
            alert("Enter Valid Email");
            return;
        }

        
        if(!passwordRegex.test(password)){
            alert("Password must contain:\nMinimum 8 characters\nUppercase\nLowercase\nSpecial Character");
            return
        }

        if (address.trim() === "") {
        alert("Please enter your address.");
        return;
}

        alert("Login Successful");
    };

    return (

        <div className="container">

            <form className="login-box" onSubmit={handleLogin}>

                <h2>Login</h2>
            
                <input
                type="text"
                placeholder=" Enetr FirstName"
                value={firstname}
                onChange={(e)=>setFirstname(e.target.value)}
                />
                <input
                 type ="text"
                 placeholder="Enter Lastname"
                 value={lastname}
                 onChange={(e) => setLastname(e.target.value)}
                />
                
                <input 
                type ="text"
                placeholder="Enter mother Name"
                value={mothername}
                onChange={(e) =>setMothername(e.target.value)}
                />

                <input
                type ="text"
                placeholder="Enter Father Name"
                value={fathername}
                onChange={(e) => setFathername(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}                               
                    onChange={(e) => setEmail(e.target.value)}  
                />
                <input 
                type="text"
                placeholder="Enter Phone Number"
                value={phonenumber}
                onChange={(e) => setPhonenumber(e.target.value)}
                />

             <textarea
              placeholder="Enter your Address"
              value={address}
              onChange={(e) =>setAddress(e.target.value)}
              rows="4"
              >
             </textarea>

                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">
                    Login
                </button>

                <p>
                    Don't have an account?
                    <a href="/"> Register</a>
                </p>

            </form>

        </div>

    );

}

export default Login;   //makes the component available to use in other files.