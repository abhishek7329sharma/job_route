import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

const About = () => {
  const [user, setUser] = useState('mario')
  if (!user) {
    return <Navigate to="/" replace={true} />
  }
  return (
    <div className="about">
      <h2>About</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aliquam quam culpa, incidunt quo est temporibus reiciendis ab nemo! Quibusdam optio nam ullam minus deserunt nesciunt quia cumque! Porro neque aliquid tempore nesciunt in, totam, beatae fuga amet ex enim eos repellendus qui. Corporis praesentium provident delectus quibusdam hic quaerat.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore commodi aut minima provident corporis officiis explicabo nam tempora, eaque quo, asperiores culpa. Dolorum ipsa illo sit molestiae magni corrupti debitis?</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus similique minima reprehenderit deleniti exercitationem sint saepe tempore ex enim, aperiam necessitatibus pariatur ipsum commodi ut fugiat modi unde nihil repudiandae?</p>
      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  )
}

export default About