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

var dialogHtml = `

<!-- Bootstrap CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

<style type="text/css">

    input[type=checkbox]:disabled + label {
      color: #111111;
      text-decoration: line-through;
      cursor: not-allowed;
    }
    
    .table-main {
        border-collapse: collapse;
        width: 1100px;
    }
    .table-sub {
        border-collapse: collapse;
        width: 100%;
    }
    .trsub2 {
        height:30px;
    }
    tr {
        height:40px;
    }
    td {
        border-color: black;
        border-style: solid;
        border-width: 1px;
        vertical-align: middle;
        text-align: center;
        font-size: 16px; /* org: 20px */
        font-weight: bold;
        padding: 0px;
        /*margin-bottom: 20px;*/
    }
    .tdmaintitle {
        border-color: black;
        border-style: solid;
        border-width: 0px;
        vertical-align: middle;
        text-align: center;
        font-size: 48px;
        font-weight: bold;
        text-align: center;
    }
    .tdsubtitle {
        border-color: black;
        border-style: solid;
        border-width: 0px;
        vertical-align: middle;
        text-align: center;
        font-size: 36px;
        font-weight: bold;
        text-align: left;
        padding: 10px;
    }
    .remarks {
        border-color: black;
        border-style: solid;
        border-width: 0px;
        vertical-align: middle;
        text-align: left;
        padding: 10px;
    }
    .tdtitle {
        padding: 10px;
        text-align: left;
    }
    .smalltext {
        font-size: 12px;
    }
    .trlow {
        height:20px;
    }

</style>

<table class="table-main">
    <tr>
        <td class="tdtitle" width="12%">제품코드</td>
        <td class="tdtitle" width="18%">` + _item_number + `</td>
        <td rowspan="2" class="tdmaintitle" width="40%">제조사양서</td>
        <td rowspan="2" class="tdmaintitle" width="30%">
            <table class="table-sub" width="100%">
                <tr style="height:20px">
                    <td class="smalltext" rowspan="2" width="8%">결<br />재</td>
                    <td class="smalltext" width="23%">영업</td>
                    <td class="smalltext" width="23%">생산</td>
                    <td class="smalltext" width="23%">Q.C</td>
                    <td class="smalltext" width="23%">검토</td>
                </tr>
                <tr style="height:60px">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td class="tdtitle">고객명</td>
        <td class="tdtitle">` + _company + `</td>
    </tr>
</table>

<table class="table-main">
    <tr>
        <td class="tdtitle" width="14%">제품명</td>
        <td class="tdtitle" width="60%">` + _name + `</td>
        <td width="5%">작성<br />일자</td>
        <td class="tdtitle" colspan="3 width="21%">` + _created_on + `</td>
    </tr>
    <tr>
        <td class="tdtitle">1. 규격</td>
        <td class="tdtitle" colspan="3">` + _specification + `</td>
        <td width="3%">폭<br />수</td>
        <td class="tdtitle" width="7%">` + _no_of_widthcount + `</td>
    </tr>
    <tr>
        <td class="tdtitle">2. 1매규격</td>
        <td class="tdtitle" colspan="5">(가로: ` + _length_per_sheet + ` mm) x (세로: ` + _width_per_sheet + ` mm) x (가제트:  mm)</td>
    </tr>
    <tr>
        <td class="tdtitle">3. 재질구성</td>
        <td class="tdtitle" colspan="5">` + _material_description +`</td>
    </tr>
</table>

<table class="table-main">
    <tr>
        <td class="tdtitle" width="14%">4. 총 두께</td>
        <td class="tdtitle" width="16%">` + _thickness + ` mm </td>
        <td class="tdtitle" width="14%">5. AL광택면</td>
        <td class="tdtitle" width="16%">
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="Matt" ` + _Matt + ` disabled style="color:yellow">
                <label class="form-check-label" for="Matt">무광</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="Glossy" ` + _Glossy + ` disabled>
                <label class="form-check-label" for="Glossy">유광</label>
            </div>
        </td>
        <td class="tdtitle" rowspan="2" width="40%" style="padding-bottom:10px">
            <table class="table-sub">
                7. 공정
                <tr class="trsub2">
                    <td colspan="2">공정명</td>
                    <td width="30%">업체명</td>
                    <td width="20%">풀림방향(후)</td>
                    <td width="20%">기준</td>
                </tr>
                <tr class="trsub2">
                    <td width="5%">1</td>
                    <td width="25%">` + _process_name1 + `</td>
                    <td>` + _process_company1 + `</td>
                    <td>` + _process_direction1 + `</td>
                    <td>` + _wind_direction_base + `</td>
                </tr>
                <tr class="trsub2">
                    <td>2</td>
                    <td>` + _process_name2 + `</td>
                    <td>` + _process_company2 + `</td>
                    <td>` + _process_direction2 + `</td>
                    <td></td>
                </tr>
                <tr class="trsub2">
                    <td>3</td>
                    <td>` + _process_name3 + `</td>
                    <td>` + _process_company3 + `</td>
                    <td>` + _process_direction3 + `</td>
                    <td></td>
                </tr>
                <tr class="trsub2">
                    <td>4</td>
                    <td>` + _process_name4 + `</td>
                    <td>` + _process_company4 + `</td>
                    <td>` + _process_direction4 + `</td>
                    <td></td>
                </tr>
                <tr class="trsub2">
                    <td>5</td>
                    <td>` + _process_name5 + `</td>
                    <td>` + _process_company5 + `</td>
                    <td>` + _process_direction5 + `</td>
                    <td></td>
                </tr>
                <tr class="trsub2">
                    <td>6</td>
                    <td>` + _process_name6 + `</td>
                    <td>` + _process_company6 + `</td>
                    <td>` + _process_direction6 + `</td>
                    <td></td>
                </tr>
                <tr class="trsub2">
                    <td>7</td>
                    <td>` + _process_name7 + `</td>
                    <td>` + _process_company7 + `</td>
                    <td>` + _process_direction7 + `</td>
                    <td></td>
                </tr>
                <tr class="trsub2">
                    <td>8</td>
                    <td>` + _process_name8 + `</td>
                    <td>` + _process_company8 + `</td>
                    <td>` + _process_direction8 + `</td>
                    <td></td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td colspan="4" style="padding-bottom:10px" class="tdtitle">
            <table class="table-sub">
                6. 원단사양
                <tr>
                    <td colspan="2">필름종류</td>
                    <td width="10%">두께</td>
                    <td width="10%">원단폭</td>
                    <td width="18%">그레이드</td>
                    <td width="18%">발주처</td>
                    <td width="24%">필름특별<br />관리항목</td>
                </tr>
                <tr>
                    <td width="5%">1</td>
                    <td width="15%">` + _film_name1 + `</td>
                    <td>` + _film_thickness1 + `</td>
                    <td>` + _film_width1 + `</td>
                    <td></td>
                    <td>` + _film_company1 + `</td>
                    <td></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>` + _film_name2 + `</td>
                    <td>` + _film_thickness2 + `</td>
                    <td>` + _film_width2 + `</td>
                    <td></td>
                    <td>` + _film_company2 + `</td>
                    <td></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>` + _film_name3 + `</td>
                    <td>` + _film_thickness3 + `</td>
                    <td>` + _film_width3 + `</td>
                    <td></td>
                    <td>` + _film_company3 + `</td>
                    <td></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>` + _film_name4 + `</td>
                    <td>` + _film_thickness4 + `</td>
                    <td>` + _film_width4 + `</td>
                    <td></td>
                    <td>` + _film_company4 + `</td>
                    <td></td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>` + _film_name5 + `</td>
                    <td>` + _film_thickness5 + `</td>
                    <td>` + _film_width5 + `</td>
                    <td></td>
                    <td>` + _film_company5 + `</td>
                    <td></td>
                </tr>
            </table>
        </td>
    </tr>
</table>

<br />

<table class="table-main">
    <tr class="trlow">
        <td width="6%" rowspan="2">인쇄<br /></td>
        <td width="6%" rowspan="2">` + _no_of_colors + `</td>
        <td width="8%">포함</td>
        <td width="6%" rowspan="2">동판<br />규격</td>
        <td width="12%" rowspan="2"></td>
        <td width="6%" rowspan="2">동판<br />위치</td>
        <td width="12%" rowspan="2"></td>
        <td width="8%" rowspan="2">칼라콘<br />마크</td>
        <td width="12%" rowspan="2"></td>
        <td width="8%" rowspan="2">인쇄후<br />풀림</td>
        <td width="8%" rowspan="2">` + _wind_direction_print + `</td>
        <td width="8%" rowspan="2">` + _wind_direction_base + `</td>
    </tr>
    <tr class="trlow">
        <td>` + _coating_value + `</td>
    </tr>
</table>

<table class="table-main">
    <tr>
        <td colspan="2">인쇄순서</td>
        <td width="10%">1</td>
        <td width="10%">2</td>
        <td width="10%">3</td>
        <td width="10%">4</td>
        <td width="10%">5</td>
        <td width="10%">6</td>
        <td width="10%">7</td>
        <td width="10%">8</td>
        <td width="10%">9</td>
    </tr>
    <tr>
        <td colspan="2">색상명칭<br />팬튼</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td colspan="2">잉크조색<br />데이터</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td colspan="2">잉크<br />타입</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td colspan="2">잉크<br />회사</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td colspan="2">경화제</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td colspan="2">희석용제<br />데이터</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td colspan="2">점토<br />데이터</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td width="5%" rowspan="3">색<br />차<br />값</td>
        <td width="5%">L</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>a</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>b</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td colspan="2">히터온도<br />(+-5c)</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td colspan="2">특이사항</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td colspan="2">동판회사</td>
        <td colspan="2"></td>
        <td>재판방법</td>
        <td colspan="2"></td>
        <td>동판심도</td>
        <td colspan="3"></td>
    </tr>
</table>

<table class="table-main">
    <tr>
        <td width="10%">구분</td>
        <td width="15%" class="smalltext">표준생산속도<br />(m/MIN)+-5</td>
        <td width="15%" class="smalltext">급지부((UNWIND)장력<br />(kg/m2)+-2</td>
        <td width="15%" class="smalltext">인피드(INFEED)장력<br />(kb/m2)+-2</td>
        <td width="15%" class="smalltext">아웃피드(OUTFEED)장력<br />(kb/m2)+-2</td>
        <td width="15%" class="smalltext">권취부(REWIND)장력<br />(kb/m2)+-2</td>
        <td width="15%" class="smalltext">데파장력</td>
    </tr>
    <tr>
        <td>___ 호기</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>___ 호기</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</table>

<table class="table-main">
    <tr>
        <td rowspan="2" width="8%">주의<br />사항</td>
        <td width="23%">인쇄</td>
        <td width="23%">합지</td>
        <td width="23%">절단(슬리티)</td>
        <td width="23%">가공</td>
    </tr>
    <tr style="height:100px">
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
    </tr>
</table>

<br />

<table class="table-main">
    <tr>
        <td width="35%" class="tdsubtitle">합지제조표준</td>
        <td rowspan="2" width="65%" class="tdsubtitle">
            <table class="table-sub">
                <tr style="height:20px">
                    <td class="smalltext">작업속도</td>
                    <td class="smalltext">Metering속도</td>
                    <td class="smalltext">Application속도</td>
                    <td class="smalltext">Application온도</td>
                    <td class="smalltext">LAMI롤온도</td>
                    <td class="smalltext">Coating롤온도</td>
                    <td class="smalltext">접착제온도</td>
                </tr>
                <tr style="height:60px">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td width="10%" class="remarks">*무용제조건*</td>
    </tr>
</table>

<table class="table-main">
    <tr>
        <td rowspan="2">구분</td>
        <td rowspan="2" class="smalltext">접착제<br />타입</td>
        <td rowspan="2" class="smalltext">도포량</td>
        <td rowspan="2" class="smalltext">접착제<br />(회사/타입)</td>
        <td rowspan="2" class="smalltext">경화제<br />(비율)</td>
        <td rowspan="2" class="smalltext">용제희석<br />(비율)</td>
        <td rowspan="2" class="smalltext">속도</td>
        <td rowspan="2" class="smalltext">1급지장력</td>
        <td rowspan="2" class="smalltext">인피드장력</td>
        <td rowspan="2" class="smalltext">아웃피드장력</td>
        <td rowspan="2" class="smalltext">권취부장력</td>
        <td rowspan="2" class="smalltext">데파장력</td>
        <td rowspan="2" class="smalltext">2급지장력</td>
        <td colspan="2" class="smalltext">압력</td>
        <td rowspan="2" class="smalltext">드라이박스온도</td>
    </tr>
    <tr>
        <td class="smalltext">고무로라</td>
        <td class="smalltext">라미로라</td>
    </tr>
    <tr>
        <td>1차</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>2차</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>3차</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>4차</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr style="height:100px">
        <td>중요<br />사항</td>
        <td colspan="15"></td>
    </tr>
</table>

<br />

<table class="table-main">
    <tr>
        <td width="35%" class="tdsubtitle">슬릿터제조표준</td>
        <td width="65%" class="tdsubtitle">
            <table class="table-sub">
                <tr style="height:20px">
                    <td>생산속도</td>
                    <td>위 장력</td>
                    <td>위 데파</td>
                    <td>아래 장력</td>
                    <td>아래 데파</td>
                    <td>언와인더장력</td>
                </tr>
                <tr style="height:40px">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </td>
    </tr>
</table>

<table class="table-main">
    <tr>
        <td width="5%">표면</td>
        <td width="10%"></td>
        <td width="5%">이음방법</td>
        <td width="10%"></td>
        <td width="5%">허용이음수</td>
        <td width="10%"></td>
        <td width="5%">이음위치</td>
        <td width="10%"></td>
    </tr>
    <tr>
        <td>라벨종류</td>
        <td></td>
        <td>지관</td>
        <td></td>
        <td>포장방법</td>
        <td colspan="3"></td>
    </tr>
    <tr style="height:70px">
        <td>중요<br />사항</td>
        <td colspan="7"></td>
    </tr>
</table>

<br />

<table class="table-main">
    <tr>
        <td colspan="2" class="tdsubtitle">봉투제조표준</td>
        <td colspan="2">기계</td>
        <td>(    )호기</td>
        <td>(    )호기</td>
        <td>(    )호기</td>
        <td>(    )호기</td>
    </tr>
    <tr>
        <td width="10%">봉투형태</td>
        <td width="40%"></td>
        <td colspan="2">표준<br />생산속도</td>
        <td width="10%"></td>
        <td width="10%"></td>
        <td width="10%"></td>
        <td width="10%"></td>
    </tr>
    <tr class="trlow">
        <td rowspan="2">개구방향</td>
        <td rowspan="2"></td>
        <td width="3%">1</td>
        <td rowspan="2">상단</td>
        <td rowspan="2"></td>
        <td rowspan="2"></td>
        <td rowspan="2"></td>
        <td rowspan="2"></td>
    </tr>
    <tr class="trlow">
        <td width="3%">2</td>
    </tr>
    <tr class="trlow">
        <td rowspan="2">씰링두께</td>
        <td rowspan="2"></td>
        <td width="3%">3</td>
        <td rowspan="2">하단</td>
        <td rowspan="2"></td>
        <td rowspan="2"></td>
        <td rowspan="2"></td>
        <td rowspan="2"></td>
    </tr>
    <tr class="trlow">
        <td width="3%">4</td>
    </tr>
    <tr class="trlow">
        <td rowspan="2">라운딩</td>
        <td rowspan="2"></td>
        <td width="3%">5</td>
        <td rowspan="2">측면상</td>
        <td rowspan="2"></td>
        <td rowspan="2"></td>
        <td rowspan="2"></td>
        <td rowspan="2"></td>
    </tr>
    <tr class="trlow">
        <td width="3%">6</td>
    </tr>
    <tr class="trlow">
        <td rowspan="2">타공</td>
        <td rowspan="2"></td>
        <td width="3%">7</td>
        <td rowspan="2">측면하</td>
        <td rowspan="2"></td>
        <td rowspan="2"></td>
        <td rowspan="2"></td>
        <td rowspan="2"></td>
    </tr>
    <tr class="trlow">
        <td width="3%">8</td>
    </tr>
    <tr class="trlow">
        <td rowspan="2">V컷팅위치</td>
        <td rowspan="2"></td>
        <td width="3%">9</td>
        <td rowspan="2">측면</td>
        <td rowspan="2"></td>
        <td rowspan="2"></td>
        <td rowspan="2"></td>
        <td rowspan="2"></td>
    </tr>
    <tr class="trlow">
        <td width="3%">10</td>
    </tr>
    <tr class="trlow">
        <td rowspan="2">지퍼위치</td>
        <td rowspan="2"></td>
        <td width="3%">11</td>
        <td rowspan="2">스탠드상</td>
        <td rowspan="2"></td>
        <td rowspan="2"></td>
        <td rowspan="2"></td>
        <td rowspan="2"></td>
    </tr>
    <tr class="trlow">
        <td width="3%">12</td>
    </tr>
    <tr class="trlow">
        <td rowspan="2">밑지</td>
        <td rowspan="2"></td>
        <td width="3%">13</td>
        <td rowspan="2">스탠드하</td>
        <td rowspan="2"></td>
        <td rowspan="2"></td>
        <td rowspan="2"></td>
        <td rowspan="2"></td>
    </tr>
    <tr class="trlow">
        <td width="3%">14</td>
    </tr>
    <tr class="trlow">
        <td rowspan="2">밸브</td>
        <td rowspan="2"></td>
        <td width="3%">15</td>
        <td rowspan="2">배접이</td>
        <td rowspan="2"></td>
        <td rowspan="2"></td>
        <td rowspan="2"></td>
        <td rowspan="2"></td>
    </tr>
    <tr class="trlow">
        <td width="3%">16</td>
    </tr>
    <tr class="trlow">
        <td rowspan="2">포장수량</td>
        <td rowspan="2"></td>
        <td width="3%">17</td>
        <td rowspan="2">포인트</td>
        <td rowspan="2"></td>
        <td rowspan="2"></td>
        <td rowspan="2"></td>
        <td rowspan="2"></td>
    </tr>
    <tr class="trlow">
        <td width="3%">18</td>
    </tr>
    <tr class="trlow">
        <td rowspan="2"></td>
        <td rowspan="2"></td>
        <td width="3%">19</td>
        <td rowspan="2">지퍼실링상</td>
        <td rowspan="2"></td>
        <td rowspan="2"></td>
        <td rowspan="2"></td>
        <td rowspan="2"></td>
    </tr>
    <tr class="trlow">
        <td width="3%">20</td>
    </tr>
    <tr class="trlow">
        <td rowspan="2"></td>
        <td rowspan="2"></td>
        <td width="3%">21</td>
        <td rowspan="2">지퍼실링하</td>
        <td rowspan="2"></td>
        <td rowspan="2"></td>
        <td rowspan="2"></td>
        <td rowspan="2"></td>
    </tr>
    <tr class="trlow">
        <td width="3%">22</td>
    </tr>
    <tr style="height:70px">
        <td>중요<br />사항</td>
        <td colspan="7"></td>
    </tr>
</table>

<table class="table-main">
    <tr class="trlow">
        <td width="5%" rowspan="6">사양<br />변경</td>
        <td width="25%">변경일(    년  월  일)</td>
        <td width="15%">변경번호</td>
        <td width="40%">변경내용</td>
        <td width="15%">관련근거</td>
    </tr>
    <tr class="trlow">
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr class="trlow">
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr class="trlow">
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr class="trlow">
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr class="trlow">
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</table>

`;

