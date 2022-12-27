// load a url and a file object
//var loadFile = function (event) {
//var upload = document.querySelector('input[type=file]').files[0];
//watermark([upload, './image/pcc-logo.png'])
//  .image(watermark.image.lowerRight(0.5))
//  .then(function (img) {
//    document.getElementById('preview').appendChild(img);
//  });};

const myWatermark = function () {

    wmark.init({
      /* config goes here */
      "position": "top-right", // default "bottom-right"
      "opacity": 50, // default 50
      "className": "preview-selected-image", // default "watermark"
      "path": "./image/pcc-logo.png"
    });

    load = true;
  }


/**
 * Create an arrow function that will be called when an image is selected.
 */
const previewImage = (event) => {
  /**
   * Get the selected files.
   */
  const imageFiles = event.target.files;
  /**
   * Count the number of files selected.
   */
  const imageFilesLength = imageFiles.length;
  /**
   * If at least one image is selected, then proceed to display the preview.
   */
  if (imageFilesLength > 0) {
      /**
       * Get the image path.
       */
      const imageSrc = URL.createObjectURL(imageFiles[0]);
      /**
       * Select the image preview element.
       */
      const imagePreviewElement = document.querySelector("#preview-selected-image");
      /**
       * Assign the path to the image preview element.
       */
      imagePreviewElement.src = imageSrc;
      /**
       * Show the element by changing the display value to "block".
       */
      imagePreviewElement.style.display = "block";
  }
};