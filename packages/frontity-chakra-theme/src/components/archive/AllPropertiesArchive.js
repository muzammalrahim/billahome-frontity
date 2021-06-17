import React, {useEffect, useState} from "react";
import { Box, Heading, Button , Center, ButtonGroup, SimpleGrid } from "@chakra-ui/react";
import List from './archive'
import { connect } from "frontity";
import Propertyview from './property-view'
import { FeaturedPostSection } from "../featured-post/featured-post";
import { formatPostData, splitPosts } from "../helpers";
import AllProperty from "./allProperties";
import SearchBar from "../header/SearchBar"
import Pagination from "./pagination";


const AllPropertiesArchive = ({ state, actions, libraries })=>{

 const data = state.source.get(state.router.link);

  const [firstThreePosts, othersPosts] = splitPosts(state, data.items);
  const [recentlyAddedItems, setRecentlyAdded] = useState([]);
  const [pageRecentlyAdded, setPageRecentlyAdded] = useState(3633);
  const [newItemAdded, setNewItemAdded] = useState([]);

  let allProperties = '';

  useEffect( async() => {
    await actions.source.fetch(`/properties`);
    allProperties = state.source.get(`/properties`).items;
    setRecentlyAdded(allProperties)
  }, [])



console.log("all properties",recentlyAddedItems)
return (
  <Box bg="accent.50" as="section">
   <SearchBar/>
      <Box
        py={{ base: "64px", md: "80px" }}
        px={{ base: "24px", md: "40px" }}
        width={{ base: "auto", lg: "80%" }}
        maxWidth="1200px"
        mx="auto"
      >
  <SimpleGrid
  mt={{ base: "64px", md: "80px" }}
  columns={{ base: 1, md: 3 }}
  spacing="20px"
>

  {recentlyAddedItems?.map(
    ({ title, link, excerpt, featured_media, _embedded, property_meta }) => {
      return (<>
        <AllProperty
          title={title}
          link={link}
          excerpt={excerpt}
          featured_media={featured_media}
          extra_data={_embedded}
          meta= {property_meta}
        />
       
        </>
      );

    }
  )}
</SimpleGrid>
<Pagination mt="56px" />
</Box>
</Box>
)

}

export default connect(AllPropertiesArchive)