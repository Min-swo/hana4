const BASE_URL = "https://jsonplaceholder.typicode.com";

const myFetch = async (path) => {
  const res = await fetch(`${BASE_URL}/${path}`);
  return res.json();
};

const getUserPostsUnParralel = async (userId) => {
  const { id, name } = await myFetch(`users/${userId}`);
  const posts = await myFetch(`posts?userId=${userId}`);
  return { id, name, posts };
};

const getUserPostsParralel = async (userId) => {
  const [user, posts] = await Promise.all([
    myFetch(`users/${userId}`),
    myFetch(`posts?userId=${userId}`),
  ]);
  const { id, name } = user;
  return { id, name, posts };
};

console.log("🚀 ~ getUserPosts:", await getUserPostsUnParralel(1));
// console.log("🚀 ~ getUserPosts:", await getUserPostsParralel(1));
