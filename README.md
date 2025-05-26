#Implement interactive 3D donut using Three.js


Configurable response
feat: Adds an HTML page that renders a 3D donut (torus) using the Three.js library.

Key features:
- A `TorusGeometry` is used for the donut shape with a `MeshStandardMaterial`.
- Scene includes `AmbientLight` and `PointLight` for illumination.
- `OrbitControls` are implemented, allowing you to rotate and zoom the camera using the mouse.
- An animation loop ensures continuous rendering and smooth interaction.
- Basic CSS is provided to style the page and ensure the canvas fills the viewport.

The project structure includes:
- `index.html`: The main HTML file.
- `script.js`: Contains the Three.js logic for scene setup, rendering, and controls.
- `js/OrbitControls.js`: The OrbitControls module for Three.js.
- `style.css`: Basic styling for the page.
