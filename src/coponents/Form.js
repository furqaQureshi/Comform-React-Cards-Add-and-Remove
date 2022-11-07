import React from 'react'

function Form() {
  return (
    <div class="form">
    <div class="container">
      <div class="form1">
  <h6>YOUR NAME</h6>
  <input type="text" placeholder="Name" style="width: 300px; height: 40px;"/>
  <h6>YOUR EMAIL</h6>
  <input type="text" placeholder="Email"  width="300px" style="width: 300px; height: 40px;"/>
</div>
<div class="form2">
  <h6>SUBJECT</h6>
  <input type="text" placeholder="Subject"  width="300px" style="width: 300px; height: 40px;"/>
  <h6>YOUR MESSAGE</h6>
  <input type="text" placeholder="Message"  width="300px" style="width: 300px; height: 40px;"/>
</div>
</div>

</div>
  )
}

export default Form;