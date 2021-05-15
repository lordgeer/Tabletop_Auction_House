document.getElementById("goBack-button").addEventListener("click", function() {
    document.location.replace('/shop');
});

document.getElementById("saveItem-button").addEventListener("click", function(event) {
    event.preventDefault();
    document.location.replace('/shop');

    // Do save item stuff
    console.log('click');
});