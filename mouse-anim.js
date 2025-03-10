



function working()
{

    const mouseScroll = document.querySelector(".mouse-scroll");
    const scrollContainer = document.querySelector(".scroll_cont");
    
    let isDown = false;
    let startX;
    let scrollLeft;
    
    // Mouse enter: Show and follow cursor
    scrollContainer.addEventListener("mouseenter", () => {
        mouseScroll.style.opacity = "1"; // Show the div
    });
    
    // Mouse move: Follow cursor even while dragging
    scrollContainer.addEventListener("mousemove", (e) => {
        const rect = scrollContainer.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
    
        const cursorSize = mouseScroll.offsetWidth / 2;
        mouseScroll.style.transform = `translate(${x - cursorSize}px, ${y - cursorSize}px)`;
    
        if (isDown) {
            const moveX = e.pageX - scrollContainer.offsetLeft;
            const walk = (moveX - startX) * 1.5;
            scrollContainer.scrollLeft = scrollLeft - walk;
    
            // 🔥 Keep updating the custom cursor position even while dragging
            mouseScroll.style.transform = `translate(${x - cursorSize}px, ${y - cursorSize}px)`;
        }
    });
    
    // Mouse leave: Hide the div
    scrollContainer.addEventListener("mouseleave", () => {
        mouseScroll.style.opacity = "0"; // Hide smoothly
    });
    
    // Dragging functionality
    scrollContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - scrollContainer.offsetLeft;
        scrollLeft = scrollContainer.scrollLeft;
        scrollContainer.style.cursor = "grabbing";
    
        // 🔥 Keep the custom div visible while dragging
        mouseScroll.style.opacity = "1";  
    });
    
    scrollContainer.addEventListener('mouseup', () => {
        isDown = false;
        scrollContainer.style.cursor = "grab";  
    });
    
    
    
}


working()


