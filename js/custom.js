// Control Client slider items
function clientItems(){
  var window_w = $(window).width();
  var oc_items = window_w < 575 ? 1 : 3;
  document.getElementById('oc-clients-full').dataset.items = oc_items;
}
clientItems();
