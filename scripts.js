const MouareCircles = (() => {
    const canvas1 = document.getElementById('circle1');
    const canvas2 = document.getElementById('circle2');

    function drawCircle(canvas) {
        const coefficient = window.innerWidth > 800 ? 10 : 6;
        const context = canvas.getContext('2d');
        const center = canvas.width / 2;

        context.lineWidth = 2;
        context.strokeStyle = '#d7a800';
        context.shadowOffsetX = 0;
        context.shadowOffsetY = 0;
        context.shadowBlur = 5;

        // for simple shadow
        // context.shadowColor = "#ffc800";

        for (let i = 0; i < 400; i++) {
            //for stepped shadow
            context.shadowColor = `hsl(47, 100%, ${(i % 100) + 30}%)`;
            const radius = i % coefficient == 0 ? (i < center ? i : 0) : 0;
            context.beginPath();
            context.arc(center, center, radius, 2 * Math.PI, false);
            context.stroke();
        }
    }

    function setMouareCircles() {
        canvas2.height = canvas2.width = canvas1.height = canvas1.width = window.innerWidth / 2;
        drawCircle(canvas1);
        drawCircle(canvas2);
    }

    return setMouareCircles;
})();

window.addEventListener('load', MouareCircles, false);
window.addEventListener('resize', MouareCircles, false);
