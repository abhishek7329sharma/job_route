import React from "react";
import { Link, useLocation } from "react-router-dom";
''
  const crumbs = location.pathname.split('/')
  .filter(crumb => crumb !== '')
  .map(crumb => {
    currentLink += `/${crumb}`
    return (
        <div key={crumb} className="crumb">
           <Link to={currentLink}>{crumb}</Link>
        </div>
    )
  })
  return <div className="breadcrumbs">{crumbs}</div>;
}
