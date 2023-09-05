import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Breadcrumps = () => {
  const location = useLocation()
  // help/contact --> help > contact
  console.log(location);
  let currentLink = ''
  const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== '')
    .map(crumb => {
      currentLink += `/${crumb}`
      return (
        <div className='crumb' key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      )
    })

  return (
    <div className='breadcrumbs'>{crumbs}</div>
  )
}

export default Breadcrumps