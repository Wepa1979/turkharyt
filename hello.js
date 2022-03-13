const axios = require('axios');
const jsdom = require('jsdom');
const {JSDOM} = jsdom;




global.utm="";
global.baha="";


// URL of the page we want to scrape
const url = "https://www.lcwaikiki.com/tr-TR/TR/urun/LC-WAIKIKI/erkek/Kazak/5605326/2322591";








(async () => {
 const html = await axios.get(url);
 const dom = new JSDOM(html.data);

 const title = dom.window.document.querySelector('h1');

 if (title) {
   console.log(title.textContent)
 }
})();




//app.get('/:id', function(req, res) {
	//scrapeData("'"+req.param("id")+"'")
	
  //res.send(utm+"");    
//});

//app.listen(9000);