document.addEventListener("DOMContentLoaded", () => {
    const uploadBtn = document.getElementById("upload-btn");
    const imageUpload = document.getElementById("image-upload");
    const userGallery = document.getElementById("user-gallery");

    if (uploadBtn) {
        uploadBtn.addEventListener("click", () => {
            if (imageUpload.files.length > 0) {
                const file = imageUpload.files[0];
                const reader = new FileReader();
                reader.onload = () => {
                    const img = document.createElement("div");
                    img.className = "image-card";
                    img.style.backgroundImage = `url('${reader.result}')`;
                    userGallery.appendChild(img);
                };
                reader.readAsDataURL(file);
            } else {
                alert("Please select an image to upload.");
            }
        });
    }
});