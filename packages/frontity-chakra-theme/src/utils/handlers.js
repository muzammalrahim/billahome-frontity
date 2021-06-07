export const getAllProperties = {
  name: "slider-posts",
  priority: 7,
  pattern: "/all-properties/",
  func: async ({ route, params, state, libraries }) => {
    // 1. get all sidebars
    const postResponse = await libraries.source.api.get({
      endpoint: "posts",
      params: {
        per_page: 20, // To make sure you get all of them
        _embed: true
      }
    });
    //console.log('sidebarList: ', sidebarList);

    // 2. add everything to the state.
    const items = await libraries.source.populate({
      response: postResponse,
      state
    });

    // console.log('siderbar: ', items);

    const total = libraries.source.getTotal(postResponse);
    const totalPages = libraries.source.getTotalPages(postResponse);

    // 3. add info to data
    Object.assign(state.source.data[route], {
      id: 1,
      items: items,
      totalPages,
      total
    });
  }
};

export const getAllPosts = {
  name: "allPosts",
  priority: 7,
  pattern: "/all-posts/:categories/:page",
  func: async ({ route, params, state, libraries }) => {
    // 1. get all sidebars
    const postResponse = await libraries.source.api.get({
      endpoint: "posts",
      params: {
        categories: params.categories,
        per_page: 4, // To make sure you get all of them
        page: params.page,
        _embed: true
      }
    });
    //console.log('sidebarList: ', sidebarList);

    // 2. add everything to the state.
    const items = await libraries.source.populate({
      response: postResponse,
      state
    });

    // console.log('siderbar: ', items);

    const total = libraries.source.getTotal(postResponse);
    const totalPages = libraries.source.getTotalPages(postResponse);

    // 3. add info to data
    Object.assign(state.source.data[route], {
      id: 1,
      items: items,
      totalPages,
      total
    });
  }
};





/*
export const myCategoriesHandler = {
  pattern: "/category/(.*)?/:slug",
  func: async ({ route, params, state, libraries }) => {
    // Get the page of the current route.
    const { page } = libraries.source.parse(route);

    // Get the id of the parent category.
    const parentCatResponse = await libraries.source.api.get({
      endpoint: "categories",
      params: { slug: params.slug }
    });
    const [parentCat] = await libraries.source.populate({
      state,
      response: parentCatResponse
    });

    // Get the ids of all the child categories.
    const childCatsResponse = await libraries.source.api.get({
      endpoint: "categories",
      params: { parent: parentCat.id }
    });
    const childCats = await libraries.source.populate({
      state,
      response: childCatsResponse
    });
    const ids = childCats.map(cat => cat.id);
    ids.push(parentCat.id);

    // Get the posts from those categories.
    const postsResponse = await libraries.source.api.get({
      endpoint: "posts",
      params: {
        categories: ids.join(","),
        page,
        per_page: 5,
        _embed: true }
    });
    const items = await libraries.source.populate({
      state,
      response: postsResponse
    });
    const total = libraries.source.getTotal(postsResponse);
    const totalPages = libraries.source.getTotalPages(postsResponse);

    // Populate state.source.data with the proper info about this URL.
    Object.assign(state.source.data[route], {
      id: parentCat.id,
      taxonomy: "category",
      items,
      total,
      totalPages,
      isArchive: true,
      isTaxonomy: true,
      isCategory: true
    });
  }
};*/
