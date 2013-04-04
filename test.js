$(document).ready(function(){
	var url = window.location.href;
	var p = /www.haodou.com\/recipe\/[0-9]+/i;
	if(!p.test(url)){
		return;
	}
	$('<ul id="TR_fix_menu_list"><li><a href="javascript:;">抓取</a></li></ul>').delegate('li','click',function(){
        test();
    }).appendTo('body');
})

function test(){
	var title = $('#stitle').text();
	var intro = $('#sintro').text();
	var star = 4;
	var author = $('.rcp_author .text > p > a').text();
	var imgUrl = $('#allcover .org img').attr('src');
	var tags = (function(){
		var tags = [];
		$('.rcp_tags a').each(function(){
			var target = $(this);
			tags.push($.trim(target.text()));
		});
		return tags;
	})();
	var steps = (function(){
		var steps = [];
		$('.rcp_steps .sstep').each(function(){
			var target = $(this);
			steps.push($.trim(target.text()));
		});
		return steps;
	})();
	var zl = (function() {
		var zl = [];
		$('.ingtmgr').each(function(){
			var target = $(this);
			var name = target.find('.name').text(), amount = target.find('.amount').text();
			zl.push($.trim(name)+' '+$.trim(amount));
		});
		return zl;
	})();
	var fl = (function(){
		var fl = [];
		$('.ingtbur').each(function(){
			var target = $(this);
			var name = target.find('.name').text(), amount = target.find('.amount').text();
			fl.push($.trim(name)+' '+$.trim(amount));
		});
		return fl;
	})();

	var data = {
		'name':title,
		'intro':intro,
		'image':imgUrl,
		'star':star,
		'poster':author,
		'tag':tags.join(','),
		'action':steps,
		'zl':zl.join(','),
		'fl':fl.join(',')
	}
	console.log(data);
	$.post('http://app.schoollife.me/add.cshtml',data,function(r){
		console.log(r);
	})
}
console.log('成功注入');


