import { config } from "./conf";
export const getPage = async (next) => {
  try {
    const response = await fetch(`${config.BASE_URL}/people/next/${next}`);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    return { error: response.error };
  } catch (error) {
    return { error };
  }
};

export const getPeople = async (id) => {
  try {
    const response = await fetch(`${config.BASE_URL}/people/${id}`);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    return { error: response.error };
  } catch (error) {
    return { error };
  }
};
