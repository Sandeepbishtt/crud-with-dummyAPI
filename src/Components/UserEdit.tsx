import React,{useState} from "react";
import {Dialog,DialogContent,Card,CardContent,DialogTitle,InputLabel,Select,Button,Input,MenuItem} from "@mui/material";
import axios from 'axios'
import { useDispatch } from "react-redux";
import { refreshHandler } from "../Redux/Reducer";

const classes = {
  form: {
    marginLeft: "2rem",
  },
  Input: {
    width: "25rem",
    marginBottom: "1rem",
  },
  button:{
    margin:'1rem'
  }
};
const UserEdit = (props:any) => {
  const dispatch = useDispatch()
  const { editTitle, open, setOpen,val} = props;
const [firstName,setFirstName] = useState('')
const [lastName,setLastName] = useState('')
const [picture,setPicture] = useState('')
const [title,setTitle] = useState('')

const [showFirstName,setShowFirstName] = useState(true)
const [showLastName,setShowLastName] = useState(true)
const [showPicture,setShowPicture] = useState(true)
const [showTitle,setShowTitle] = useState(true)

const submitHandler = (e:React.FormEvent) => {
e.preventDefault()
  axios.put(`https://dummyapi.io/data/v1/user/${val.id}`, {
      firstName: showFirstName ? val.firstName : firstName,    
      lastName:showLastName ? val.lastName : lastName,
      picture:showPicture ?val.picture : picture,
      title:showTitle ? val.title : title
  }).then(response =>{
    setShowFirstName(true)
setShowLastName(true)
setShowPicture(true)
setShowTitle(true)
  })
 dispatch(refreshHandler())
setOpen(false)

}
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="confirm-dialog"
    >
      <DialogTitle id="confirm-dialog">{editTitle}</DialogTitle>
      <DialogContent>
        <Card >
          <CardContent>
          <form style={classes.form} onSubmit={submitHandler}>
      <InputLabel id="demo-simple-select-label">Title</InputLabel>
          <Select
            style={classes.Input}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={showTitle ? val.title : title}
            label="Gender"
            onChange={(e) => {
              setShowTitle(false)
              setTitle(e.target.value)
            }  }
            required
          >
            <MenuItem value="mr">mr</MenuItem>
            <MenuItem value="mrs">mrs</MenuItem>
            <MenuItem value="miss">miss</MenuItem>
          </Select>
        <Input
          type="text"
          placeholder="First Name"
          required
          className="form-control"
          inputProps={{ maxLength: 20 }}
          style={classes.Input}
          onChange={(e) => {
            setShowFirstName(false)
            setFirstName(e.target.value) }
          }
          value={showFirstName ? val.firstName : firstName}
        />
        <Input
          type="text"
          placeholder="Last Name"
          required
          className="form-control"
          inputProps={{ maxLength: 20 }}
          style={classes.Input}
          onChange={(e) => {
           setShowLastName(false)
            setLastName(e.target.value)}
          }
          value={showLastName ? val.lastName : lastName}
        />
        <Input
          type=""
          placeholder="Picture"
          required
          className="form-control"
          style={classes.Input}
          onChange={(e) => {
            setShowPicture(false)
            setPicture(e.target.value)}
          }
          value={showPicture ?val.picture : picture}
        />
        
        <Button
          color="primary"
          variant="contained"
          type="submit"
          style={classes.button}
        >
          Save
        </Button>
      </form>
           
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};
export default UserEdit;
