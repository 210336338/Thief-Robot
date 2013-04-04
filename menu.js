

var sUrl = 'http://localhost/server.php';
var isLoading = false;
$('#s').delegate('button','click',function(){
    if(isLoading){ console.log('loading...'); return;}
    var target = $(this);
    var data = {
        url:target.siblings('input').val()
    };
    isLoading = true;
    $.post(sUrl,data,function(res){
        var response = eval('('+res+')');
        console.log(response);
        isLoading = false;
    });
});