const axios = require("axios");
const cheerio = require("cheerio");
const error = require("../exceptions/urlError");
//get webistes url
exports.getUrls = async (req, res, next) => {
  const url = req.query.address;
  if (url?.toLowerCase().indexOf(".com") === -1)
    return next(new Error("Invalid url"));
  const _url = "https://www." + url;
  async function scrapeData() {
    try {
      if (url) {
        // Fetch HTML of the page we want to scrape
        const { data } = await axios.get(_url);
        // Load HTML we fetched in the previous line
        const $ = cheerio.load(data);
        //get the title of the page
        let title = $("title").text();
        console.log("sdksdhksdhk" + title);
        if (!title) return next(new Error("Invalid url"));
        const list = `<ul><li>${title}</li></ul>`;
        const h = cheerio.load(list);
        res.send(h.html());
      } else {
        res.send(
          "type url in search bar and parse title of that website like is base url?address=name of website"
        );
      }
    } catch (err) {
      next(new Error(err.message));
    }
  }
  // Invoke the above function
  scrapeData();
};
