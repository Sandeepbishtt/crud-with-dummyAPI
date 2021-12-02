import React, { useState, ChangeEvent, FormEvent } from "react";
import { InputBase, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchData,setSearchData,showSearch } from "../Redux/Reducer";
const SearchUser = () => {
  const data= useSelector(fetchData)
  const dispatch = useDispatch()
  const [input, setInput] = useState("");
  const searchHandler = (e:FormEvent) => {
      e.preventDefault();
const dataBySearch = data.filter((val:any) =>{
    return (
        val.firstName.toLowerCase().trim().includes(input.toLowerCase().trim()) ||
        val.lastName.toLowerCase().trim().includes(input.toLowerCase().trim())
    )
})
dispatch(showSearch())
dispatch(setSearchData(dataBySearch))
  };
  return (
    <>
      <form
        style={{
          margin: "1rem",
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
        }}
        onSubmit={searchHandler}
      >
        <InputBase
          style={{ border: "2px solid grey" }}
          placeholder="Search User"
          type="text"
          value={input}
          required
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setInput(event.target.value)
          }
        ></InputBase>
        <Button
          onClick={searchHandler}
          variant="contained"
          color="primary"
        //   disabled={input === ""}
        >
          Search{" "}
        </Button>
      </form>
    </>
  );
};

export default SearchUser;
