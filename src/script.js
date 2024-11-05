const uploadImage = document.getElementById('upload-image');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

uploadImage.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const img = new Image();
        img.src = e.target.result;
        img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
        };
    };

    if (file) {
        reader.readAsDataURL(file);
    }
});

function applyHairstyle(hairImage) {
    const hair = new Image();
    hair.src = hairImage;
    hair.onload = function() {
        ctx.drawImage(hair, 0, 0, canvas.width, canvas.height);
    };
}
