document.addEventListener("DOMContentLoaded", () => {
    const gallery =
        document.getElementById("gallery") ||
        document.getElementById("public-gallery");
    if (gallery) {
        for (let i = 1; i <= 10; i++) {
            const img = document.createElement("div");
            img.className = "image-card";
            img.style.backgroundImage = `url('images/sample${i}.jpg')`;
            gallery.appendChild(img);
        }
    }
});