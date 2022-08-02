import React from 'react'
import './grid.css'
import { FaEllipsisV, FaTrashAlt, FaPencilAlt } from 'react-icons/fa'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'

const Grid = (props) => {
  return (
    <>
      <div className="GridBox">
        <div className="option">
          <OverlayTrigger
            trigger="click"
            key="bottom"
            placement="bottom"
            className="popper"
            rootClose={true}
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
            <Button variant="ligth" className="btn-2">
              <FaEllipsisV />
            </Button>
          </OverlayTrigger>

          {/* <div className="popper">
              <div className="d-flex bx">
                <button className="button" onClick={props.edit}>
                  <FaPencilAlt />
                  <p className="ps-3 lh-1">Edit</p>
                </button>
              </div>
              <div className="d-flex bx">
                <button className="button" onClick={props.deletefnc}>
                  <FaTrashAlt />
                  <p className="ps-3 lh-1">Delete</p>
                </button>
              </div>
            </div> */}
        </div>
        <img
          className="grid-icon"
          src={require('../Employees Image/img_avatar.png')}
          alt=""
          onClick={props.showCard}
        />
        <p className="employee-name">
          {props.fname}&nbsp;{props.lname}
        </p>
        <div>
          <p className="employee-role">{props.role}</p>
        </div>
      </div>
    </>
  )
}

export default Grid
