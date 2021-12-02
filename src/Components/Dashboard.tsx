import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData,searchData, searchingData,addUserData, refreshData , refreshHandler } from "../Redux/Reducer";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import axios from 'axios'
import Detail from "./Detail";
import SearchUser from "./SearchUser";
import { useNavigate } from "react-router";
import UserEdit from "./UserEdit";

const Dashboard = () => {
  const data = useSelector(fetchData);
  const dataForSearch = useSelector(searchData);
  const showSearch = useSelector(searchingData)
  const refresh = useSelector(refreshData)
const navigate = useNavigate()
const dispatch= useDispatch()
useEffect(() => {
  axios
  .get(`https://dummyapi.io/data/v1/user/?page=1&&limit=50`)
  .then((response) => {
    dispatch(addUserData(response.data.data));
  })
  .catch((error) => console.log(error));
},[refresh])

  // view user Detail
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [valueForModal, setValueForModal] = useState([]);

  const viewHandler = (val: any) => {
    setConfirmOpen(true)
    setValueForModal(val);    
  };

  //Adding New user
const newUserHandler = () => {
navigate(`/NewUser`)
}

// editing user 
const [confirmEditOpen,setConfirmEditOpen] = useState(false)
const [valueForEdit,setValueForEdit] = useState([])
const editHandler = (val:any) => {
 setConfirmEditOpen(true)
 setValueForEdit(val)

}




//deleteHandler
const deleteUserHandler =(val:any) =>{
  axios.delete(`https://dummyapi.io/data/v1/user/${val.id}`)
  .then(response => {
    dispatch(refreshHandler())
  })
}

  return (
    <>
      <Detail
        title="User Details"
        open={confirmOpen}
        setOpen={setConfirmOpen}
        val={valueForModal}
      />
      <UserEdit
      editTitle="Edit User Details"
      open={confirmEditOpen}
      setOpen = {setConfirmEditOpen}
       val ={valueForEdit}
      />
      <div
      style={{display:'flex',alignContent:'center',justifyContent:'space-between'}}
      ><SearchUser />
      <Button 
      color = 'secondary'
      variant='contained'
      type='button'
    style={{marginTop:"0.8rem",height:'2.5rem'}}
    onClick={newUserHandler}
      >Add User</Button>
      </div>
      <Paper>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Photo</TableCell>
                <TableCell>View</TableCell>
                <TableCell>Edit</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(showSearch ? dataForSearch : data ).map((val: any, index: number) => {
                return (
                  <TableRow key={index}>
                    <TableCell>{val.id}</TableCell>
                    <TableCell>{val.title}</TableCell>
                    <TableCell>{val.firstName}</TableCell>
                    <TableCell>{val.lastName}</TableCell>
                    <TableCell>
                      <img src={val.picture} alt="pic" width="70px" />
                    </TableCell>
                    <TableCell>
                      <VisibilityIcon onClick={() => viewHandler(val)} />
                    </TableCell>
                    <TableCell>
                      <EditIcon onClick={() => editHandler(val)} />
                    </TableCell>
                    <TableCell>
                      {" "}
                      <DeleteIcon onClick = {() => deleteUserHandler(val)} />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export default Dashboard;
