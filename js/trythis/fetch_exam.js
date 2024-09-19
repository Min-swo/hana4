const POST_URL = "https://jsonplaceholder.typicode.com/posts";

export async function getPosts(userId) {
  const myFetch = async (path) => {
    const res = await fetch(`${POST_URL}/${path}`);
    return res.json();
  };

  const originPosts = await myFetch(`?userId=${userId}`);

  // console.log("🚀 ~ getPosts ~ originPosts:", originPosts);

  const commentUrls = [];
  for (let i = 0; i < originPosts?.length; i++) {
    const { id: postId } = originPosts[i];
    commentUrls.push(`/${postId}/comments`);
  }

  const originComments = await Promise.all(commentUrls.map(myFetch));
  console.log("🚀 ~ getPosts ~ originComments:", originComments);

  const posts = [];
  for (let i = 0; i < originPosts.length; i++) {
    const { id, title } = originPosts[i];

    const comments = [];
    for (let j = 0; j < originComments[i].length; j++) {
      const { postId, id, email, body } = originComments[i][j];
      comments.push({ postId: postId, id: id, email: email, body: body });
    }

    posts.push({
      postId: id,
      title: title,
      comments: comments,
    });
  }

  return posts;
}

const posts = await getPosts(1);
console.log(posts?.length);
// console.log(posts[0]);

import assert from "assert";

assert.strictEqual(posts?.length, 10);
assert.strictEqual(posts?.at(-1)?.comments?.length, 5);
assert.deepStrictEqual(posts[0], {
  postId: 1,
  title:
    "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  comments: [
    {
      postId: 1,
      id: 1,
      email: "Eliseo@gardner.biz",
      body:
        "laudantium enim quasi est quidem magnam voluptate ipsam eos\n" +
        "tempora quo necessitatibus\n" +
        "dolor quam autem quasi\n" +
        "reiciendis et nam sapiente accusantium",
    },
    {
      postId: 1,
      id: 2,
      email: "Jayne_Kuhic@sydney.com",
      body:
        "est natus enim nihil est dolore omnis voluptatem numquam\n" +
        "et omnis occaecati quod ullam at\n" +
        "voluptatem error expedita pariatur\n" +
        "nihil sint nostrum voluptatem reiciendis et",
    },
    {
      postId: 1,
      id: 3,
      email: "Nikita@garfield.biz",
      body:
        "quia molestiae reprehenderit quasi aspernatur\n" +
        "aut expedita occaecati aliquam eveniet laudantium\n" +
        "omnis quibusdam delectus saepe quia accusamus maiores nam est\n" +
        "cum et ducimus et vero voluptates excepturi deleniti ratione",
    },
    {
      postId: 1,
      id: 4,
      email: "Lew@alysha.tv",
      body:
        "non et atque\n" +
        "occaecati deserunt quas accusantium unde odit nobis qui voluptatem\n" +
        "quia voluptas consequuntur itaque dolor\n" +
        "et qui rerum deleniti ut occaecati",
    },
    {
      postId: 1,
      id: 5,
      email: "Hayden@althea.biz",
      body:
        "harum non quasi et ratione\n" +
        "tempore iure ex voluptates in ratione\n" +
        "harum architecto fugit inventore cupiditate\n" +
        "voluptates magni quo et",
    },
  ],
});
