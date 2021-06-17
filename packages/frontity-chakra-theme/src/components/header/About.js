
import { Image } from "@chakra-ui/react"
import {Heading, Text } from "@chakra-ui/react";


import { Box, Divider } from "@chakra-ui/react";
import { connect, styled } from "frontity";
import React, { useEffect } from "react";
import List from "../archive";
import useScrollProgress from "../hooks/useScrollProgress";
import { LightPatternBox } from "../styles/pattern-box";
import Csection from "../styles/c_section";
import AuthorBio from "../post/author-bio";
import FeaturedMedia from "../post/featured-media";
import PostHeader from "../post/post-header";
import PostProgressBar from "../post/post-progressbar";
import { getPostData, formatPostData } from "../helpers";

const About = ({ state, actions, libraries }) => {
  const postData = getPostData(state);
  const post = formatPostData(state, postData);

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  // Once the post has loaded in the DOM, prefetch both the
  // home posts and the list component so if the user visits
  // the home page, everything is ready and it loads instantly.
  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, []);

  const [ref, scroll] = useScrollProgress();

  // Load the post, but only if the data is ready.
  if (!postData?.isReady) return null;

  return (
<div class="tai">
      
 {/*<div className="aboutImgbackground-overlay"> 
        
    <div className="mainheader">
    <Image className="aboutImg"  src="https://demo13.houzez.co/wp-content/uploads/2020/03/205.jpg" alt="Segun Adebayo" />
  </div>
     </div>*/}
      {!postData?.isPage && <PostProgressBar value={scroll} />}
      {/* Look at the settings to see if we should include the featured image */}
      <Csection bg="white" pb="80px" size="lg" class="bhoom">
        {post?.featured_media != null && (
          <FeaturedMedia id={post?.featured_media.id} />
        )}
      
        {/* Render the content using the Html2React component so the HTML is processed
       by the processors we included in the libraries.html2react.processors array. */}
        <Content
          as={Csection}
          px={{ base: "32px", md: "0" }}
          size="lg"
          pt="0px"
        >
          <Html2React html={post?.content} />
        </Content>
        
      </Csection>
      </div>
  );
};

export default connect(About);

// This component is the parent of the `content.rendered` HTML. We can use nested
// selectors to style that HTML.
const Content = styled.div`
  color: rgba(12, 17, 43, 0.8);
  word-break: break-word;
  width:100% !important;
  max-width: none !important;

  * {
    max-width: 100%;
  }

  ul {
    padding: 1rem;
  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  figure {
    margin: 24px auto;
    /* next line overrides an inline style of the figure element. */
    width: 100% !important;
  }

  iframe {
    display: block;
    margin: auto;
  }


  /* Input fields styles */

  input[type="text"],
  input[type="email"],
  input[type="url"],
  input[type="tel"],
  input[type="number"],
  input[type="date"],
  textarea,
  select {
    display: block;
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    outline-color: transparent;
    transition: outline-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin: 8px 0 4px 0;

    &:focus {
      outline-color: #1f38c5;
    }
  }

  input[type="submit"] {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid #1f38c5;
    padding: 12px 36px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    color: #fff;
    background-color: #1f38c5;
  }

  /* WordPress Core Align Classes */

  @media (min-width: 420px) {
    img.aligncenter,
    img.alignleft,
    img.alignright {
      width: auto;
    }

    .aligncenter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .alignright {
      float: right;
      margin-left: 24px;
    }

    .alignleft {
      float: left;
      margin-right: 24px;
    }
  }
`;
