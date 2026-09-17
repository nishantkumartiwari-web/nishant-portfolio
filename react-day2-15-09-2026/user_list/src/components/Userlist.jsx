import { useState, useEffect } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);


export default function Userlist() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUserList(data);
    }

    fetchData();
  }, []);

  return (
    <div className="main">
      {userList.map((user) => {
        return (
          <Box key={user.id} sx={{ mWidth: 275 }}>
            <Card variant="outlined">
              {
                <React.Fragment>
                  <CardContent>
                    <Typography
                      gutterBottom
                      sx={{ color: "text.primary", fontSize: 24 }}
                    >
                      {user.name}
                    </Typography>
                    <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                      @{user.username}
                    </Typography>
                    <Typography variant="body2">
                      {user.email}
                    </Typography>
                  </CardContent>
                </React.Fragment>
              }
            </Card>
          </Box>
        );
      })}
      <></>
    </div>
  );
}
