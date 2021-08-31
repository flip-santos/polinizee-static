(function(){
    // Control Client slider items
    var window_w = $(window).width();
    var oc_items = window_w < 575 ? 1 : 3;
    document.getElementById('oc-clients-full').dataset.items = oc_items;
})();
