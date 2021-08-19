import * as api from "../api";

export const fetchCategories = (category) => async (dispatch) => {
  try {
    const res = await Promise.all([
      api.fetchCategories(),
      api.fetchContents(category),
    ]);

    if (res[0].status === 200 && res[1].status === 200) {
      const { categories } = res[0].data;
      const { data } = res[1].data;

      const activeCat = categories.filter((cat) => cat.catName === category)[0];
      const contents = data;
      dispatch({
        type: "FETCH_CATEGORIES",
        payload: { categories, activeCat, contents },
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const filterSubcategories = (data) => async (dispatch) => {
  dispatch({ type: "SET_FILTERS", payload: data });
};
