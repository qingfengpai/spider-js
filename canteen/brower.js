/**
 * 参考文档: http://docs.casperjs.org/en/latest/writing_modules.html
 */

var require = patchRequire(require);

module.exports = {
	enterQueryPage: enterQueryPage,
	queryMonth: queryMonth,
	getList: getList,
	nextPage: nextPage,
	gotoNext: gotoNext
}

/**
 * 获得消费列表
 * @return String
 */
function getList(){
	var tbody = document.querySelector('.dangrichaxun').children[0];
	// 移除表头
	tbody.firstElementChild.remove();
	// 忽略最后一行
	var len = tbody.childElementCount - 1;
	var content = ''
	for (var i = 0; i < len; i++) {
		var item = tbody.children[i];
		for (var k = 0; k < 9; k++) {
			content += item.children[k].innerText + '\t';
		}
		content += '\n'
	}
	return content
}

/**
 * 进入查询页
 * @return 页面跳转
 */
function enterQueryPage(){
	document.form1.submit();
}

/**
 * 查询某一月的数据
 * @param  String begin ps:'20160101'
 * @param  String end   ps:'20160131'
 * @return 页面跳转，进入消费列表页
 */
function queryMonth(begin, end){
	document.querySelector('#inputStartDate').value = begin;
	document.querySelector('#inputEndDate').value = end;
	document.form1.submit();
}

/**
 * 是否有下一页
 * @return Object/null
 */
function nextPage(){
	var next = document.querySelector("a[href='javascript:button14_Onclick();']");
	return next;
}

/**
 * 点击进入下一页
 * @return 页面跳转
 */
function gotoNext(){
	button14_Onclick();
}
