import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

function AddQuote() { 
  const [inputValue, setInputvalue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!inputValue) return;
    console.log(inputValue);
    setInputvalue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input onChange={(e) => setInputvalue(e.target.value)} placeholder="Add a quote"/>

      <div className="flex gap-2">
        <Button>Add</Button>
        <Button>Sort</Button>
      </div>
    </form>
  );
}

export default AddQuote;