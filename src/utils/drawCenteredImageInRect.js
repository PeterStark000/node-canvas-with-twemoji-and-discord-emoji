const { drawImage } = require('canvas');

module.exports = async function drawCenteredImageInRect = function(context, image, startX, startY, scale) {

var imageHeight = getScale(image.height, image.width).height
var imageWidth = getScale(image.height, image.width).width

var imageStartX = (startX + (scale/2)) - (imageHeight/2);
var imageStartY = (startY + (scale/2)) - (imageWidth/2);

  drawImage(image, imageStartX, imageStartY, imageHeight, imageWidth);
  
  function getScale(height, width) {
    if (height > width) return {width: scale, height: ((width*scale)/height)}
    else return {height: scale, width: ((height*scale)/width)}
  }
  
  function getOrder(n1, n2) {
    if (n1 >= n2) return (n1-n2)
    else return (n2- n1)
  }
}
