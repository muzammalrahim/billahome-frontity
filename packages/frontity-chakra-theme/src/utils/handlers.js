export const menuHandler = {
  name: "sitemenus",
  priority: 10,
  pattern: "menus/:id",
  func: async ({ route, params, state, libraries }) => {
    const { api } = libraries.source;
    const { id } = params;

    // 1. fetch the data you want from the endpoint page
    const menuList = await libraries.source.api.get({
      endpoint: "menu-items",
      params: {
        menus: params.id,
        per_page: 100, // To make sure we get all elements
      },
    });

    const items = await libraries.source.populate({
      response: menuList,
      state
    });

    // 2. get an array with each item in json format
    // const items = await response.json();

    // 3. add data to source
    const currentPageData = state.source.data[route];

    Object.assign(currentPageData, {
      id,
      items: items,
      isMenu: true,
    });
  },
};



