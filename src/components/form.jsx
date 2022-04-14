// import { useState } from "react"

// export const Form = () =>{
//     const [formdata,setFormdata] = useState({
//        username:"",
//        age:""
//     })
//     const handlechange = (e) =>{
//         setFormdata({
//             ...formdata,
//             [e.target.id]:e.target.value
//         })
//     }
//     const handlesub=(e)=>{
//        e.preventDefault();
//        console.log(form)
//     }
//     console.log({formdata})
//     return (
//         <form>
//            <input onChange={handlechange} id="username"></input>
//            <input onChange={handlechange} id="age"></input>
//            <button onClick={handlesub}>submit</button>
//         </form>
//     )
// }