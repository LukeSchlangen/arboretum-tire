var scraper = require('website-scraper');
var options = {
  urls: ['http://arboretumtireandauto.com/'],
  directory: './public',
};

// with callback
scraper.scrape(options, function (error, result) {
    /* some code here */
});

// or with promise
scraper.scrape(options).then(function (result) {
    /* some code here */
});
