import React from "react";

import { Stack, Typography } from "@mui/material";

import Github from "../img/github1.png";
import Email from "../img/email.png";
import Linkdin from "../img/linkdin.png";

const Footer = () => {
  return (
    <>
      <div className="footer">



        <Typography  fontWeight={600} align="center" color='#ffffff'>
            Yes! All rights reserved &#169;
        </Typography>

        <div  className="footerContainer"
   
        >

            <Stack gap={3} style={{display:'flex', alignItems:'center'}}  mt="30px" direction='row'>

      
            <img  className="logos" src={Github} alt="" />
        
            
                <Stack >
                    
                    <a  style={{textDecoration:'none',color:'#ffffff'}} href="https://github.com/AvishkarVichare/NoteIT-Frontend">
                        <Typography>
                            Frontend source code
                        </Typography>
                    </a>
                    <a style={{textDecoration:'none',color:'#ffffff'}} href="https://github.com/AvishkarVichare/noteit-backend">
                        <Typography>
                            Backend source code
                        </Typography>
                    </a>

                </Stack>

                
            </Stack>





            <Stack gap={3} style={{display:'flex', alignItems:'center'}}   direction='row' mt="30px">
                    <img className="logos" src={Email} alt="" />

                    <Typography color='#ffffff'>avie9500@gmail.com</Typography>
                </Stack>

            <Stack gap={3} style={{display:'flex', alignItems:'center'}} direction='row' mt="30px">
                <img  className="logos" src={Linkdin} alt="" />
                <a style={{textDecoration:'none',color:'#ffffff'}} href="ljflsfjlsfjlsfj">    <Typography color="#ffffff">
                    Avishkar Vichare
                </Typography></a>
            </Stack>


        

          {/* <div>All rights reserved  @ok</div> */}
        </div>
      </div>
    </>
  );
};

export default Footer;
