import React, { useState } from "react";
import { Input, Button, Box ,InputLabel,Select,MenuItem} from "@mui/material";

import NoteAddIcon from "@mui/icons-material/NoteAdd";
import axios from "axios";
import { useDispatch } from "react-redux";
import { refreshHandler } from "../Redux/Reducer";
import { useNavigate } from "react-router";

const classes = {
  form: {
    marginLeft: "2rem",
    marginTop: "2rem",
  },
  Input: {
    width: "25rem",
    marginBottom: "1rem",
  },
};

const NewUser = (props :any) => {
const navigate = useNavigate()


const [firstName,setFirstName] = useState('')
const [lastName,setLastName] = useState('')
const [email,setEmail] = useState('')
const [picture,setPicture] = useState('')
const [title,setTitle] = useState('')
const dispatch= useDispatch()
const submitHandler = (e:React.FormEvent) => {
    e.preventDefault()
    axios.post('https://dummyapi.io/data/v1/user/create', {
        firstName:firstName,    
        lastName:lastName,
        email:email,
        picture:picture,
        title:title
    })
    .then(response => {
        if(response.status === 200) {
            navigate(`/dashboard`)
        }
})
.catch(error => console.log(error))
dispatch(refreshHandler())

}



  return (
    <>
    <h1 style={{textAlign:'center'}}>Add User</h1>
    <Box
      border={1}
      borderColor="grey.500"
      borderRadius={5}
      bgcolor="white.main"
      boxShadow={3}
      width={500}
      height={370}
      mx="auto"
      mt="2rem"
    >
      <form style={classes.form} onSubmit={submitHandler}>
      <InputLabel id="demo-simple-select-label">Title</InputLabel>
          <Select
            style={classes.Input}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={title}
            label="Gender"
            onChange={(e) => setTitle(e.target.value) }
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
          onChange={(e) => setFirstName(e.target.value) }
          value={firstName}
        />
        <Input
          type="text"
          placeholder="Last Name"
          required
          className="form-control"
          inputProps={{ maxLength: 20 }}
          style={classes.Input}
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
        <Input
          type="email"
          placeholder="Email"
          required
          className="form-control"
          inputProps={{ maxLength: 20 }}
          style={classes.Input}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Input
          type=""
          placeholder="Picture"
          required
          className="form-control"
          style={classes.Input}
          onChange={(e) => setPicture(e.target.value)}
          value={picture}
        />
        
        <Button
          color="primary"
          variant="contained"
          startIcon={<NoteAddIcon />}
          type="submit"
         
        >
          Save
        </Button>
      </form>
    </Box>
    </>
  );
};

export default NewUser;
