import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import { connect, Head } from "frontity";
import Switch from "@frontity/components/switch";
import React from "react";
import Archive from "./archive";
import Footer from "./footer";
import Header from "./header";
import Loading from "./loading";
import Page404 from "./page404";
import Post from "./post/post";
import SearchResults from "./search";
import Title from "./title";
import FontFace from "./styles/font-face";
import About from "./header/About"
import Faqs from "./header/Faqs"
import Agent from "./blog/agent"
import ContactComp from "./header/ContactComp"
import Search from "./serch-result/search";

import AllPropertiesArchive from "./archive/AllPropertiesArchive"

// add cutom css by taimoor
import { Global, css } from "frontity";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import faqsCss from "./styles/wp-site/faqs.min.css";
import baseTheme from "./styles/wp-site/base.min.css";
import mainCss from "./styles/wp-site/main.css";
import helperCSS from "./styles/wp-site/main.min.css";
import contactCSS from "./styles/wp-site/contact.css";
import MainCss from "./styles/wp-site/index.css";



// Theme is the root React component of our theme. The one we will export
// in roots.
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  const overrides = extendTheme({
    fonts: {
      heading: "Kelson, system-ui, Helvetica, sans-serif"
    },
    colors: { ...state.theme.colors }
  });

  return (
    <ChakraProvider theme={{ ...overrides }}>

  
  <Global styles={css(bootstrap)} />
  <Global styles={css(mainCss)} />
  <Global styles={css(baseTheme)} />
  <Global styles={css(helperCSS)} />
  <Global styles={css(faqsCss)} />
  <Global styles={css(contactCSS)} />



   <FontFace />
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>

      {/* Add the header of the site. */}
      <Header />

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Box
        as="main"
        mt={{ base: "40px", md: "70px" }}
        minH="calc(100vh - 320px)"
        className="block-head-1 magazine2"
        bg="#ffffff"
      >
        <Switch>

          <Search when={data.link===`/all-properties/`} />
          <About when={data.link==='/about/'} />
          <Faqs when={data.link==='/faqs/'} />
          <ContactComp when={data.link==='/contact/'} />
          <Agent when={data.link === "/agents/"} />
          <AllPropertiesArchive when={data.link === "/all-properties/"} />
          <Loading when={data.isFetching} />
          <SearchResults when={data.isSearch} />
          <Archive when={data.isArchive} />
          <Post when={data.isPostType} />
          <Page404 when={data.is404} />
        </Switch>
      </Box>

      <Footer />
    </ChakraProvider>
  );
};

export default connect(Theme);
