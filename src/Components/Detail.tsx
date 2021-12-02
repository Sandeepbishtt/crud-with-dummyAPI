import React from "react";
import {Dialog,DialogContent,Card,CardContent,Typography,DialogTitle,CardMedia} from "@mui/material";

const Detail = (props:any) => {
  const { title, open, setOpen,val } = props;
  
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="confirm-dialog"
    >
      <DialogTitle id="confirm-dialog">{title}</DialogTitle>
      <DialogContent>
        <Card >
          <CardMedia
            style={{ height: "21rem" }}
            image={val.picture}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Id:{val.id}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              Name:{val.title} {val.firstName} {val.lastName}
            </Typography>
           
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};
export default Detail;
