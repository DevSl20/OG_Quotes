import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


function SingleQuote() {
  return (
  <Card>

  <CardHeader>
    <CardTitle className="text
    -lg">OG_Quotes</CardTitle>
    <CardDescription>OG_Quotes for OG's</CardDescription>
  </CardHeader>

  <CardFooter className="flex gap-2">
    <button varient="Outline"></button>
    <button varient="Outline"></button>
    <button varient="destructive"></button>
  </CardFooter>
</Card>
  )
}

export default SingleQuote;