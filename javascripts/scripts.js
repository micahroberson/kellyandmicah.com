$(document).ready(function() {
  var images = [
    'images/DSC00049.jpg',
    'images/DSC00053.jpg',
    'images/DSC00047.jpg'
  ];
  // var current = 0;
  // function timeout () {
  //   setTimeout(function () {
  //     if (current < images.length - 1) {
  //       current += 1;
  //     } else {
  //       current = 0;
  //     }
  //     var url = images[current];
  //     console.log(current);
  //     console.log(url);
  //     document.body.parentNode.setAttribute('style', 'background: url("' + url + '") no-repeat center center fixed;-webkit-background-size: cover;-moz-background-size: cover;-o-background-size: cover;background-size: cover;');
  //     timeout();
  //   }, 3000);
  // }
  // timeout();
  $.backstretch(images, {duration: 6000, fade: 1500});
});