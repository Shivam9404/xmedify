import { Stack, TextField, Button } from "@mui/material";
import { useState, useMemo } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar({ list, filterList }) {
  const [inputText, setInputText] = useState("");

  // Memoizing the filtered list
  const filteredList = useMemo(() => {
    if (!inputText.trim()) return list;
    return list.filter((item) =>
      item["Hospital Name"].toLowerCase().includes(inputText.trim().toLowerCase())
    );
  }, [inputText, list]);

  const handleSubmit = (e) => {
    e.preventDefault();
    filterList(filteredList);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="row" spacing={2}>
        <TextField
          type="text"
          label="Search By Hospital"
          variant="outlined"
          fullWidth
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" startIcon={<SearchIcon />}>
          Search
        </Button>
      </Stack>
    </form>
  );
}
