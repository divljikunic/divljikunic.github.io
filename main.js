
import * as THREE from './node_modules/three/build/three.module.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 120, window.innerWidth / window.innerHeight, 0.1, 10000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

// wireframe plane

let geo = null;
let geo2 = null;

const loader = new OBJLoader();
loader.load('default.obj', 
            function ( object ) {
                geo2 = object;
                scene.add(geo2);
                //geo.scale.x = geo.scale.y = geo.scale.z = 10.0;
            }, 
            undefined, 
            function ( error ) {
	            console.error( error );
            });


// const objLoader = new OBJLoader();
// objLoader.load('male02.obj', (root) => {
//     scene.add(root);
// });

//geo = new THREE.SphereGeometry( 15, 32, 6 );
// const wireframe = new THREE.WireframeGeometry( geo2 );
// const line = new THREE.LineSegments( wireframe );
// line.material.depthTest = false;
// line.material.opacity = 0.25;
// line.material.transparent = true;
// scene.add( line );

const ambientLight = new THREE.AmbientLight( 0xcccccc, 0.4 );
				scene.add( ambientLight );

const controls = new OrbitControls( camera, renderer.domElement );
camera.position.set( 0, 20, 100 );
controls.update();

function animate() {
    requestAnimationFrame( animate );

    controls.update();

    renderer.render( scene, camera );
};

animate();