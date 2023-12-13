import React from "react";
export const About=(props)=>{
    // console.log(props)
    console.log(props.myarr)
    const array =props.myarr
    return(
        <>
        <div>About</div>
        {/* <div>{props.myname}</div>
        <div>{props.myage}</div>
        <div>{props.mydegree}</div>
        <div>{props.myplace}</div> */}
        <table>
            <thead>
                <tr>
                    <th>s.no</th>
                    <th>name</th>
                    <th>age</th>
                    <th>degree</th>
                    <th>place</th>
                </tr>
                    </thead>
                <tbody>
                    {array.map((data,index)=>
                        data.age>18?
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{data.name}</td>
                            <td>{data.age}</td>
                            <td>{data.degree}</td>
                            <td>{data.place}</td>
                        </tr>:null
                    )} 
                    </tbody>
        </table>
        </>
    )
}