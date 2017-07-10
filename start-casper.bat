@echo off
cls
node_modules\phantomjs-prebuilt\lib\phantom\bin\phantomjs node_modules\casperjs\bin\bootstrap.js --casper-path=node_modules\casperjs --cli %1