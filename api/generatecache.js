const fetch = require("node-fetch");

export default function generateCache(req, res) {
  let url = "https://www.learnwithgurpreet.com/feed/feed.json";

  let settings = { method: "Get" };

  fetch(url, settings)
    .then((res) => res.json())
    .then((json) => {
      const { items } = json;
      items.map((item) => {
        fetch(item.url, settings).then((data) =>
          response.push({
            url: item.url,
            status: data.status,
          })
        );
      });
      return res.send("done");
    });
}
