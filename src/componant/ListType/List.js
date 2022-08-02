import React from 'react'
import '../ListType/mainlist.css'
import { FaEllipsisV } from 'react-icons/fa'
import { FaPencilAlt } from 'react-icons/fa'
import { FaTrashAlt } from 'react-icons/fa'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'

const List = (props) => {
  return (
    <>
      <tr id={props.id}>
        <td
          style={{ color: '#FF7F50', fontWeight: '600' }}
          onClick={props.showCard}
        >
          {
            <img
              className="img-icon "
              src={require('../Employees Image/img_avatar.png')}
              alt=""
            />
          }
          &nbsp;&nbsp;
          {props.fname}&nbsp;{props.lname}
        </td>
        <td>{props.employeeId}</td>
        <td>{props.email}</td>
        <td>{props.mobile}</td>
        <td>{props.joinDate}</td>
        <td>{props.role}</td>
        <td>
          <OverlayTrigger
            trigger="click"
            key="bottom"
            placement="bottom"
            rootClose={true}
            delayShow={150}
            overlay={
              <Popover id="popover-positioned-bottom">
                <Popover.Body style={{ padding: '20px 40px 0px 40px' }}>
                  <div className="d-flex">
                    <button className="button" onClick={props.edit}>
                      <FaPencilAlt />
                      <p className="ps-3 lh-1">Edit</p>
                    </button>
                  </div>
                  <div className="d-flex">
                    <button className="button" onClick={props.deletefnc}>
                      <FaTrashAlt />
                      <p className="ps-3 lh-1">Delete</p>
                    </button>
                  </div>
                </Popover.Body>
              </Popover>
            }
          >
            <Button variant="ligth">
              <FaEllipsisV />
            </Button>
          </OverlayTrigger>
        </td>
      </tr>
    </>
  )
}

export default List
