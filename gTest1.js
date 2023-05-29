// alert("_gbtnManufacSpec2");

// alert(document.thisItem.getProperty('_item_number', '-'));
var _item_number = document.thisItem.getProperty('_item_number', '-');
// 봉투형태 
// var _f_finishing_type = getFieldByName("_f_finishing_type").getElementsByTagName("input")[0].value;
var _f_finish_type = document.thisItem.getProperty('_f_finish_type', '-');
// 개구방향 
// var _f_openside = getFieldByName("_f_openside").getElementsByTagName("input")[0].value;
var _f_openside = document.thisItem.getProperty('_f_openside', '-');

// alert("_f_openside : " + _f_openside);

// 씰링두께 
var _f_leftsealing = document.thisItem.getProperty('_f_leftsealing', '-');
// 라운딩 
var _f_round = document.thisItem.getProperty('_f_round', '-');
// 타공 
var _f_hole = document.thisItem.getProperty('_f_hole', '-');
// V컷팅위치 
var _f_hole_position = document.thisItem.getProperty('_f_hole_position', '-');
var _f_hole_size = document.thisItem.getProperty('_f_hole_size', '-');
var _f_hole_shape = document.thisItem.getProperty('_f_hole_shape', '-');
// 지퍼위치 
// 밑지 
// 밸브 
// 포장수량 

// var _id = document.thisItem.getProperty('id', '-');
// alert("id: " + _id);

// if(_f_hole_shape === undefined){
//     alert("_f_hole_shape: " + "undefined");
// }
// else if(_f_hole_shape === null){
//     alert("_f_hole_shape: " + "null");
// }
// else if(!_f_hole_shape === ""){
//     alert("_f_hole_shape: " + "is null?");
// }
// else if(!_f_hole_shape){
//     alert("_f_hole_shape: " + "is null?");
// }

var item = new Item("gproduct", "get");
item.setProperty("_item_number", _item_number);
var itm = item.apply();

// 작성일자 값 가져오기
var created_on = itm.getProperty("created_on", "");
var myDate = new Date(created_on);

// Check if date is valid
if (isNaN(myDate.getTime())) {
  alert("잘못된 날짜입니다.");
} else {
  var dateFormat = "YYYY년 MM월 DD일";
  var _created_on = myDate.toLocaleDateString("ko-KR", { dateFormat });
//   alert("날짜: " + _created_on);
}

var data = {
    _item_number: _item_number,
    
    _f_finish_type: _f_finish_type,
    _f_openside: _f_openside,
    _f_leftsealing: _f_leftsealing,
    _f_round: _f_round,
    _f_hole: _f_hole,
    _f_hole_position: _f_hole_position,
    _f_hole_size: _f_hole_position,
    _f_hole_shape: _f_hole_position
};

var json = JSON.stringify(data);

function openDialogWindow() {
    
    var url = "/mes/Server/Template/gFinish_input_01.html";
    
    // var newWindow = window.open(url, "제조사양서", features.join(","));
    var newWindow = window.open(url, "제조사양서", "height=450px,width=550px");
    newWindow.focus();
    // newWindow.opener.postMessage(data, "*");
}


window.addEventListener("message", function(event) {
  var rdata = event.data;
  document.getElementById("3E819AFB0838460998D7C0AB32C4DE6D").textContent = rdata;
  //alert(rdata);
});

openDialogWindow();
