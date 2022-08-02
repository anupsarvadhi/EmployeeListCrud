import React from 'react'
import './card.css'
import { useParams } from 'react-router-dom'

const Card = () => {
  const { id } = useParams()

  var newData = JSON.parse(localStorage.getItem('userDetails'))

  const result = newData.find((item) => item.id === parseInt(id))

  return (
    <>
      <div className="card-page">
        <div className="img-part">
          <img src={require('../Employees Image/img_avatar.png')} alt="" />
        </div>
        <div className="card-Body text-left">
          <h2>
            {result.fname}&nbsp;{result.lname}
          </h2>
          <p className="grey">
            <strong>{result.role}</strong>
          </p>
          <p className="grey">Web Designer</p>
          <p>
            <strong>Employee ID : {result.employeeId}</strong>
          </p>
          <p className="grey">Date Of Join : {result.joinDate}</p>
          <hr />
          <p>
            <strong>Phone : </strong>&nbsp;{result.mobile}
          </p>
          <p>
            <strong>Email : </strong>&nbsp;{result.email}
          </p>
        </div>
      </div>
    </>
  )
}

export default Card
