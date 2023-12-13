import React from "react";
import { useParams } from "react-router-dom";
export const Book=()=>{
    const {ai}=useParams()
    return(
        <div>Book Page {ai}</div>
        
    )
}