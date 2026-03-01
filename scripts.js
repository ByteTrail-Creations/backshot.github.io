window.addEventListener('scroll', () => {
    const rule = document.getElementById('mainRule');
    const wrapper = document.querySelector('.scroll-wrapper');
    
    // Calculate scroll progress (0 to 1)
    const start = wrapper.offsetTop;
    const end = wrapper.offsetHeight - window.innerHeight;
    let progress = (window.scrollY - start) / end;
    progress = Math.min(Math.max(progress, 0), 1);

    // Animation values
    const rotate = 80 - (progress * 80); // 80deg to 0deg
    const moveY = 300 - (progress * 300); // 300px to 0px
    const zoom = 0.6 + (progress * 0.5); // 0.6x to 1.1x scale

    // Apply styles
    rule.style.transform = `rotateX(${rotate}deg) translateY(${moveY}px) scale(${zoom})`;
    
    // Adjust shadow based on height
    rule.style.boxShadow = `0 ${40 * progress}px ${80 * progress}px rgba(0,0,0,0.8)`;
});

document.addEventListener("DOMContentLoaded", function () {

    const popup = document.getElementById("startupPopup");
    const okBtn = document.getElementById("popupOk");

    // Check if popup was already shown
    if (!localStorage.getItem("popupShown")) {
        popup.style.display = "flex";
    }

    okBtn.addEventListener("click", function () {
        popup.style.display = "none";
        localStorage.setItem("popupShown", "true");
    });

});
