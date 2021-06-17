import React, {useEffect} from 'react'
import { getPostData, formatPostData } from "../helpers";
import { connect } from "frontity"
import List from '../archive'

const Search = ({ state, actions, libraries }) => {
     

   const postData = getPostData(state);
     const post = formatPostData(state, postData);
    const Html2React = libraries.html2react.Component;
    
     useEffect(async() => {
         await actions.source.fetch("/latest-properties");
         allProperties = state.source["/latest-properties"].items
         console.log('lalalalalal', allProperties)
     }, []);

   console.log("serceh results", postData);
   return <div>In progres components</div>;
 };

export default connect(Search)