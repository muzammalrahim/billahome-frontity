import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Button,
  Center,
  ButtonGroup,
  SimpleGrid,
} from "@chakra-ui/react";
import List from "./archive";
import { connect } from "frontity";
import Propertyview from "./property-view";
import { FeaturedPostSection } from "../featured-post/featured-post";
import { formatPostData, splitPosts } from "../helpers";
import AllProperty from "./allProperties";
import SearchBar from "../header/SearchBar";

import { ChevronLeftIcon } from "@chakra-ui/icons";
import { ChevronRightIcon } from "@chakra-ui/icons";

const AllPropertiesArchive = ({ state, actions, libraries }) => {
  const data = state.source.get(state.router.link);

  const [firstThreePosts, othersPosts] = splitPosts(state, data.items);

  const [currentlyAddedItemsFromState, setcurrentlyAddedItemsFromState] =
    useState([]);
  const [NavigateToPageNo, setNavigateToPageNo] = useState(1);

  let allProperties = "";

  useEffect(async () => {
    await actions.source.fetch(`/properties/${NavigateToPageNo}`);
    allProperties = state.source.get(`/properties/${NavigateToPageNo}`).items;
    setcurrentlyAddedItemsFromState(allProperties);
  }, []);

  const PreviousPage = async () => {
    await actions.source.fetch(`/properties/${NavigateToPageNo - 1}`);
    allProperties = state.source.get(
      `/properties/${NavigateToPageNo - 1}`
    ).items;
    setcurrentlyAddedItemsFromState(allProperties);
    setNavigateToPageNo(NavigateToPageNo - 1);
  };
  const NextPage = async () => {
    await actions.source.fetch(`/properties/${NavigateToPageNo + 1}`);
    allProperties = state.source.get(
      `/properties/${NavigateToPageNo + 1}`
    ).items;
    setcurrentlyAddedItemsFromState(allProperties);
    setNavigateToPageNo(NavigateToPageNo + 1);
  };

  return (
    <Box bg="accent.50" as="section">
      <SearchBar />
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
          {currentlyAddedItemsFromState?.map(
            ({
              title,
              link,
              excerpt,
              featured_media,
              _embedded,
              property_meta,
            }) => {
              return (
                <>
                  <AllProperty
                    title={title.rendered}
                    link={link}
                    excerpt={excerpt}
                    featured_media={featured_media}
                    extra_data={_embedded}
                    meta={property_meta}
                  />
                </>
              );
            }
          )}
        </SimpleGrid>
        <Center m="40px">
          <button  disabledCSS className="buyPropertyNavigation" onClick={() => PreviousPage()}>
            {" "}
            <ChevronLeftIcon m={2} w={10} h={10} color="#fab93e" />
          </button>
             <button className="buyPropertyNavigationBtn">{NavigateToPageNo}</button>
             <button className="buyPropertyNavigationBtn">{NavigateToPageNo+1}</button>
             <button className="buyPropertyNavigationBtn">{NavigateToPageNo+2}</button>
             <button className="buyPropertyNavigationBtn">{NavigateToPageNo+3}</button>
          <button className="buyPropertyNavigation" onClick={() => NextPage()}>
            {" "}
            <ChevronRightIcon m={2} w={10} h={10} color="#fab93e" />
          </button>
        </Center>
      </Box>
    </Box>
  );
};

export default connect(AllPropertiesArchive);
