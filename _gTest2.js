// alert("_gbtnManufacSpec2");

function getLabelFromList(listName, value) {
    
    // alert(listName + " " + value);
    
    var item = aras.newIOMItem('Value', 'get');
    item.setProperty('value', value);
    // item.setPropertyAttribute('id', 'is_null', 0);
    item.setAttribute('select', 'label');
    // item.setPropertyItem('list', aras.newIOMItem(listName, 'get'));
    item.setProperty('source_id', 'DAFAC005482A4E67ABC145A1ED4E1BFF');
    
    // alert("2");
    
    item = item.apply();
    
    if (item.isError()) {
        aras.AlertError(item.getErrorString());
        return null;
    }
    
    // alert(item.getProperty('label'));
    
    
    // return item.getItemByIndex(0).getPropertyItem('label');
    return item.getProperty('label');
}

function _direction(dir) {
    if(dir == "두출") {
        
    }
}

// alert(document.thisItem.getProperty('_item_number', '-'));
var _item_number = document.thisItem.getProperty('_item_number', '-');
var _name = document.thisItem.getProperty('_name', '-');
var _company = getFieldByName("_company").getElementsByTagName("input")[0].value;
var _specification = document.thisItem.getProperty('_specification', '-');
var _no_of_widthcount = document.thisItem.getProperty('_no_of_widthcount', '-');
var _length_per_sheet  = document.thisItem.getProperty('_length_per_sheet ', '-');
var _width_per_sheet  = document.thisItem.getProperty('_width_per_sheet ', '-');
var _material_description = document.thisItem.getProperty('_material_description', '-');
var _thickness = document.thisItem.getProperty('_thickness', '-');

var _coating = document.thisItem.getProperty('_coating', '-');
var _coating_value = getFieldByName("_coating").getElementsByTagName("input")[0].value;
var _coating_label = getLabelFromList('_gCoating_type', _coating);
var _Glossy = "";
var _Matt = "";

        if (_coating == "Glossy") {
            // $('#Glossy').prop('checked', true);
            _Glossy = "checked";
        }
        else if (_coating == "Matt") {
            // $('#Matt').prop('checked', true);
            _Matt = "checked";
        }

// var _process_name1 = document.thisItem.getProperty('_process_name1', '-');
// var _process_name2 = document.thisItem.getProperty('_process_name2', '-');
// var _process_name3 = document.thisItem.getProperty('_process_name3', '-');
// var _process_name4 = document.thisItem.getProperty('_process_name4', '-');
// var _process_name5 = document.thisItem.getProperty('_process_name5', '-');
// var _process_name6 = document.thisItem.getProperty('_process_name6', '-');
// var _process_name7 = document.thisItem.getProperty('_process_name7', '-');
// var _process_name8 = document.thisItem.getProperty('_process_name8', '-');

// 인쇄 후 와인드 방향
var _wind_direction_base = getFieldByName("_wind_direction_base").getElementsByTagName("input")[0].value;
var _wind_direction_print = getFieldByName("_wind_direction_print").getElementsByTagName("input")[0].value;
var _wind_direction_print2;

if (_wind_direction_print == "두출") {
    _wind_direction_print2 = "미출";
}
else if (_wind_direction_print == "미출") {
    _wind_direction_print2 = "두출";
}
else {
    _wind_direction_print2 = "무관";
}
    
var ddir;

function set_direction(processname) {
    if (!processname) {
        
        ddir = false;
        
    }
    else if (processname == "인쇄" || processname == "합지" || processname == "경화" || processname == "슬리팅") {
        
        ddir = true;
        
    }
    else if (processname == "가공") {
        
        ddir = false;
        
    }
    else {
        alert("시스템 관리자에게 문의바랍니다. 오류번호 error_setdirection01");
        
        ddir = false;
    }
    
    return ddir;
}

var _process_name1 = getFieldByName("_process_name1").getElementsByTagName("input")[0].value;
set_direction(_process_name1);
if (ddir === true) _process_direction1 = _wind_direction_print;
else _process_direction1 = "";
var _process_name2 = getFieldByName("_process_name2").getElementsByTagName("input")[0].value;
set_direction(_process_name2);
if (ddir === true) _process_direction2 = _wind_direction_print2;
else _process_direction2 = "";
var _process_name3 = getFieldByName("_process_name3").getElementsByTagName("input")[0].value;
set_direction(_process_name3);
if (ddir === true) _process_direction3 = _wind_direction_print;
else _process_direction3 = "";
var _process_name4 = getFieldByName("_process_name4").getElementsByTagName("input")[0].value;
set_direction(_process_name4);
if (ddir === true) _process_direction4 = _wind_direction_print2;
else _process_direction4 = "";
var _process_name5 = getFieldByName("_process_name5").getElementsByTagName("input")[0].value;
set_direction(_process_name5);
if (ddir === true) _process_direction5 = _wind_direction_print;
else _process_direction5 = "";
var _process_name6 = getFieldByName("_process_name6").getElementsByTagName("input")[0].value;
set_direction(_process_name6);
if (ddir === true) _process_direction6 = _wind_direction_print2;
else _process_direction6 = "";
var _process_name7 = getFieldByName("_process_name7").getElementsByTagName("input")[0].value;
set_direction(_process_name7);
if (ddir === true) _process_direction7 = _wind_direction_print;
else _process_direction7 = "";
var _process_name8 = getFieldByName("_process_name8").getElementsByTagName("input")[0].value;
set_direction(_process_name8);
if (ddir === true) _process_direction8 = _wind_direction_print2;
else _process_direction8 = "";

