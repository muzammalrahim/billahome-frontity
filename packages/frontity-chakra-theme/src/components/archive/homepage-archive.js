import { Box, Heading, Button , Center, ButtonGroup, SimpleGrid } from "@chakra-ui/react";
import { connect } from "frontity";
import React, { useEffect, useState } from "react";
import { FeaturedPostSection } from "../featured-post/featured-post";
import { formatPostData, splitPosts } from "../helpers";
import { Newsletter } from "../newsletter";
import ArchiveItem from "./archive-item";
import { PaginationButton } from "./pagination";
import Propertyview from './property-view'

const HomepageArchive = ({ state, libraries, actions }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  const [firstThreePosts, othersPosts] = splitPosts(state, data.items);

  const [recentlyAddedItems, setRecentlyAdded] = useState([]);
  const [pageRecentlyAdded, setPageRecentlyAdded] = useState(1);

  let allProperties = '';
  useEffect( async() => {
    await actions.source.fetch(`/latest-properties/${pageRecentlyAdded}`);
    await actions.source.fetch(`/media/`);
    allProperties = state.source.get(`/latest-properties/${pageRecentlyAdded}`);
    setRecentlyAdded(allProperties)
    setPageRecentlyAdded(pageRecentlyAdded + 1)
  }, [])

  return (
    <Box bg="accent.50" as="section">
      <FeaturedPostSection
        data={firstThreePosts.map((post) => formatPostData(state, post))}
      />
      <Box
        py={{ base: "64px", md: "80px" }}
        px={{ base: "24px", md: "40px" }}
        width={{ base: "auto", lg: "80%" }}
        maxWidth="1200px"
        mx="auto"
      >
        <Heading textAlign="center">
          {" "}
          Welcome To BillaHome For Home Owners Around The World!
        </Heading>
        <Center textAlign="center">
          For sale properties, vacation homes, short & long term rental
          properties, apartment, guest houses and home stay properties, list it
          all here! Welcome home owners, real estate brokers and property
          managers.
        </Center>

        <Heading textAlign="center">
          Save Huge Listing and Membership Fees With Us
        </Heading>
        <Center textAlign="center">
          Free unlimited listings and membership!
        </Center>
        <Center>
          <Button colorScheme="yellow">Let's Get Started</Button>
        </Center>
        <Heading textAlign="center" fontSize={{ base: "4xl", md: "6xl" }}>
          Recently Added Properties
        </Heading>
        <SimpleGrid
          mt={{ base: "64px", md: "80px" }}
          columns={{ base: 1, md: 3 }}
          spacing="40px"
        >
          {console.log(recentlyAddedItems)}
          {recentlyAddedItems?.items?.map((item) => {
            console.log("item object :",item)
            // const item = state.source[type][id];
            // return <Propertyview item={item} />;
          })}
        </SimpleGrid>

        <PaginationButton mt="40px" link="/page/2">
          More posts
        </PaginationButton>
        {/* <Heading textAlign="center" fontSize={{ base: "4xl", md: "6xl" }}>
          Real Estate Articles & News
        </Heading>
        <SimpleGrid
          mt={{ base: "64px", md: "80px" }}
          columns={{ base: 1, md: 4 }}
          // spacing="40px"
        >
          {data.items.map(({ type, id }) => {
            const item = state.source[type][id];
            return <ArchiveItem key={item.id} item={item} />;
          })}
        </SimpleGrid> */}
        <Heading
          as="h4"
          textAlign="center"
          fontSize={{ base: "4xl", md: "6xl" }}
        >
          Real Estate Articles & News
        </Heading>
        <SimpleGrid
          mt={{ base: "64px", md: "80px" }}
          columns={{ base: 1, md: 4 }}
          spacing="10px"
        >
          {data.items.map(({ type, id }) => {
            const item = state.source[type][id];
            return <ArchiveItem key={item.id} item={item} />;
          })}
        </SimpleGrid>
      </Box>
      {libraries.newsletter && (
        <Newsletter showPattern={state.theme.showBackgroundPattern} />
      )}
    </Box>
  );
};

export default connect(HomepageArchive);
