
// import Sidebar from "../../components/sidebar/Sidebar"
// import Navbar from "../../components/navbar/Navbar"
// import React, { useState, useEffect } from "react"; 

// const Register = () => {
//     const [senderName,setSenderName] = useState("");
// const [senderEmail,setSenderEmail] = useState("");
// const [senderMessage,setSenderMessage] = useState("");
// const handleSubmitForm = (e) => {
//     e.preventDefault();


// db.collection('Contact_Form').add({
//       User_name:senderName,
//       User_email:senderEmail,
//       User_message:senderMessage  
//     })


//  .then(()=>{
//         alert("Message submitted")
//     })


//  .catch((error) => {
//         alert(error.message);
//     });



//     setSenderName("");
//     setSenderEmail("");
//     setSenderMessage("");
// };
//   return (
//     <>
//     <div className="contact_us_body">
//     <div className="contact_us_container">
//     <div className="contact_us_content">
       
//     <div className="contact_us_right_side">
//     <div className="text_heading">Send us a message</div>
    
//     <form className="form" onSubmit={handleSubmitForm}  >
    

//         <div className="contact_us_input_box">
//             <input type="text" placeholder="Enter your name" value={senderName}
//             onChange = {(e) => setSenderName(e.target.value)} />
//         </div>

//         <div className="contact_us_input_box">
//             <input type="text" placeholder="Enter your email"value={senderEmail}
//              onChange={(e) => setSenderEmail(e.target.value)} />
//         </div>

//         <div className="contact_us_input_box message-box">
//              <textarea name="messageText" id="" cols="30" rows="10"
//              placeholder="Type your Message"value={senderMessage}
//              onChange={(e) => setSenderMessage(e.target.value)} >
//              </textarea>
//         </div>

//         <div className="contact_us_button">
//             <input type="submit" value="Send Now" />
//         </div>

//     </form>
//             </div>
//         </div>
//     </div>
// </div>

//  </>
//   )
// }

// export default Register
