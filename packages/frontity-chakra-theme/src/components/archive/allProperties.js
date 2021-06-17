import { Box, Flex, Heading, Badge, Image, Icon } from "@chakra-ui/react";
import React from "react";
import { PostImageWithOverlay } from "../featured-post/components";
import Link from "../link";
import PostCategories from "../post/post-categories";

const AllProperty = ({title, excerpt, featured_media, link, extra_data, meta }) => {
  return (
    <Flex
      direction="column"
      position="relative"
      bg="white"
      as="article"
      shadow="md"
      //   {...rest}
    >
      {/* Use the frontity settings for featuredPost here */}
      {featured_media && (
        <Link link={link}>
          <Image src={extra_data["wp:featuredmedia"][0].source_url} />
        </Link>
      )}

      <Flex p="40px" flexGrow="1" direction="column">
        {/* <Heading fontSize="2xl" as="h4" textTransform="uppercase">
          <Link link={link}>{title.rendered}</Link>
        </Heading> */}
        <Box
          my="20px"
          flex="1"
          color="gray.700"
          // dangerouslySetInnerHTML={{ __html: excerpt.rendered }}
        >
          
        {/*<Badge>{extra_data["wp:term"][1][0]?.name}</Badge>{" "}
          <Badge> {extra_data["wp:term"][3][0]?.name}</Badge>*/}
          <br />
          {meta?.fave_property_address}
          <br />
          ${meta?.fave_property_price}
          <br />
          BedRooms: {meta?.fave_property_bedrooms} BathRooms:{" "}
          {meta?.fave_property_bathrooms}
          <br />
          Area: {meta?.fave_property_size} {meta?.fave_property_size_prefix}
        </Box>
        {/* <PostCategories
          color="black"
          justify="flex-start"
          categories={categories}
        /> */}
      </Flex>
    </Flex>
  );
};

export default AllProperty;
