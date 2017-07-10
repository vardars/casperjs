var casper = require('casper').create({
    pageSettings: {
        loadImages: false,
        loadPlugins: true,
        userAgent: 'Mozilla/5.0 (Windows; U; Windows NT 5.1; nl; rv:1.9.1.6) Gecko/20091201 Firefox/3.5.6'
    }
});

var url = "http://casperjs.org/";

casper.start(url).then(function() {
     casper.capture('casperjs.png');
     casper.echo('file saved');
     casper.exit();
});

casper.run();