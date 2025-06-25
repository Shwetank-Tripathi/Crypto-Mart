import { useEffect, useRef } from "react";

// Particle class for creating animated particles
class Particle {
    // Constructor to initialize particle properties
    constructor(radius, x, y, dx, dy, color) {
        // Particle radius for size
        this.radius = radius;
        // X coordinate position
        this.x = x;
        // Y coordinate position
        this.y = y;
        // X direction velocity
        this.dx = dx;
        // Y direction velocity
        this.dy = dy;
        // Particle color
        this.color = color;
    }

    // Method to draw the particle on canvas
    draw(ctx) {
        // Begin drawing path
        ctx.beginPath();
        // Draw circular particle
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        // Set fill color
        ctx.fillStyle = this.color;
        // Fill the particle
        ctx.fill();
    }

    // Method to update particle position and handle bouncing
    update($canvas) {
        // Check if particle hits left or right edge and reverse X direction
        if (this.x < this.radius || this.x > $canvas.width - this.radius) {
            this.dx *= -1;
        }

        // Check if particle hits top or bottom edge and reverse Y direction
        if (this.y < this.radius || this.y > $canvas.height - this.radius) {
            this.dy *= -1;
        }

        // Update particle position based on velocity
        this.x += this.dx;
        this.y += this.dy;
    }
}

export default function ParticlesBg() {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (!canvasRef.current) {
            throw new Error("Canvas not found");
        }

        const $canvas = canvasRef.current;
        $canvas.width = window.innerWidth * 2;
        $canvas.height = window.innerHeight * 2;

        const ctx = $canvas.getContext("2d");

        let particles = [];
        let reqId = null;

        init();

        window.addEventListener("resize", handleResize);

        function handleResize() {
            $canvas.width = window.innerWidth * 2;
            $canvas.height = window.innerHeight * 2;

            init();
        }

        function init() {
            let numParticles = Math.min(150, Math.round(($canvas.width * $canvas.height) / 10_000));
            particles = [];

            for (let i = 0; i < numParticles; ++i) {
                let r = Math.random() * 3 + 1;
                let x = Math.random() * ($canvas.width - r) + r;
                let y = Math.random() * ($canvas.height - r) + r;
                let dx = (Math.random() > 0.5 ? 1 : -1) * Math.random();
                let dy = (Math.random() > 0.5 ? 1 : -1) * Math.random();

                particles.push(new Particle(r, x, y, dx, dy, "#ddd"));
            }

            if (reqId != null) {
                cancelAnimationFrame(reqId);
            }

            animate();
        }

        function animate() {
            ctx.clearRect(0, 0, $canvas.width, $canvas.height);

            for (let p of particles) {
                p.draw(ctx);
                p.update($canvas);
            }

            connect();
            reqId = requestAnimationFrame(animate);
        }

        function connect() {
            for (let p1 of particles) {
                for (let p2 of particles) {
                    let distance = Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));

                    if (distance < 150) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(221, 221, 221,${1 - distance / 150})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }
        }

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return <canvas className="fixed top-0 left-0 -z-10 w-screen h-screen pointer-events-none" ref={canvasRef}></canvas>;
}