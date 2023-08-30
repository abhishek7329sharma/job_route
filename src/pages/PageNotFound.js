import React from 'react'
import {Link} from 'react-router-dom'
const PageNotFound = () => {
  return (
    <div>
        <h3>Page Not Found</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum similique distinctio non, et omnis maiores placeat quis, odio eligendi nihil commodi nulla, qui architecto debitis ex iusto ducimus nemo! Deleniti.</p>

        <p>Go to <Link to="/">Home Page</Link> </p>
    </div>
  )
}

export default PageNotFound