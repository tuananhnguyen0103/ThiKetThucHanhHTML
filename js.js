$("#tru").click(function(){
    
    var values=$("#ip").val();
    if(values>0){
        var change=Number(values)-1;
        $("#ip").val(Number(change));
    }
})

$("#cong").click(function(){
    var values=$("#ip").val();
  
    var change=Number(values)+1;
    $("#ip").val(Number(change));
})

$("#tru1").click(function(){
    var so=$("#ip1").val();
    if(so>0){
        var change=Number(so)-1;
        $("#ip1").val(Number(change));
    }
    
})

$("#cong1").click(function(){
    var values=$("#ip1").val();
  
    var change=Number(values)+1;
    $("#ip1").val(Number(change));
})