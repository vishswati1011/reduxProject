import React, { useEffect ,useState} from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import rows from "./rowsData";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Friend = () => {

  const [allUser,setAllUser]=useState([]);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const response = await axios.get('http://localhost:8082/auth/getAllUSer',{
      headers: {
        'Access-Control-Allow-Origin': '*',
        "content-type": "application/json",
      },
    });
    console.log("response", response)
    setAllUser(response.data.result)

  };
  console.log("allUser", allUser)

  return (
    <div>
      <h1 className="title">Friend List</h1>
      <Paper className="container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>

              <TableCell>chat</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allUser && allUser.map(({ _id, fName, lName, phone, email }) => (
              localStorage.getItem("email")!==email?
              <TableRow key={_id}>
                <TableCell component="th" scope="row">
                  {fName}
                </TableCell>
                <TableCell component="th" scope="row">
                  {lName}
                </TableCell> 
                <TableCell component="th" scope="row">
                  {email}
                </TableCell>
                 <TableCell component="th" scope="row">
                  {phone}
                </TableCell> 
                <TableCell  >
                  <NavLink to={`/chat2/${_id}`} >
                  <button>chat</button>
                  </NavLink>
                  </TableCell>

              </TableRow>:null
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  )
};
export default Friend;
