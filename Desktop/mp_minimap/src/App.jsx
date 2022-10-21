import { useEffect } from 'react';

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import SceneInit from './lib/SceneInit';
import Iframe from './lib/Iframe';





function App() {




  useEffect(() => {
    const test = new SceneInit('myThreeJsCanvas');


    const key = 's91yirzafm4cn2e9xzqfnd8xa';
    test.initialize();
    test.animate();

    let loadedModel0;
    const glftLoader0 = new GLTFLoader();
    glftLoader0.load('./assets/plant/scene.gltf', (gltfScene) => {
      loadedModel0 = gltfScene;
      gltfScene.scene.position.set(17, -14, 5);
      gltfScene.scene.scale.set(1.5, 1.5, 1.5);
      test.scene.add(gltfScene.scene);
    });

    let loadedModel;
    const glftLoader = new GLTFLoader();
    glftLoader.load('./assets/home/scene.gltf', (gltfScene) => {
      loadedModel = gltfScene;
      gltfScene.scene.position.set(0, -14, 0);
      gltfScene.scene.scale.set(6, 6, 6);
      test.scene.add(gltfScene.scene);
    });


  }, []);

  return (
    <div>
      <canvas id="myThreeJsCanvas" />
      
    </div>
  );
}

export default App;