var _process_company1 = getFieldByName("_process_company1").getElementsByTagName("input")[0].value;
var _process_company2 = getFieldByName("_process_company2").getElementsByTagName("input")[0].value;
var _process_company3 = getFieldByName("_process_company3").getElementsByTagName("input")[0].value;
var _process_company4 = getFieldByName("_process_company4").getElementsByTagName("input")[0].value;
var _process_company5 = getFieldByName("_process_company5").getElementsByTagName("input")[0].value;
var _process_company6 = getFieldByName("_process_company6").getElementsByTagName("input")[0].value;
var _process_company7 = getFieldByName("_process_company7").getElementsByTagName("input")[0].value;
var _process_company8 = getFieldByName("_process_company8").getElementsByTagName("input")[0].value;

// var _process_direction1 = _wind_direction_print;
// var _process_direction2 = _wind_direction_print2;
// var _process_direction3 = _wind_direction_print;
// var _process_direction4 = _wind_direction_print2;
// var _process_direction5 = _wind_direction_print;
// var _process_direction6 = _wind_direction_print2;
// var _process_direction7 = _wind_direction_print;
// var _process_direction8 = _wind_direction_print2;

var _film_name1 = getFieldByName("_film_name1").getElementsByTagName("input")[0].value;
var _film_name2 = getFieldByName("_film_name2").getElementsByTagName("input")[0].value;
var _film_name3 = getFieldByName("_film_name3").getElementsByTagName("input")[0].value;
var _film_name4 = getFieldByName("_film_name4").getElementsByTagName("input")[0].value;
var _film_name5 = getFieldByName("_film_name5").getElementsByTagName("input")[0].value;
var _film_thickness1 = document.thisItem.getProperty('_film_thickness1', '-');
var _film_thickness2 = document.thisItem.getProperty('_film_thickness2', '-');
var _film_thickness3 = document.thisItem.getProperty('_film_thickness3', '-');
var _film_thickness4 = document.thisItem.getProperty('_film_thickness4', '-');
var _film_thickness5 = document.thisItem.getProperty('_film_thickness5', '-');
var _film_width1 = document.thisItem.getProperty('_film_width1', '-');
var _film_width2 = document.thisItem.getProperty('_film_width2', '-');
var _film_width3 = document.thisItem.getProperty('_film_width3', '-');
var _film_width4 = document.thisItem.getProperty('_film_width4', '-');
var _film_width5 = document.thisItem.getProperty('_film_width5', '-');
var _film_company1 = getFieldByName("_film_company1").getElementsByTagName("input")[0].value;
var _film_company2 = getFieldByName("_film_company2").getElementsByTagName("input")[0].value;
var _film_company3 = getFieldByName("_film_company3").getElementsByTagName("input")[0].value;
var _film_company4 = getFieldByName("_film_company4").getElementsByTagName("input")[0].value;
var _film_company5 = getFieldByName("_film_company5").getElementsByTagName("input")[0].value;
var _no_of_colors = document.thisItem.getProperty('_no_of_colors', '-');
var _printside = getFieldByName("_printside").getElementsByTagName("input")[0].value;

// alert("_item_number : " + _item_number);

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

// 클릭 이벤트에 대한 핸들러 함수
function openNewWindow() {
    // 새 창의 URL
    var url = "https://example.com";

    // 새 창 열기
    window.open(url, "_blank");
}

var data = {
    _item_number: _item_number,
    _company: _company,
    _name: _name
}

var json = JSON.stringify(data);

function openDialogWindow() {
    var width = 1200;
    var height = 1200;
    var left = window.screenLeft || window.screenX;
    var top = window.screenTop || window.screenY;

    var features = [
        "Width:" + width + "px",
        "Height:" + height + "px",
        "Left:" + left + "px",
        "Top:" + top + "px",
        "dialogWidth:" + width + "px",
        "dialogHeight:" + height + "px",
        "dialogLeft:" + left + "px",
        "dialogTop:" + top + "px",
        "resizable:yes",
        "scroll:yes",
        "location:no"
    ];
    
    var url = "/mes/Server/Template/dialog62.html";
    url += "?_item_number=" + _item_number;
    url += "&_company=" + _company;
    url += "&_name=" + _name;
    // var newWindow = window.open(url, "제조사양서", features.join(","));
    var newWindow = window.open(url, "제조사양서", "height=1000px,width=1100px");
    newWindow.focus();
}

openDialogWindow();
