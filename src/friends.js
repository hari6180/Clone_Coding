<script>
var toggle = document.getElementById("show");
var line = document.getElementById("show_con");
var clicked = 0;
toggle.onclick = function(){
  if(clicked){
    line.className = "hidden";
    clicked = 0;
  }else{
    line.className = "friends";
    clicked = 1;

  }
}
</script>