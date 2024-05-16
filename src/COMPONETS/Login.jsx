import React from 'react'

const Login = () => {
  return (
    <div>
        <h1>JCM</h1>
        <form>
        name <input type="text" name="" id=""/><br/>
        email <input type="email" name="" id="" /><br/>
        password <input type="password" name="" id="" /><br/>
                 <input type="button" value="submit" /><br/>
        male <input type="radio" name="gender" id="" />
        female <input type="radio" name="gender" id="" />
        </form>
    </div>
  )
}

export default Login