const menuHandler = {
  name: "menus",
  priority: 10,
  pattern: "menus/:id",
  func: async ({ route, params, state, libraries }) => {
    const { api } = libraries.source;
    const { id } = params;

    // 1. fetch the data you want from the endpoint page
    const response = await api.get({
      endpoint: "menu-items",
      params: {
        menus: id,
        per_page: 100, // To make sure we get all elements
      },
    });

    // 2. get an array with each item in json format
    const items = await response.json();

    // 3. add data to source
    const currentPageData = state.source.data[route];

    Object.assign(currentPageData, {
      id,
      items,
      isMenu: true,
    });
  },
};

const propertiesHandler = {
  name: "properties",
  priority: 10,
  pattern: "/allproperties",
  func: async ({ route, params, state, libraries }) => {
    const { api } = libraries.source;
    const { id } = params;

    // 1. fetch the data you want from the endpoint page
    const response = await api.get({
      endpoint: "property",
      params: {
        per_page: params.page ? params.page : 5, // To make sure we get all elements
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

