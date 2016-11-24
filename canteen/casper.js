phantom.outputEncoding="gbk";

var fs = require('fs');
var brower = require('brower.js');

var config = JSON.parse(fs.read('config.ini'));
phantom.addCookie(config.cookie);

var casper = require('casper').create(config.casper);
var url = config.url;

var begin_date = "20151201";
var end_date = "20151231";
var i = 0;
var items = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'];

/**
 * 改变查询的月份
 * @return Boolean 成功则true
 */
function changeDate(){
	if (i == items.length) {
		return false;
	}
	var month = items[i++];
	begin_date = '2016' + month + '01';
	end_date = '2016' + month + '31';
	return true;
}

/**
 * 循环每一个月份的数据
 */
function loopMonth(){
	casper.start(url).then(function(){
		this.echo('\n\n title is: \t\t' + this.getTitle() + '\n\n');
	});

	casper.waitForSelector('.dan', function(){
		this.echo("\n\t in waitForSelector \n");
		this.evaluate(brower.enterQueryPage);
	});

	casper.wait(3000);

	casper.then(function(){
		this.echo("\n\t select month \n");
	    this.evaluate(brower.queryMonth, begin_date, end_date);
	});

	casper.wait(3000);

	casper.then(loopPage);

	casper.run();
}

/**
 * 循环每一页的数据
 */
function loopPage(){
	var content = casper.evaluate(brower.getList);
	casper.echo("\n\n" + content + "\n\n");
	fs.write(config.dump_file, content, 'a');
	if (casper.evaluate(brower.nextPage)) {
		casper.evaluate(brower.gotoNext);
		casper.wait(3000);
		casper.then(loopPage);
	} else {
		if (changeDate()){
			loopMonth()
		}
	}
}


loopMonth()
