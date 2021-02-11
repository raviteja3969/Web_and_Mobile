function upDate(previewPic) {
    /* In this function you should
       1) change the url for the background image of the div with the id = "image"
       to the source file of the preview image

       2) Change the text  of the div with the id = "image"
       to the alt text of the preview image
       */
    $('#image').css('background-image', 'url('+previewPic.src+ ')');// Changing url for background og the div where picture should be displayed
    $('#image').text(previewPic.alt); // Using alt attribute to change text when mouse moves on to the picture

}

function unDo() {
    /* In this function you should
   1) Update the url for the background image of the div with the id = "image"
   back to the orginal-image.  You can use the css code to see what that original URL was

   2) Change the text  of the div with the id = "image"
   back to the original text.  You can use the html code to see what that original text was
   */
    $('#image').text("Hover over an image below to display here.");// Changing the text back to what it was after mouse moving out of the image
    $('#image').css('background-image', 'none');// Changing the background back to normal after moves moves out of the image

}
