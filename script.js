// Import Three.js and OrbitControls as ES modules
import * as THREE from 'three';
import { OrbitControls } from './js/OrbitControls.js';

// Ensure Three.js is loaded (this check might be redundant with module imports)
// if (typeof THREE === 'undefined') {
//     console.error('Three.js has not been loaded. Make sure it is included before this script.');
// }

// 1. Select the canvas element
const canvas = document.getElementById('donutCanvas');
if (!canvas) {
    console.error('Canvas element with ID "donutCanvas" not found.');
}

// 2. Initialize the Scene
const scene = new THREE.Scene();

// 3. Initialize the PerspectiveCamera
// Parameters: fov, aspect ratio, near clipping plane, far clipping plane
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// Set camera position (x, y, z)
camera.position.set(0, 0, 5);

// 4. Initialize the WebGLRenderer
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
// Append renderer to the body, though it's already associated with the canvas.
// If the canvas were just a container, we'd append to canvas.parentNode or document.body.
// document.body.appendChild(renderer.domElement); // Not strictly necessary if canvas is passed to renderer

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// 5. Create TorusGeometry for the donut shape
// Parameters: radius, tube diameter, radial segments, tubular segments
const donutGeometry = new THREE.TorusGeometry(1, 0.4, 16, 100);

// 6. Create a MeshStandardMaterial for the donut
const donutMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 }); // Green color

// 7. Create a Mesh using the geometry and material
const donut = new THREE.Mesh(donutGeometry, donutMaterial);
// Add the donut to the scene
scene.add(donut);

// 8. Add AmbientLight to the scene
// Provides a general illumination to all objects in the scene
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // White light, half intensity
scene.add(ambientLight);

// 9. Add a PointLight to the scene
// Emits light from a single point in all directions
const pointLight = new THREE.PointLight(0xffffff, 1); // White light, full intensity
pointLight.position.set(5, 5, 5); // Set light position
scene.add(pointLight);

// 10. Setup OrbitControls for interactive camera movement
let controls;
if (typeof OrbitControls !== 'undefined') {
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Optional, but adds a nice smoothing effect
    controls.dampingFactor = 0.05;
    // controls.autoRotate = true; // Uncomment for auto-rotation
} else {
    console.error('OrbitControls import failed. Interactive controls will not be available.');
}

// 11. Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Update controls if they are initialized
    if (controls) {
        controls.update();
    }

    // Optional: Animate the donut
    // donut.rotation.x += 0.01;
    // donut.rotation.y += 0.01;

    renderer.render(scene, camera);
}

// Start the animation loop if canvas exists
if (canvas) {
    animate();
} else {
    // Fallback for the initial render if canvas wasn't found, though animate() won't run.
    // This part might be redundant given the canvas check at the top.
    // renderer.render(scene, camera); 
}
