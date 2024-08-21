const cursor = document.getElementById('custom-cursor');

        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            cursor.style.left = `${mouseX}px`;
            cursor.style.top = `${mouseY}px`;
        });

document.querySelectorAll('.links a').forEach(button => {
            button.addEventListener('mousedown', () => {
                button.style.transform = 'scale(0.95)';
            });
        
            button.addEventListener('mouseup', () => {
                button.style.transform = 'scale(1)';
            });
        
            button.addEventListener('mouseleave', () => {
                button.style.transform = 'scale(1)';
            });
        });
        