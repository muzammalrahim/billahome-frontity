import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import processors from "./components/styles/processors";
// import { theme } from "@chakra-ui/react";

import {
  menuHandler,
  propertiesHandler,
  mediaHandler,
  getAllpropertiesHandler,
  homecontentHandler,
} from "./utils/handlers";


const before = async ({ libraries, actions, state }) => {
  // We use html2react to process the <img> tags inside the content HTML.
  // libraries.html2react.processors.push(image);

  // Add handlers for both /players/ and /players/:name.

   libraries.source.handlers.push(menuHandler, homecontentHandler);
  // libraries.source.handlers.push(getAllProperties);
  libraries.source.handlers.push(propertiesHandler);
  libraries.source.handlers.push(mediaHandler);
  // push handler to get All-properties data
  libraries.source.handlers.push(getAllpropertiesHandler);

  await actions.source.fetch(`/menu/${92}/`);

  // libraries.source.handlers.push(myCategoriesHandler);

  // Fetch.
  //   await actions.source.fetch("menus/92");
    // console.log('menu items: ', state.source.get('menus/92'))
  // await actions.source.fetch("wp-json/wp/v2/menus/");
  // await actions.source.fetch("/menus");
};


const chakraTheme = {
  name: "frontity-chakra-theme",
  roots: {
    // In Frontity, any package can add React components to the site.
    // We use roots for that, scoped to the "theme" namespace.
    theme: Theme,
  },
  state: {
    // State is where the packages store their default settings and other
    // relevant state. It is scoped to the "theme" namespace.
    theme: {
      /**
       * The logo can be a text or an image url
       * logo : "Frontity"
       * logo: "https://uploads-ssl.webflow.com/5be00771820599586e6bd032/5be0223588110a6dbcac2d05_image.svg",
       */
      logo: "https://billahome.com/wp-content/uploads/2020/08/Logo-2.png",
      showBackgroundPattern: true,
      showSocialLinks: true,
      /**
       * socialLinks: [
            ["pinterest", "https://www.pinterest.com/frontity/"],
            ["facebook", "https://www.instagram.com/frontity/"],
            ["twitter", "https://www.twitter.com/frontity/"]
          ],
       */
      socialLinks: [],
      menu: [],
      menuUrl: "all-pages",
      featured: {
        showOnArchive: false,
        showOnPost: true,
      },

      colors: {
        primary: {
          50: "#e9f5f2",
          100: "#d4dcd9",
          200: "#bbc3be",
          300: "#a1aba5",
          400: "#87938b",
          500: "#6d7972",
          600: "#555f58",
          700: "#323c34",
          800: "#232924",
          900: "#272727",
        },
        accent: {
          50: "#ede4d3",
          100: "#fbe3b2",
          200: "#f6d086",
          300: "#f1be58",
          400: "#eca419",
          500: "#d49212",
          600: "#a5710b",
          700: "#775105",
          800: "#483100",
          900: "#1d0f00",
        },
      },

      subMenu: false,
      currentSubMenu: "",
      shouldntHide: false,
      subMenu: false,
      isSearchModalOpen: false,
      isMobileMenuOpen: false,
      autoPreFetch: "all",
    },
  },
  // Actions are functions that modify the state or deal with other parts of
  // Frontity like libraries.
  actions: {
    theme: {
      // beforeSSR: async ({ state, actions }) => {
        // await actions.source.fetch(`/menu/${state.theme.menuUrl}/`);
      // },
      showSubmenu: ({ state }) => {
        // state.theme.subMenu = !state.theme.subMenu;
        state.theme.subMenu = true;
      },
      shouldshowSubmenu:
        ({ state }) =>
        (value) => {
          if (value === "open") {
            state.theme.shouldntHide = true;
          } else if (value === "closed") {
            state.theme.shouldntHide = false;
          }
        },
      showcurrentSubMenu:
        ({ state }) =>
        (value) => {
          state.theme.currentSubMenu = value;
        },

      hideSubmenu: ({ state }) => {
        // state.theme.subMenu = !state.theme.subMenu;
        if (!state.theme.shouldntHide) {
          state.theme.subMenu = false;
        }
      },
      openMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = true;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
      openSearchModal: ({ state }) => {
        state.theme.isSearchModalOpen = true;
      },
      closeSearchModal: ({ state }) => {
        state.theme.isSearchModalOpen = false;
      },
      beforeSSR: before,
      beforeCSR: before,
    },
    
  },
  libraries: {
    html2react: {
      // Add a processor to html2react so it processes the <img> tags
      // inside the content HTML. You can add your own processors too.
      processors: [image, ...processors],
    }
  },
};

export default chakraTheme;
