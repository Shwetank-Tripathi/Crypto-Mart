addEventListener('mousemove', (e) => {
    const cursor = document.getElementById('cursor');
    if (/Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent)) {
        cursor.style.opacity = '0';
    }
    if (!cursor) {
        console.log("no cursor")
        return;
    }
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${ e.clientX}px`;
})

export const initCursor = () => {
    const cursor = document.getElementById('cursor');
    cursor.style.display = "block";
    if (/Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent)) {
        cursor.style.opacity = '0';
    }
}
