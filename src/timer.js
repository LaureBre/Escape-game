$( function() {

    function setDate() {
        var now = new Date();
        console.log(now);
        var target = new Date(now);
        target.setMinutes(now.getMinutes() + 30);
        console.log(target);
        var diff = dateDiff('now', 'target', 'hh:ii');
        console.log(diff);
    }

    setDate();

});
