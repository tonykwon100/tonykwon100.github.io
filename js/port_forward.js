
// var embed=document.querySelector('embed');
let embed = document.getElementById('embed-page');
let appendButton = document.getElementById('append');
let applyButton = document.getElementById('apply');
let deleteButton = document.getElementById('delete');
let table = null;

embed.data = 'port_forward_table.html';

function appendItem() {
  table = embed.contentDocument.getElementById('htmlTbody');
  if(table)
  {
    if(table.rows.length >= 48)
    {
      alert("최대 입력값을 초과했습니다.");
    } else { 
      console.log(table.rows.length);
      let row = table.insertRow(-1); // add at the end
      let c1 = row.insertCell(0);
      let c2 = row.insertCell(1);
      let c3 = row.insertCell(2);
      let c4 = row.insertCell(3);
      let c5 = row.insertCell(4);
      let c6 = row.insertCell(5);
      let c7 = row.insertCell(6);
      c1.innerHTML = '<input type="checkbox" name="emp_code">';
      c2.innerText = table.rows.length;
      c3.innerText = 'c3';
      c4.innerText = 'c4';
      c5.innerText = 'c5';
      c6.innerText = 'c6';
      c7.innerText = 'c7';
    }
  }  
}  
appendButton.addEventListener("click", appendItem);

function deleteItem() {
  table = embed.contentDocument.getElementById('htmlTbody');
  if(table && table.rows.length != 0)
  {
    for(i = table.rows.length-1 ; i >= 0  ; i--)
    {
      let row = table.rows[i];
      console.log(row);
      console.log("checked:"+row.cells[0].childNodes[0].checked);
      if(row.cells[0].childNodes[0].checked){
        table.deleteRow(i);
      }
    }
    // Update No.
    for(i = 0 ; i < table.rows.length  ; i++)
    {
      let row = table.rows[i];
      row.cells[1].innerText = i+1;
    }
  }  
}  
deleteButton.addEventListener("click", deleteItem);



