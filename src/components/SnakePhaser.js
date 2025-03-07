import React, { useEffect, useRef } from "react"
import Phaser from "phaser"
import ReactDOM from "react-dom"

const SnakePhaser = ({ origin, onComplete }) => {
    const containerRef = useRef(document.createElement("div"))

    useEffect(() => {
        if (!origin) return

        // Create a full-screen container attached to document.body
        const container = containerRef.current
        container.style.position = "fixed"
        container.style.top = "0"
        container.style.left = "0"
        container.style.width = "100vw"
        container.style.height = "100vh"
        container.style.pointerEvents = "none"
        container.style.zIndex = "1000"
        document.body.appendChild(container)

        // Use the provided origin (in viewport coordinates)
        const relativeOrigin = { x: origin.x, y: origin.y }

        const config = {
            type: Phaser.AUTO,
            width: window.innerWidth,
            height: window.innerHeight,
            transparent: true,
            parent: container,
            scene: {
                create: create,
                update: update,
            },
            autoFocus: false,
        }

        let snakes = []
        let scene
        const resolution = 32
        const game = new Phaser.Game(config)

        function create() {
            scene = this
            const snakeCount = 6

            for (let i = 0; i < snakeCount; i++) {
                // Create a Graphics object at the relative origin.
                let snake = this.add.graphics({
                    x: relativeOrigin.x,
                    y: relativeOrigin.y,
                })
                snake.lineStyle(3, 0x000000, 1)

                // Draw an S-shaped snake using two quadratic bezier curves.
                // The curves are defined so that the snake is centered on (0,0)
                const curve1 = new Phaser.Curves.QuadraticBezier(
                    new Phaser.Math.Vector2(-40, 0),
                    new Phaser.Math.Vector2(-20, -10),
                    new Phaser.Math.Vector2(0, 0)
                )
                const curve2 = new Phaser.Curves.QuadraticBezier(
                    new Phaser.Math.Vector2(0, 0),
                    new Phaser.Math.Vector2(20, 10),
                    new Phaser.Math.Vector2(40, 0)
                )
                // Draw both curves onto the graphics object.
                curve1.draw(snake, resolution)
                curve2.draw(snake, resolution)

                // Start as a dot: set scale to 0.
                snake.setScale(0)
                // Tween to full size (scale 1) over 500ms.
                this.tweens.add({
                    targets: snake,
                    scaleX: 1,
                    scaleY: 1,
                    duration: 500,
                    ease: "Power2.easeOut",
                })

                // Evenly distribute directions (with a slight random offset) so they spread out.
                const baseAngle = (i / snakeCount) * 2 * Math.PI
                const randomOffset = (Math.random() - 0.5) * 0.2
                snake.direction = baseAngle + randomOffset

                // Set a moderate speed.
                snake.speed = 30 + Math.random() * 20 // pixels per second

                // Start fully opaque.
                snake.alpha = 1

                snakes.push(snake)
            }
        }

        function update(time, delta) {
            const dt = delta / 1000
            snakes.forEach((snake) => {
                // Move snake outward along its assigned direction.
                snake.x += Math.cos(snake.direction) * snake.speed * dt
                snake.y += Math.sin(snake.direction) * snake.speed * dt

                // Gradually fade out.
                snake.alpha = Math.max(0, snake.alpha - 0.1 * dt)
            })
        }

        // Destroy the game after 4 seconds.
        const timeout = setTimeout(() => {
            if (game && !game.destroyed) {
                game.destroy(true)
            }
            if (onComplete) onComplete()
        }, 4000)

        return () => {
            clearTimeout(timeout)
            if (game && !game.destroyed) {
                game.destroy(true)
            }
            if (container.parentNode) {
                container.parentNode.removeChild(container)
            }
        }
    }, [origin, onComplete])

    // Render nothing in React; we use a portal to render the Phaser canvas.
    return ReactDOM.createPortal(null, containerRef.current)
}

export default SnakePhaser
