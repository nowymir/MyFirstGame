var ReadNumber;

$(function() {
  $("#GoodNumber").hide();
  $("#Statement").hide();
  $("#Statement").val(" ");
  RandomNumber = rand(1, 100);
  

  $("#Button1").click(function() {
  var ReadNumber;

$(function() {
  $("#GoodNumber").hide();
  $("#Statement").hide();
  $("#Statement").val(" ");
  RandomNumber = rand(1, 100);
  

  $("#Button1").click(function() {
    $("#TextStart").hide();
    $("#Button1").hide();
    alert (RandomNumber);
  });
  $("#Button2").click(function() {
 
    
if (ReadNumber < RandomNumber) {  $("#Statement").show();
                                  $("#Statement").text(" Podana liczba jest za mała.");           
          } else { 
             if (ReadNumber > RandomNumber) {
    $("#Statement").show();
                 $("#Statement").text(" Podana liczba jest za duża. ");               
             
             }
             else if (ReadNumber == RandomNumber) {
   $("#Statement").text(" Zgadłeś!! ");
 }
        
          }
    
    
    
    
    
    
    
ReadNumber = $("#Form1").val();
    $("#Form1").val(" ");
  });
});
function rand(min, max) {
  min = parseInt(min, 10);
  max = parseInt(max, 10);
  if (min > max) {
    var tmp = min;
    min = max;
    max = tmp;
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}
if ($("#Statement").val( ! (/^\d{2}$/))); {$("#Form1").val(" "); alert(blad);
                                           }


     
            

if ($("#Statement").val( ! (/^\d{2}$/))); {$("#Form1").val(" "); alert(blad);
                                           }


     
            



