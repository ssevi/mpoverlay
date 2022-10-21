import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Stats from 'three/examples/jsm/libs/stats.module';

export default class SceneInit {
  constructor(canvasId) {
    // NOTE: Core components to initialize Three.js app.
    this.scene = undefined;
    this.camera = undefined;
    this.renderer = undefined;

    // NOTE: Camera params;
    this.fov = 45;
    this.nearPlane = 1;
    this.farPlane = 1000;
    this.canvasId = canvasId;

    // NOTE: Additional components.
    this.clock = undefined;
    this.stats = undefined;
    this.controls = undefined;

    // NOTE: Lighting is basically required.
    this.ambientLight = undefined;
    this.directionalLight = undefined;
  }

  initialize() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      this.fov,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    this.camera.position.z = 48;

    // NOTE: Specify a canvas which is already created in the HTML.
    const canvas = document.getElementById(this.canvasId);
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      // NOTE: Anti-aliasing smooths out the edges.
      antialias: true,
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    // this.renderer.shadowMap.enabled = true;
    document.body.appendChild(this.renderer.domElement);

    this.clock = new THREE.Clock();
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.panSpeed = 2;
    this.controls.rotateSpeed = 2;
    // this.controls.maxDistance = 10;

    this.stats = Stats();
    document.body.appendChild(this.stats.dom);

    // ambient light which is for the whole scene
    this.ambientLight = new THREE.AmbientLight(0xffffff, 2);
    this.ambientLight.castShadow = true;
    this.scene.add(this.ambientLight);


    this.directionalLight = new THREE.DirectionalLight(0xffffff, 8);
    this.directionalLight.position.set(0, 32, 64);
    this.scene.add(this.directionalLight);


      this.directionalLight2 = new THREE.DirectionalLight(0xffffff, 8);
      this.directionalLight2.position.set(20, 32, 64);
      this.scene.add(this.directionalLight2);

      this.directionalLight2 = new THREE.DirectionalLight(0xffffff, 8);
      this.directionalLight2.position.set(-20, 32, 64);
      this.scene.add(this.directionalLight2);

    // if window resizes
    window.addEventListener('resize', () => this.onWindowResize(), false);
    let insetwidth, insetheight;

 
    const aspect = window.innerWidth / window.innerHeight;
  
    
    this.camera.position.set(-10, 30, 30);
 
    
    //overhead camera
   this.cameratop = new THREE.PerspectiveCamera(
      90, 
      aspect,
      0.01, 
      500,
      
      );

      this.cameratop.position.set(0, 100, 0);
    this.cameratop.lookAt(0, 0, 0);
    // border color
    
    this.cameratop.Name = "OverheadCam";
    
    this.camera.add(this.cameratop);
    this.scene.add(this.cameratop);
    // NOTE: Load space background.
    // this.loader = new THREE.TextureLoader();
    // this.scene.background = this.loader.load('./assets/bg/bg.webp');

    // //NOTE: Declare uniforms to pass into glsl shaders.
    // this.uniforms = {
    //   u_time: { type: 'f', value: 1.0 },
    //   colorB: { type: 'vec3', value: new THREE.Color(0xfff000) },
    //   colorA: { type: 'vec3', value: new THREE.Color(0xffffff) },
    // };
  }
  animate() {
    // NOTE: Window is implied.
    // requestAnimationFrame(this.animate.bind(this));
    window.requestAnimationFrame(this.animate.bind(this));
    this.render();
    this.stats.update();
    this.controls.update();
  }

  render() {
    this.renderer.setAnimationLoop(this.animate);
      this.renderer.setViewport(0, 0, window.innerWidth, window.innerHeight);
      this.renderer.render( this.scene, this.camera );
      this.renderer.clearDepth();
      this.renderer.setScissorTest(true);
      this.renderer.setScissor(
          window.innerWidth - this.insetwidth- 16,
          window.innerHeight - this.insetheight- 16,
          this.insetwidth,
          this.insetheight
      );
      this.renderer.setViewport(
    
          window.innerWidth - this.insetwidth- 16,
          window.innerHeight - this.insetheight- 16,
          this.insetwidth,
          this.insetheight   
      );

    this.renderer.render(this.scene, this.cameratop);
    this.renderer.setScissorTest(false);
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    this.insetwidth = window.innerWidth /4;  
    this.insetheight = window.innerHeight /4;
    
    this.cameratop.aspect = this.insetwidth / this.insetheight;
    // this.cameratop.setClearColor(0xff0000);
    this.cameratop.updateProjectionMatrix();
  }
}
