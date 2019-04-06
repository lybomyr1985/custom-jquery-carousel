$(function(){

var basis =0;
 $(".next").on('click',function(){
 
 // $($(".i")[3]).hide();
 
if(basis>=$(".i").length-1){
    $($(".i")).show();
    basis=0;
}else{
       $($(".i")[basis]).hide();
       basis++;
  }

  
});
  
 $(".prev").on('click',function(){
   

 if(basis==0){
 
  console.log('if prev'+basis)

    
    $(".i").hide();
    basis=$(".i").length;
        
 }  
     
   basis--;
   $($(".i")[basis]).show() 

    });
   
});

 