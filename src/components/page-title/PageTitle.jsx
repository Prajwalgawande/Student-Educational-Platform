import React from 'react'

const PageTitle = ({title}) => {
  return (
    <div className='title-bar' >
        <h3>{title}</h3>
        <i className="bi bi-bell"></i>
    </div>
  )
}

export default PageTitle