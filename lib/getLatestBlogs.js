import axios from "axios";

const getLatestBlogs = async (data) => {

  try {
    const username = data.mediumUsername;
    const res = await axios.get(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`
    );
    let blogs = res.data.items;
    let latestSixBlogs = blogs.splice(0, 6);
    return latestSixBlogs;
  } catch (err) {
    console.log(err);
  }
};

export default getLatestBlogs;
