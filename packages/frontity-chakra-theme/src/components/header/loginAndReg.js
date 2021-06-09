import { Box } from "@chakra-ui/react";
import React from "react";


const LoginAndReg = props => (
 
  <div class="login-register">
       <ul class="login-register-nav">
             
       <li class="login-link">
         <a href="#" data-toggle="modal" data-target="#login-register-form">Login</a>
       </li>					
       <li class="register-link">
         <a href="#" data-toggle="modal" data-target="#login-register-form">Register</a>
       </li>					
       <li>
       <a href="https://billahome.com/create-listing/" class="btn-create-listing">Create a Listing</a>		</li>

     </ul>
   </div>
 
);

export default LoginAndReg;