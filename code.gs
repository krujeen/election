function doGet(e) {
  return HtmlService.createHtmlOutputFromFile("index").setTitle('ระบบตรวจสอบสิทธิ์เลือกตั้ง');;
  }
function getCode(code) {
var url = "xxxx";
var ss = SpreadsheetApp.openByUrl(url); 
var ws = ss.getSheetByName("แผ่น1"); 
var data = ws.getRange(1, 1, ws.getLastRow(), 3).getValues();

var stdCodesList = data.map (function(r) { return r[0]; }); 
var stdList = data.map(function(r) { 
return [`<table class="table table-bordered">
        <thead class="thead-light">
        <tr>
        <th scope="col" colspan="4"><center>ข้อมูลผู้มีสิทธิ์เลือกตั้ง</center></th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td><b>ชื่อ - นามสกุล</b></td>
        <td colspan="3"><center>${r[1]}</center></td>
        </tr>
        <tr>
        <td><b>ระดับชั้น</b></td>
        <td colspan="3"><center>${r[2]}</center></td>
        </tr>

        <tr>
        <td class="table-success" colspan="2"><center>
									 <a href="xxx" target="_blank" >
        							 <button type="button" class="btn btn-success  btn-lg btn-block">คลิกเพื่อเข้าคูหาเลือกตั้ง</button>
									 </a>
        </tr>
        </tbody>
        </table>
                       
        `];

});

var position = stdCodesList.indexOf(code); 
if(position > -1){
return stdList[position];} else {
return 'ท่านไม่มีสิทธิ์เลือกตั้ง คณะกรรมการสภานักเรียน ปีการศึกษา 2564';
  }
  
}
