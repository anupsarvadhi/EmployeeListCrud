import React from 'react'
import { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import './mainlist.css'

const FormModal = ({ btn, editvalue, submit, ...props }) => {
  let defaultDate = new Date()

  const [date, setDate] = useState(defaultDate)
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [employeeId, setEmployeeId] = useState('')
  const [number, setNumber] = useState('')
  const [company, setCompany] = useState('')
  const [department, setDeparment] = useState('')
  const [designation, setDesignation] = useState('')

  defaultDate.setDate(defaultDate.getDate())

  const onSetDate = (event) => {
    setDate(new Date(event.target.value))
  }
  const jdate = date.toLocaleDateString('en-CA')

  const handleSubmit = (e) => {
    e.preventDefault()
    var nameregex = new RegExp('^[a-zA-Z]+$')
    var userregex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{2,}$/
    var emailregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gm
    var emploIdregex = /^[A-Z0-9]{2}-\d{4}/

    if (!fname.match(nameregex)) {
      return alert('Please Enter Only Alphabetic Font In First Name')
    }
    if (!lname.match(nameregex)) {
      return alert('Please Enter Only Alphabetic Font In Last Name')
    }
    if (!username.match(userregex)) {
      return alert('Please Enter Username Alphanumeric value For Ex. Joen009')
    }
    if (!email.match(emailregex)) {
      return alert('Please Enter valid Email Ex. exaple@gmail.com')
    }
    if (!employeeId.match(emploIdregex)) {
      return alert('Please Enter Valid Employee ID Ex. FD-0004')
    }
    if (number.length > 10 || number.length < 10) {
      return alert('please Enter 10 Digit Mobile Number...!')
    }

    var data = {
      fname: fname,
      lname: lname,
      username: username,
      employeeId: employeeId,
      email: email,
      mobile: number,
      joinDate: jdate,
      role: designation,
      company: company,
      department: department,
    }

    setFname('')
    setLname('')
    setUsername('')
    setEmail('')
    setEmployeeId('')
    setNumber('')
    setCompany('')
    setDeparment('')
    setDesignation('')

    submit(data)
    handleReset()

    btn
      ? alert('Empolyee Update Succsesfully.....!')
      : alert('Empolyee Add Succsesfully.....!')
  }

  const handleReset = () => {
    setFname('')
    setLname('')
    setUsername('')
    setEmail('')
    setEmployeeId('')
    setNumber('')
    setCompany('')
    setDeparment('')
    setDesignation('')
  }

  useEffect(() => {
    if (editvalue) {
      setFname(editvalue.fname)
      setLname(editvalue.lname)
      setUsername(editvalue.username)
      setEmail(editvalue.email)
      setEmployeeId(editvalue.employeeId)
      setNumber(editvalue.mobile)
      setCompany(editvalue.company)
      setDeparment(editvalue.department)
      setDesignation(editvalue.role)
    }
  }, [])

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="position-absolute"
      >
        <Modal.Header className="border-bottom-0" closeButton></Modal.Header>
        <Modal.Body>
          <h3 className="text-center">Employees Details</h3>
          <Form className="p-3" onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formFname">
                <Form.Label>
                  First Name<sup>*</sup>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ex. Joen"
                  value={fname || ''}
                  onChange={(e) => setFname(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formLname">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ex. Doe"
                  value={lname || ''}
                  onChange={(e) => setLname(e.target.value)}
                  required
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formUsername">
                <Form.Label>
                  UserName<sup>*</sup>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ex.Joen09"
                  value={username || ''}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formEmail">
                <Form.Label>
                  Email<sup>*</sup>
                </Form.Label>
                <Form.Control
                  type="Email"
                  placeholder="Enter Email"
                  value={email || ''}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formEmploId">
                <Form.Label>
                  Employee ID<sup>*</sup>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ex.FD-0004"
                  value={employeeId || ''}
                  onChange={(e) => setEmployeeId(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formDate">
                <Form.Label>
                  Joining Date<sup>*</sup>
                </Form.Label>
                <Form.Control
                  type="date"
                  value={jdate || ''}
                  onChange={onSetDate}
                  required
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formNumber">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Ex. 9569873215"
                  value={number || ''}
                  onChange={(e) => setNumber(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formCompany">
                <Form.Label>Company</Form.Label>
                <Form.Select
                  value={company || ''}
                  onChange={(e) => setCompany(e.target.value)}
                  required
                >
                  <option value=""></option>
                  <option value="Global Technologies">
                    Global Technologies
                  </option>
                  <option value="Delta Infotect">Delta Infotect</option>
                  <option value="International Software Inc">
                    International Software Inc
                  </option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formDepartment">
                <Form.Label>
                  Department<sup>*</sup>
                </Form.Label>
                <Form.Select
                  value={department || ''}
                  onChange={(e) => setDeparment(e.target.value)}
                  required
                >
                  <option value=""></option>
                  <option value="Web Devlopment">Web Devlopment</option>
                  <option value="IT Menagement">IT Menagement</option>
                  <option value="Marketing">Marketing</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formDesignetion">
                <Form.Label>
                  Designation<sup>*</sup>
                </Form.Label>
                <Form.Select
                  className="ae"
                  value={designation || ''}
                  onChange={(e) => setDesignation(e.target.value)}
                  required
                >
                  <option value=""></option>
                  <option value="Web Designer">Web Designer</option>
                  <option value="Web Developer">Web Developer</option>
                  <option value="Android Developer">Android Developer</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <div className="d-flex justify-content-center py-3">
              <Button
                variant="primary"
                type="submit"
                className="px-3 bg-warning border-0"
              >
                {btn ? 'Update' : 'Add Employee'}
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default FormModal
