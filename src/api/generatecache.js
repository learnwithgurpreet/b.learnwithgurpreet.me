const fetch = require("node-fetch");

export default function generateCache() {
  let url = "https://www.learnwithgurpreet.com/feed/feed.json";

  let settings = { method: "Get" };

  fetch(url, settings)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
    });
}
