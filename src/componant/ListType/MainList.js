import React, { useState, useEffect } from 'react'
import '../ListType/mainlist.css'
import { FaBars } from 'react-icons/fa'
import { FaGripHorizontal, FaPlus } from 'react-icons/fa'
import Table from 'react-bootstrap/Table'
import employeeDetails from '../employeelist.json'
import Grid from '../GridType/Grid'
import List from './List.js'
import FormModal from './FormModal'
import { useLocation, useNavigate } from 'react-router-dom'
import { createBrowserHistory } from 'history'

const MainList = () => {
  const navigate = useNavigate()
  const history = createBrowserHistory()
  const search = useLocation().search

  const [isShowList, setIsshowList] = useState(true)
  const [modalShow, setModalShow] = useState(false)
  const [employees, setemployeeDetails] = useState(employeeDetails)
  const [editvalue, setEditvalue] = useState(null)
  const [btn, setBtn] = useState(false)

  localStorage.setItem('userDetails', JSON.stringify(employees))

  const hideList = () => {
    setIsshowList(false)
    history.push({
      path: '/employee',
      search: 'type=grid',
    })
  }
  const showList = () => {
    setIsshowList(true)
    history.push({
      path: '/employee',
      search: 'type=list',
    })
  }

  const formOpen = () => setModalShow(true)

  const submit = (data) => {
    if (editvalue !== null) {
      var Editdata = employees.map((element) => {
        if (element.id === editvalue.id) {
          element = data
        }
        return element
      })

      setemployeeDetails(Editdata)
    } else {
      data.id = employees.length + 1
      setemployeeDetails([...employees, data])
    }
    setModalShow(false)
  }

  useEffect(() => {
    let oldData = localStorage.getItem('userDetails')
    const newData = oldData ? JSON.parse(oldData) : []
    newData.push(setemployeeDetails)
  }, [])

  const deletefnc = (id) => {
    setemployeeDetails(employees.filter((item) => item.id !== id))
  }

  const edit = (id) => {
    const newEdit = employees.find((element) => {
      return element.id === id
    })
    setEditvalue(newEdit)
    setModalShow(true)
    setBtn(true)
  }

  const showCard = (id) => {
    navigate(`/employee/${id}`)
  }

  useEffect(() => {
    const type = new URLSearchParams(search).get('type')
    if (type === 'list') {
      setIsshowList(true)
    } else if (type === 'grid') {
      setIsshowList(false)
    }
  }, [])

  return (
    <>
      <div className="main-body w-100 ">
        <div className="container pt-4 d-flex">
          <div className="heading col-8 ">
            <p className=" fs-4 fw-bold">Employees</p>
          </div>
          <div className="btn-group d-flex justify-content-evenly col-4">
            <button className="font-btn" onClick={hideList}>
              <FaGripHorizontal />
            </button>
            <button className="font-btn" onClick={showList}>
              <FaBars />
            </button>
            <button className="addEmployee" onClick={formOpen}>
              <FaPlus />
              &nbsp; Add Employees
            </button>
          </div>
        </div>
        <div className="container pt-4 ">
          {isShowList && (
            <Table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Employee ID</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Join Date</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((item, i) => {
                  return (
                    <React.Fragment key={i}>
                      <List
                        showCard={() => showCard(item.id)}
                        id={item.id}
                        img={item.img}
                        fname={item.fname}
                        lname={item.lname}
                        employeeId={item.employeeId}
                        email={item.email}
                        mobile={item.mobile}
                        joinDate={item.joinDate}
                        role={item.role}
                        deletefnc={() =>
                          window.confirm('Are You Sure To Delete This Data ?')
                            ? deletefnc(item.id)
                            : ''
                        }
                        edit={() => edit(item.id)}
                      />
                    </React.Fragment>
                  )
                })}
              </tbody>
            </Table>
          )}
          <div className="container grid-div p-0 d-grid">
            {employees.map((item, i) => {
              return (
                !isShowList && (
                  <React.Fragment key={i}>
                    <Grid
                      showCard={() => showCard(item.id)}
                      img={item.img}
                      fname={item.fname}
                      lname={item.lname}
                      role={item.role}
                      deletefnc={() =>
                        window.confirm('Are You Sure To Delete This Data ?')
                          ? deletefnc(item.id)
                          : ''
                      }
                      edit={() => edit(item.id)}
                    />
                  </React.Fragment>
                )
              )
            })}
          </div>

          {modalShow && (
            <FormModal
              show={modalShow}
              submit={submit}
              onHide={() => setModalShow(false)}
              editvalue={editvalue}
              btn={btn}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default MainList
