import React from 'react';
import LoggerHoc from './LoggerHoc';
//Passing children props
// export default function BorderConponent(props)
// {
// return(
// <div style={{backgroundColor:'red', padding:100}}>
// <div style={{backgroundColor:'pink', padding:80}}>
// {props.children}
// </div>
// </div>

// );
// }


//passing this var to loggerHoc Function
let BorderVar=(props)=>
{
return(
<div style={{backgroundColor:'red', padding:100}}>
<div style={{backgroundColor:'pink', padding:80}}>
{props.children}
</div>
</div>

);
}

export default LoggerHoc(BorderVar);
