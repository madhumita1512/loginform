import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Signup =()=>{
    const [fname,setFname] = useState('')
    const [lname,setLname] = useState('')
    const [password,setPassword] = useState('')
    const [email,setEmail] = useState('')
    const [errors,setErrors] = useState('')
    const navigate = useNavigate("")
    const handleSubmit=(e)=>{
        e.preventDefault()
        let err={}
        if(!fname || !lname){
            err.fname ="incorrect"
            err.lname = "incorrect"
        }
        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            err.email="incorrect"
        }
        if(!password){
            err.password="incorrect"
        }
        if(Object.keys(err).length>0){
            setErrors({...err})
            return
        }
        // setFname('')
        // setLname('')
        // setEmail('')
        // setPassword('')
        navigate('/')
    }
    const handleFnameChange=(e)=>{
        setFname(e.target.value)
        setErrors({...errors,fname:""})
    }
    const handleLnameChange=(e)=>{
        setLname(e.target.value)
        setErrors({...errors,lname:""})
    }
    const handleEmailChange=(e)=>{
        setEmail(e.target.value)
        setErrors({...errors,email:""})
    }
    const handlePasswordChange=(e)=>{
        setPassword(e.target.value)
        setErrors({...errors,password:""})
    }
return (
    <>
    <form onSubmit={handleSubmit}>
        <div className="container">
        <h2>Signin Page</h2>
        <div>
        <label htmlFor="fname">FirstName</label>
        <input type="text" id="fname" value={fname} onChange={handleFnameChange}/>
        {errors.fname ? <div className="error">{errors.fname} </div> : null}
        </div>
        <div>
        <label htmlFor="lname">LastName</label>
        <input type="text" id="lname"  value={lname} onChange={handleLnameChange}/>
        {errors.lname ? <div className="error">{errors.lname} </div> : null}
        </div>
        <div>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" value={email} onChange={handleEmailChange}/>
        {errors.email ? <div className="error">{errors.email} </div> : null}
        </div>
        <div>
        <label htmlFor="password">Password</label>
        <input type="text" id="Password"  value={password} onChange={handlePasswordChange}/>
        {errors.password ? <div className="error">{errors.password} </div> : null}
        </div>
        
        <button type="submit">Submit</button>
        <p>if already registered ? </p>
        <Link to="/login"> <button type="submit">Login</button></Link>
        
        </div>
    </form>
    </>
)
}
export default Signup