import { Box, Stack } from "@chakra-ui/react";
import { styled } from "frontity";
import React from "react";
import FrontityLink from "../link";
import { css } from "frontity";
import { connect } from "frontity";
import { ChevronDownIcon} from "@chakra-ui/icons";

const Link = styled(FrontityLink)`
  position: relative;
  color: #fff;
  text-decoration: none;

  &:after {
    transition: bottom ease 0.25s, background-color ease 0.25s;
    content: "";
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
    background: transparent;
  }

  &:hover {
    &:after {
      bottom: -5px;
      background-color: ${p => p.theme.colors.accent[400]};
    }
  }
`;

const Link2 = styled(FrontityLink)`
  position: relative;
  color: #fff;
  text-decoration: none;

  &:after {
    transition: bottom ease 0.25s, background-color ease 0.25s;
    content: "";
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
    background: transparent;
  }

  &:hover {
    &:after {
      bottom: -5px;
      background-color: ${p => p.theme.colors.accent[400]};
    }
  }
`;

export const SiteMenu = props => (
  <Stack
    ml="0px"
    spacing="0px"
    as="ul"
    listStyleType="none"
    align="center"
    direction="row"
    color=""
    {...props}
  />
);



const SiteMenuItem = ({ link, ...props }) => (
  <Box
    as="li"
    color="green"
    fontSize={{ base: "sm", lg: "md" }}
    fontWeight="medium"
    fontFamily="Kelson"
    textTransform="uppercase"
    position="relative"
    cursor="pointer"
    {...props}
    
  >
  
    <Link  link={link}>{props.children}</Link>
  </Box>
);

const SiteMenuItem2 = ({ link, ...props }) => (
  <Box
    as="li"
    color="yellow"
    fontSize={"12px"}
    fontWeight="medium"
    fontFamily="Kelson"
    textTransform="uppercase"
    position="relative"
    cursor="pointer"
    margin="15px"
    listStyle = "none"
    {...props}
  >
    <Link2 link={link}>{props.children}</Link2>
  </Box>
);



const Navigation = ({ menu,state,actions,...props }) =>
{

  const items = state.source.get(`/menu/92/`).items;

  return(
  <Box as="nav" width="100%" position="absolute" marginTop="30px" display={{ base: "none", lg: "block" }} {...props}>
    <SiteMenu>
      {menu?.map(({name,link,submenu}) =>{

          // let result = url.replace("http://billahome.com", "").replace('https://billahome.com', "").replace('http://billahomes.com/backend', "").replace('https://billahomes.com', "").replace('http://72.167.39.69', "");  
        //  const urls = result
          // {console.log('result', url)}
        return (
        <div  class="mmenu" css={css`position:relative;` }>
        <StyledMenu submenu={submenu}>
        <SiteMenuItem  key={name} link={link}  onMouseLeave={()=>{setTimeout(() => {
                                                               actions.theme.hideSubmenu()
                                                                                       }, 500)  
                                                                    }
                                                                }>
              {submenu && <p onPointerMove={()=>{actions.theme.showSubmenu(),actions.theme.showcurrentSubMenu(name)}} 
                              >  {name} 
                              <ChevronDownIcon mb={0} ml={1} w={6} h={6}/> </p>
              } {!submenu  &&<p> {name}</p> }
                                                                         

        </SiteMenuItem>
       
        <MenuItem2 submenu={submenu}>
         <MenuItem  onMouseLeave={()=>{ actions.theme.shouldshowSubmenu("closed"), actions.theme.hideSubmenu()}} class="innermenu" key={name} css={css`
        position: absolute;
        top: 47px;
        background: #000;
        margin-left: 0px;
        
        `}>
        

        {(state.theme.subMenu && submenu && state.theme.currentSubMenu === name) && submenu?.map(({name,link}) => {
          // let result2 = url.replace("http://billahome.com", "").replace('https://billahome.com', '').replace('http://billahomes.com/backend', '').replace('https://billahomes.com', '').replace('http://72.167.39.69', '');  
        //  const urls = result2
          return ( 
            <SiteMenuItem2 key={name} link={link}   onMouseEnter={()=>{actions.theme.shouldshowSubmenu("open")}}>
                <div  css={css` position : relative;
                                padding: 10px 10px 10px 10px;
                             border-bottom: 1px solid #e6e6e6;
                           `}
                >
                        {name} 
                </div>  
            </SiteMenuItem2>        
         );
        })
      } 
          </MenuItem>
        </MenuItem2>    
       </StyledMenu>
     
      </div>
     
      ); }
      )} 
    </SiteMenu>
  </Box>

)};

export default connect(Navigation);


const MenuItem = styled.ul`
font-size: 10px ! important
border : 2px solid
background : #1f2024;
position : relative
list-style : none;
border-top: 4px solid #ffffff;
`;

const MenuItem2 = styled.div`
position: absolute;
        top: 46px;
        background: white;
        color:red;
        width:230px;
        visibility: visible;
`;


// visibility: ${(props) => (props.isPostType ? "visible" : "hidden")};
const StyledMenu = styled.ul`
list-style : none;
  ${MenuItem}:hover & {
    visibility: ${({submenu}) => submenu && 'hidden'};
  }

`;