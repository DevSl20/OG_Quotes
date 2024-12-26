import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

function AddQuote({ onSubmit, onSort }) {
  const [inputValue, setInputvalue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!inputValue.trim()) return;

    onSubmit(inputValue);

    setInputvalue("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-5">
      <Input 
        type="text"
        placeholder="Add a Quote"
        className="mb-2"
        onChange={(e) => setInputvalue(e.target.value)}
        value={inputValue}
      />

      <div className="flex gap-2">
        <Button type="submit">Add</Button>
        <Button variant="secondary" onClick={onSort}>
          Sort
        </Button>
      </div>
    </form>
  );
}

export default AddQuote;