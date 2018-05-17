var $this = document;
$this.onkeydown = function(event) {
    var key = event.key;
    console.log(key);
    var btnName = $this.getElementById('btn-name');
    btnName.innerHTML = key.toString().toUpperCase();
};