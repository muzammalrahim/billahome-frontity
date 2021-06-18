import React, {useEffect} from "react";
import {connect} from "frontity"
import { getPostData, formatPostData } from "../helpers";
import FeaturedMedia from "../post/featured-media";

 const Agent = ({ state, actions, libraries }) => {
  const postData = getPostData(state);
     const post = formatPostData(state, postData);
     
       useEffect(() => {
         actions.source.fetch("/agents");
       }, []);
     
     console.log(post)
   return (
     <div>
       {post?.featured_media != null && (
         <FeaturedMedia id={post?.featured_media?.id} />
       )}
       <section className="top-head">
         <div className="container">
           <div className="page-title-wrap">
             <ol className="breadcrumb">
               <li>
                 <a className="home-e" href="#">
                   Home
                 </a>
               </li>
               <li>Career Opportunities</li>
             </ol>
           </div>
         </div>
       </section>
       <div className="container">
         <div className="wrapper">
           <div className="career-blog">
             <img
               src="https://billahome.com/wp-content/uploads/2021/06/meeting-1245776_1920-1024x683.jpg"
               width="100%"
             />
             <br />
             <br />
             <h4>Hang your license with us </h4>
             <p>
               It’s an exciting time for our company and an excellent time for
               you to join our team. Whether you’re a seasoned real estate pro
               or just getting started, we’re confident you’ll use your
               skills,learn new things, and enjoy your carrer at Billahome. Join
               us today!
             </p>
             <h4>About our business </h4>
             <p>
               Billahome is Real Estate Company head quartered in State of
               Washington, Now, we are serving state of Washington for Real
               Estate full service (listing, selling, seller’s &amp; buyer’s
               agent).
             </p>
             <h4>Our mission statement</h4>
             <p>
               Your success, best client service &amp; satisfaction are our
               goal.
             </p>
             <h4>Our modern technology</h4>
             <p>
               Our experienced team will support agent who just started or agent
               who wants to get into commercial brokerage (business opportunity,
               commercial investment properties, gas station, motel, hotels), we
               will train you at no cost to you and we will make sure we will
               get you there.
             </p>
             <h4>100% commission, make more money with us!</h4>
             <p>
               Join a successful 100% commission real estate brokerage in
               Washington and start keeping your real estate commission!
               Billahome Corp offers an extensive list of benefits for our top
               real estate brokers. Strong leadership, innovation, and our
               ability to understand agent and client needs are the keys to our
               success. Our technology, training, education, support and leading
               100% commission program allow our agents to make more money and
               spend quality time with their clients and families.
               <br />
               <br />
               Whether you are new or experienced, we want to talk with you. Not
               licensed and need to renew
               <br />
               <br />
               Call or email us today for more information or appointment
               <br />
               <br />
               Billahome Recruit Team
               <br />
               <br />
               contact@billahome.com
               <br />
               <br />
               206)304-1099
             </p>
             <br />
           </div>
           <div>
             <div className="career-search-btn">
               <input
                 className="Search-Bar"
                 type="text"
                 placeholder="Search.."
                 name="search"
               />
               <button className="career-s-btn" type="button">
                 Search
               </button>
             </div>
             <div className="recent-post-career">
               <h3>Recent Posts</h3>
               <br />
               <a className="archives-career-e" href="#">
                 9 Advises From Experts On House
                 <br /> Purchase Financing
               </a>
               <br />
               <br />
               <a className="archives-career-e" href="#">
                 Shopping for mortgage company is so
                 <br />
                 important when you buying a property
               </a>
               <br />
               <br />
               <a className="archives-career-e" href="#">
                 You better shopping around for better <br />
                 Mortgage Rates
               </a>
               <br />
               <br />
               <a className="archives-career-e" href="#">
                 Home Inspection Contingency is very
                 <br />
                 import!
               </a>
               <br />
               <br />
               <a className="archives-career-e" href="#">
                 Understanding Short Sale Deal And What
                 <br />
                 Are The Advantages?
               </a>
             </div>
             <div className="recent-comments-career">
               <h3>Recent Comments</h3>
             </div>
             <div className="career-search-btn-bt">
               <h3>Blog Search</h3>
               <br />
               <input
                 className="Search-Bar"
                 type="text"
                 placeholder="Search.."
                 name="search"
               />
               <button className="career-s-btn" type="button">
                 Search
               </button>
             </div>
             <div className="archives-career">
               <h3>Archives</h3>
               <br />
               <div className="archives-career-t">
                 <a className="archives-career-e" href="#">
                   June 2021
                 </a>
                 <br />
                 <a className="archives-career-e" href="#">
                   June 2021
                 </a>
               </div>
             </div>
             <div className="recent-comments-career">
               <h3>Recent Comments</h3>
             </div>
             <div className="tags-career">
               <h3>Recent Comments</h3>
               <br />
               <br />
               <a className="tags-career-e">
                 Advises From Experts House Purchase
               </a>
             </div>
           </div>
         </div>
       </div>
     </div>
   );
 };

export default connect(Agent)