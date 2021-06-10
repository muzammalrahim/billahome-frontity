import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { SocialMenu } from "./header/social-menu";
import { connect } from "frontity";

import {ChevronRightIcon} from "@chakra-ui/icons";
const FooterSection = (props) => (
  <Box
    as="footer"
    pos="relative"
    bg="primary.900"
    py={{ base: "32px", lg: "40px" }}
    {...props}
  />
);

const FooterSectionGroup = (props) => (
  <SimpleGrid
    columns={{ base: 1, md: 3 }}
    maxWidth="1150px"
    mx="auto"
    width="90%"
    {...props}
  />
);

const FooterSectionItem = (props) => (
  <Box padding="24px" color="white" textAlign="center" {...props} />
);

const Footer = ({ state }) => (
  <div>
      <footer className="footer-wrap footer-wrap-v1">
        <div className="footer-top-wrap">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div
                  id="nav_menu-4"
                  className="footer-widget widget widget-wrap widget_nav_menu"
                >
                  <div className="widget-header">
                    <h3 className="widget-title">Company</h3>
                  </div>
                  <div className="menu-mobile-menu-container">
                    <ul id="menu-mobile-menu" className="menu">
                      <li
                        id="menu-item-3451"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3451"
                        
                      >   <ChevronRightIcon mb={0} ml={1} w={6} h={6} color="white"/> 
                        <a href="https://billahome.com/homepage/">Homepage</a>
                      </li>
                      <li
                        id="menu-item-3455"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3455"
                      > <ChevronRightIcon mb={0} ml={1} w={6} h={6} color="white"/> 
                        <a href="https://billahome.com/rent/">For Rent</a>
                      </li>
                      <li
                        id="menu-item-3456"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3456"
                      > <ChevronRightIcon mb={0} ml={1} w={6} h={6} color="white"/> 
                        <a href="https://billahome.com/sale/">For Sale</a>
                      </li>
                      <li
                        id="menu-item-3452"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3452"
                      > <ChevronRightIcon mb={0} ml={1} w={6} h={6} color="white"/> 
                        <a href="https://billahome.com/about/">About</a>
                      </li>
                      <li
                        id="menu-item-3453"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3453"
                      ><ChevronRightIcon mb={0} ml={1} w={6} h={6} color="white"/> 
                        <a href="https://billahome.com/blog/">Blog</a>
                      </li>
                      <li
                        id="menu-item-3454"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3454"
                      ><ChevronRightIcon mb={0} ml={1} w={6} h={6} color="white"/> 
                        <a href="https://billahome.com/contact/">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div
                  id="nav_menu-5"
                  className="footer-widget widget widget-wrap widget_nav_menu"
                >
                  <div className="widget-header">
                    <h3 className="widget-title">United States</h3>
                  </div>
                  <div className="menu-united-states-container">
                    <ul id="menu-united-states" className="menu">
                      <li
                        id="menu-item-3548"
                        className="menu-item menu-item-type-taxonomy menu-item-object-property_city menu-item-3548"
                      ><ChevronRightIcon mb={0} ml={1} w={6} h={6} color="white"/> 
                        <a href="https://billahome.com/city/chicago/">
                          Chicago
                        </a>
                      </li>
                      <li
                        id="menu-item-3549"
                        className="menu-item menu-item-type-taxonomy menu-item-object-property_city menu-item-3549"
                      ><ChevronRightIcon mb={0} ml={1} w={6} h={6} color="white"/> 
                        <a href="https://billahome.com/city/cleveland/">
                          Cleveland
                        </a>
                      </li>
                      <li
                        id="menu-item-3550"
                        className="menu-item menu-item-type-taxonomy menu-item-object-property_city menu-item-3550"
                      ><ChevronRightIcon mb={0} ml={1} w={6} h={6} color="white"/> 
                        <a href="https://billahome.com/city/los-angeles/">
                          Los Angeles
                        </a>
                      </li>
                      <li
                        id="menu-item-3551"
                        className="menu-item menu-item-type-taxonomy menu-item-object-property_city menu-item-3551"
                      ><ChevronRightIcon mb={0} ml={1} w={6} h={6} color="white"/> 
                        <a href="https://billahome.com/city/miami/">Miami</a>
                      </li>
                      <li
                        id="menu-item-3552"
                        className="menu-item menu-item-type-taxonomy menu-item-object-property_city menu-item-3552"
                      ><ChevronRightIcon mb={0} ml={1} w={6} h={6} color="white"/> 
                        <a href="https://billahome.com/city/new-york/">
                          New York
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div
                  id="nav_menu-6"
                  className="footer-widget widget widget-wrap widget_nav_menu"
                >
                  <div className="widget-header">
                    <h3 className="widget-title">Europe</h3>
                  </div>
                  <div className="menu-europe-container">
                    <ul id="menu-europe" className="menu">
                      <li
                        id="menu-item-3543"
                        className="menu-item menu-item-type-taxonomy menu-item-object-property_city menu-item-3543"
                      ><ChevronRightIcon mb={0} ml={1} w={6} h={6} color="white"/> 
                        <a href="https://billahome.com/city/amsterdam/">
                          Amsterdam
                        </a>
                      </li>
                      <li
                        id="menu-item-3544"
                        className="menu-item menu-item-type-taxonomy menu-item-object-property_city menu-item-3544"
                      ><ChevronRightIcon mb={0} ml={1} w={6} h={6} color="white"/> 
                        <a href="https://billahome.com/city/barcelona/">
                          Barcelona
                        </a>
                      </li>
                      <li
                        id="menu-item-3545"
                        className="menu-item menu-item-type-taxonomy menu-item-object-property_city menu-item-3545"
                      ><ChevronRightIcon mb={0} ml={1} w={6} h={6} color="white"/> 
                        <a href="https://billahome.com/city/london/">London</a>
                      </li>
                      <li
                        id="menu-item-3546"
                        className="menu-item menu-item-type-taxonomy menu-item-object-property_city menu-item-3546"
                      ><ChevronRightIcon mb={0} ml={1} w={6} h={6} color="white"/> 
                        <a href="https://billahome.com/city/paris/">Paris</a>
                      </li>
                      <li
                        id="menu-item-3547"
                        className="menu-item menu-item-type-taxonomy menu-item-object-property_city menu-item-3547"
                      ><ChevronRightIcon mb={0} ml={1} w={6} h={6} color="white"/> 
                        <a href="https://billahome.com/city/rome/">Rome</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
        <div className="footer-bottom-wrap footer-bottom-wrap-v1">
          <div className="container">
            <div className="d-flex justify-content-between">
              <div className="footer-copyright footer-copyrightstyle">
                © Copyright 2020 BillaHome.com, All rights reserved.
              </div>

              <div className="footer-nav">
                <ul id="footer-menu" className="nav">
                  <li
                    id="menu-item-3909"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3909 footerLeftLinks"
                  >
                    <a class="tai" href="https://billahome.com/about/">About Us</a>
                  </li>
                  <li
                    id="menu-item-3683"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3683 footerLeftLinks"
                  >
                    <a href="https://billahome.com/terms-and-conditions/">
                      Terms of Use
                    </a>
                  </li>
                  <li
                    id="menu-item-3684"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-3684 footerLeftLinks"
                  >
                    <a href="https://billahome.com/privacy-policy/">
                      Privacy Policy
                    </a>
                  </li>
                  <li
                    id="menu-item-3682"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3682 footerLeftLinks"
                  >
                    <a href="https://billahome.com/faqs/">FAQs</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
  </div>
);

export default connect(Footer);
