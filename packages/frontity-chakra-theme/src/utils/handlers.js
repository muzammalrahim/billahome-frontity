export const menuHandler = {
  name: "menus",
  priority: 10,
  pattern: "/menu/:slug",
  func: async ({ link,route, params, state, libraries }) => {
    const { api } = libraries.source;
    console.log("PARAMS:", params);
    const { slug } = params;

    // 1. fetch the data you want from the endpoint page
    // const menuList = await libraries.source.api.get({
      // endpoint: "menu-items",
      // params: {
        // menus: params.id,
        // per_page: 100, // To make sure we get all elements
      // },
    // });

    const response = await libraries.source.api.get({
      endpoint: `/menus/v1/menus/${slug}`,
    });

// 
    // const items = await libraries.source.populate({
      // response: menuList,
      // state
    // });

   // Parse the JSON to get the object
   const menuData = await response.json();
  
    // Add the menu items to source.data
    const menu = state.source.data[link];
    console.log(link);
    Object.assign(menu, {
      items: menuData.items,
      isMenu: true,
    });


    // 2. get an array with each item in json format
    // const items = await response.json();

    // 3. add data to source
    // const currentPageData = state.source.data[route];

    // Object.assign(currentPageData, {
      // id,
      // items: items,
      // isMenu: true,
    // });
  },
};


export const propertiesHandler = {
  name: "properties",
  priority: 18,
  pattern: "/latest-properties/:per_page",
  func: async ({ route, params, state, libraries }) => {
    const { api } = libraries.source;
    const { id } = params;

    // 1. fetch the data you want from the endpoint page
    const response = await api.get({
      endpoint: "properties",
      params: {
        per_page: params.per_page ? params.per_page : 6, // To make sure we get all elements
        _embed: true,
      },
    });

    // 2. get an array with each item in json format
    const items = await response.json();

    // 3. add data to source
    const currentPageData = state.source.data[route];

    Object.assign(currentPageData, {
      id,
      items,
    });
  },
};

