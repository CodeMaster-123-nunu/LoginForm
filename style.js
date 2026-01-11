// JS for Crazy Features, Animations, Effects & Functionalities

        // Particle Effect (Crazy Background)
        const particlesContainer = document.querySelector('.particles');
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.width = particle.style.height = `${Math.random() * 20 + 10}px`;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.animationDuration = `${Math.random() * 5 + 5}s`;
            particle.style.animationDelay = `${Math.random() * 5}s`;
            particlesContainer.appendChild(particle);
        }

        // Password Toggle (Show/Hide)
        const passwordInput = document.getElementById('password');
        const passwordToggle = document.getElementById('passwordToggle');
        passwordToggle.addEventListener('click', () => {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            passwordToggle.classList.toggle('fa-eye-slash');
        });

        // Form Submission with Loading Spinner & Confetti Success
        const form = document.getElementById('loginForm');
        const spinner = document.getElementById('spinner');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            spinner.style.display = 'block';
            form.querySelector('.submit-btn').disabled = true;

            setTimeout(() => {
                spinner.style.display = 'none';
                form.querySelector('.submit-btn').disabled = false;
                if (Math.random() > 0.2) {  // Simulated success (80% chance)
                    launchConfetti();
                    alert("Login successful! Welcome back 🌟");
                } else {  // Simulated error with shake
                    form.classList.add('shake');
                    setTimeout(() => form.classList.remove('shake'), 500);
                    alert("Oops! Wrong credentials. Try again! 😅");
                }
            }, 2000);
        });

        // Confetti Effect (Crazy Celebration on Success)
        function launchConfetti() {
            const canvas = document.getElementById('confetti-canvas');
            canvas.style.display = 'block';
            const ctx = canvas.getContext('2d');
            canvas.width = 400;
            canvas.height = 600;

            const confetti = [];
            for (let i = 0; i < 100; i++) {
                confetti.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height - canvas.height,
                    size: Math.random() * 5 + 5,
                    speed: Math.random() * 5 + 2,
                    color: `hsl(${Math.random() * 360}, 100%, 50%)`,
                    rotation: Math.random() * 360,
                    rotSpeed: Math.random() * 10 - 5
                });
            }

            function animate() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                confetti.forEach(c => {
                    c.y += c.speed;
                    c.rotation += c.rotSpeed;
                    ctx.fillStyle = c.color;
                    ctx.save();
                    ctx.translate(c.x, c.y);
                    ctx.rotate(c.rotation * Math.PI / 180);
                    ctx.fillRect(-c.size / 2, -c.size / 2, c.size, c.size);
                    ctx.restore();
                    if (c.y > canvas.height) c.y = -c.size;
                });
                requestAnimationFrame(animate);
            }
            animate();

            setTimeout(() => canvas.style.display = 'none', 5000);  // Stop after 5s
        }