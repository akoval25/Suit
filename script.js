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

const leftboxes = document.querySelectorAll('.leftbox');
const rightboxes = document.querySelectorAll('.rightbox');
const startlook = document.querySelector('.startlook');
const makeup = document.querySelector('.makeup');
const btn = document.querySelector('.btn');
let isLocked = false;

function createHearts() {
    for (let i = 0; i < 7; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        
        const size = Math.random() * 100 + 50; 
        heart.style.height = `${size}px`;
        heart.style.width = `${size}px`;
        heart.style.left = `${Math.random() * (btn.offsetWidth - size)}px`;
        heart.style.bottom = '0'; 
        btn.appendChild(heart);
        heart.style.display = 'block';
    }
}

function handleClick(isLeftBox) {
    if (isLocked) return; 
    rightboxes.forEach(rightbox => {
        rightbox.style.backgroundImage = "url('./img/Card.png')";
    });
    leftboxes.forEach(leftbox => {
        leftbox.style.backgroundImage = "url('./img/Card.png')";
    });

    if (isLeftBox) {
        leftboxes.forEach(leftbox => {
            leftbox.style.backgroundImage = "url('./img/Card_Active.png')";
        });
        startlook.style.backgroundImage = "url('./img/Look_01.png')";
    } else {
        rightboxes.forEach(rightbox => {
            rightbox.style.backgroundImage = "url('./img/Card_Active.png')";
        });
        startlook.style.backgroundImage = "url('./img/Look_02.png')";
    }

    makeup.style.backgroundImage = "url('./img/MU_Calm.png')";
    btn.classList.add('show');
    createHearts();
    isLocked = true;
}
leftboxes.forEach(leftbox => {
    leftbox.addEventListener('click', () => handleClick(true));
});

rightboxes.forEach(rightbox => {
    rightbox.addEventListener('click', () => handleClick(false));
});


function simulateButtonPress() {
    const button = document.querySelector('.btn');
    if (!button) return;
    button.classList.add('pressed');
    
    setTimeout(() => {
        button.classList.remove('pressed');
    }, 200);
}

document.querySelector('.btn').addEventListener('click', simulateButtonPress);
