import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const addTask = () => {
    if (!text.trim()) return;
    setTasks((prev) => [...prev, { id: Date.now(), text }]);
    setText("");
  };

  const deleteTask = (id) => setTasks((prev) => prev.filter((t) => t.id !== id));

  const startEdit = (task) => {
    setEditId(task.id);
    setEditText(task.text);
  };

  const saveEdit = (id) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, text: editText } : t)));
    setEditId(null);
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", px: 3, py: 6 }}>
      <Typography variant="h3" sx={{ fontWeight: 800, mb: 3 }}>
        Tasks
      </Typography>

      <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
        <TextField
          fullWidth
          label="New task"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
        />
        <Button variant="contained" onClick={addTask}>
          Add
        </Button>
      </Box>

      <List>
        {tasks.map((task) => (
          <ListItem
            key={task.id}
            sx={{ border: "1px solid", borderColor: "divider", borderRadius: 1, mb: 1 }}
            secondaryAction={
              editId === task.id ? (
                <IconButton onClick={() => saveEdit(task.id)}>
                  <CheckIcon />
                </IconButton>
              ) : (
                <>
                  <IconButton onClick={() => startEdit(task)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => deleteTask(task.id)}>
                    <DeleteIcon />
                  </IconButton>
                </>
              )
            }
          >
            {editId === task.id ? (
              <TextField
                fullWidth
                size="small"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && saveEdit(task.id)}
              />
            ) : (
              task.text
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
