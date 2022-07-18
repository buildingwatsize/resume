import dynamic from 'next/dynamic';

// Will only import `react-p5` on client-side
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false
})

// Particles along the path
class Particle {
  constructor(p5, position, force, hue) {
    this.p5 = p5;
    this.position = p5.createVector(position.x, position.y);
    this.velocity = p5.createVector(force.x, force.y);
    this.drag = 0.95;
    this.lifespan = 255;
  }

  update() {
    // Move it
    this.position.add(this.velocity);
    // Slow it down
    this.velocity.mult(this.drag);
    // Fade it out
    this.lifespan--;
  }

  // Draw particle and connect it with a line
  // Draw a line to another
  display(other) {
    this.p5.stroke(0, this.lifespan);
    this.p5.fill(0, this.lifespan / 2);
    this.p5.ellipse(this.position.x, this.position.y, 8, 8);
    // If we need to draw a line
    if (other) {
      this.p5.line(this.position.x, this.position.y, other.position.x, other.position.y);
    }
  }
}

// A Path is a list of particles
class Path {
  constructor(p5) {
    this.p5 = p5;
    this.particles = [];
    this.hue = p5.random(100);
  }

  add(position, force) {
    // Add a new particle with a position, force, and hue
    this.particles.push(new Particle(this.p5, position, force, this.hue));
  }

  // Display plath
  update() {
    for (const p of this.particles) {
      p.update();
    }
  }

  // Display plath
  display() {
    // Loop through backwards
    for (let i = this.particles.length - 1; i >= 0; i--) {
      // If we shold remove it
      if (this.particles[i].lifespan <= 0) {
        this.particles.splice(i, 1);
        // Otherwise, display it
      } else {
        this.particles[i].display(this.particles[i + 1]);
      }
    }
  }
}

const DrawingParticles = () => {

  // All the paths
  let paths = [];
  // Are we painting?
  let painting = false;
  // How long until the next circle
  let next = 0;
  // Where are we now and where were we?
  let current;
  let previous;

  const setup = (p5, canvasParentRef) => {
    const offset = 100
    let cnv = p5.createCanvas(canvasParentRef.parentElement.clientWidth, canvasParentRef.parentElement.clientHeight + offset).parent(canvasParentRef)

    current = p5.createVector(0, 0);
    previous = p5.createVector(0, 0);

    const startDraw = () => {
      next = 0;
      painting = true;
      previous.x = p5.mouseX;
      previous.y = p5.mouseY;
      paths.push(new Path(p5));
    }
    const endDraw = () => {
      painting = false;
    }
    cnv.mousePressed(startDraw)
    cnv.mouseReleased(endDraw)
    cnv.touchStarted(startDraw)
  };


  const draw = (p5) => {
    p5.background(241, 238, 229);

    // If it's time for a new point
    if (p5.millis() > next && painting) {

      // Grab mouse position      
      current.x = p5.mouseX;
      current.y = p5.mouseY;

      // New particle's force is based on mouse movement
      let force = p5.constructor.Vector.sub(current, previous);
      force.mult(0.05);

      // Add new particle
      paths[paths.length - 1].add(current, force);

      // Schedule next circle
      next = p5.millis() + p5.random(100);

      // Store mouse values
      previous.x = current.x;
      previous.y = current.y;
    }

    // Draw all paths
    for (const p of paths) {
      p.update();
      p.display();
    }
  }

  return (
    // Will only render on client-side
    <Sketch setup={setup} draw={draw} />
  )
}

export default DrawingParticles