// 보안문제로 작동 안하는 것 같음 
// function setFieldValues(fieldValues) {
//     var _item_number = fieldValues._item_number;
//     var _name = fieldValues._name;
//     // 필드 값이 더 많으면 여기에 추가합니다.

//     // 필드 값을 폼에 설정합니다.
//     document.getElementById("_item_number").value = _item_number;
//     document.getElementById("_name").value = _name;
//     // 필드 값이 더 많으면 여기에 추가합니다.
// }

var width = 2000;
var height = 1200;
var left = window.screenLeft || window.screenX;
var top1 = window.screenTop || window.screenY;

var features_a = [
    "Width:" + width + "px",
    "Height:" + height + "px",
    "Left:" + left + "px",
    "Top:" + top1 + "px",
    "resizable:yes",
    "scroll:yes",
    "location:no"
];


// 클릭 이벤트에 대한 핸들러 함수
function openNewWindow() {
    // 새 창의 URL
    var url = "https://example.com";

    // 새 창 열기
    window.open(url, "_blank");
}

function openDialogWindow() {
    // var url = "/mes/Server/Template/dialog5.html";
    var url = dialogHtml;

    var width = 1200;
    var height = 1200;
    var left = window.screenLeft || window.screenX;
    var top = window.screenTop || window.screenY;

    var features = [
        "dialogWidth:" + width + "px",
        "dialogHeight:" + height + "px",
        "dialogLeft:" + left + "px",
        "dialogTop:" + top + "px",
        "resizable:yes",
        "scroll:yes",
        "location:no"
    ];

    // var fieldValues = {
    //     _item_number: document.thisItem.getProperty('_item_number', '-'),
    //     _name: document.thisItem.getProperty('_item_number', '-')
    // };

    // window.showModalDialog(dialogHtml, null, features.join(";"));
    // var newWindow = window.open(url, "_blank", features.join(","));
    // newWindow.document.write(url);

    var newWindow = window.open("", "", "width=1120,height=700,left=10,top=10,menubar='no'");
    // var newWindow = window.open("", "", features_a.join(","));
    newWindow.document.write(dialogHtml);
    newWindow.focus();
}

// 보안문제로 작동 안하는 것 같음 
// openDialogWindow.onload = function () {
//     openDialogWindow.setFieldValues(fieldValues);
// };

openDialogWindow();