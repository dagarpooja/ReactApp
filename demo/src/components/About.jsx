import React from 'react'

const About = () => {
  return (
    // <div>hello,I am About page</div>
    <div className="form">
     <form>
       <div className="input-container">
         <label>Username </label>
         <input type="text" name="uname" required />
         
       </div>
       <div className="input-container">
         <label>Password </label>
         <input type="password" name="pass" required />
         
       </div>
       <div className="button-container">
         <input type="submit" />
       </div>
     </form>
   </div>
    
  )
}

export default About