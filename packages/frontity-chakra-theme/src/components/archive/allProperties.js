import { Box, Flex, Heading, Badge, Image, Icon,SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { PostImageWithOverlay } from "../featured-post/components";
import Link from "../link";
import PostCategories from "../post/post-categories";

const AllProperty = ({ title, featured_media, link, extra_data, meta }) => {
  return (
    <Flex
      direction="column"
      position="relative"
      bg="white"
      as="article"
      shadow="md"
      //   {...rest}
    >
      <div className="item-of-header">
        {/* Use the frontity settings for featuredPost here */}
        {featured_media && (
          <Link link={link}>
            <Image
              className="listing-img"
              src={extra_data["wp:featuredmedia"][0]?.source_url}
            />
          </Link>
        )}
        <div className="listing-img-label">
         {extra_data["wp:term"][1][0]?.name !== undefined && <Badge class="listing-img-label-text">
            {extra_data["wp:term"][1][0]?.name}
          </Badge>}
         {extra_data["wp:term"][3][0]?.name !== undefined &&  <Badge class="listing-img-label-text">
            {extra_data["wp:term"][3][0]?.name}
          </Badge>}
        </div>

        <div className="listing-price-labelTwo">
          <ul className="listing-price-labelTwo-ul">
            <li className="listing-img-price">
              ${meta?.fave_property_price} {"/"}{" "}
              {meta?.fave_property_price_postfix}
            </li>
          </ul>
        </div>
      </div>
      <Flex pl="19px" flexGrow="1" direction="column">
        {/* <Heading fontSize="2xl" as="h4" textTransform="uppercase">
          <Link link={link}>{title.rendered}</Link>
        </Heading> */}
        <Box
          my="20px"
          flex="1"
          color="gray.700"
          // dangerouslySetInnerHTML={{ __html: excerpt.rendered }}
        >
        <h2 class="listing-item-title">
        <a href={link}>{title}</a>
      </h2>
          
          {meta?.fave_property_address}
          <br />
          BedRooms: {meta?.fave_property_bedrooms}
          {",  "} BathRooms: {meta?.fave_property_bathrooms}
          <br />
          Area: {meta?.fave_property_size} {meta?.fave_property_size_prefix}
          <br />
        
          <div className="row">
          <div  className="col-8">
          <h6>{extra_data["wp:term"][0][0]?.name}</h6>  
          </div>
          <div  className="col-4">
          <a className="btn btn-primary listing-btn-details" href={link}> Details  </a>
          </div>
          </div>
          
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
