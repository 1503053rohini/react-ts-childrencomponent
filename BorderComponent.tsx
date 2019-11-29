import React from 'react';

export default function BorderConponent(props)
{
return(
<div style={{backgroundColor:'red', padding:100}}>
<div style={{backgroundColor:'pink', padding:80}}>
{props.children}
</div>
</div>

);
}