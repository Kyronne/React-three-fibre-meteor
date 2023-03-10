import React from "react";
import {
  OrbitControls,
  PerspectiveCamera,
  Enviroment
} from "@react-three/drei"

function App(){
  return (
    <>
    <Enviroment 
    background={"only"}
    files={"/assets/textures/envmap_blur_hdr"}
    ground={{ height: 100, radius: 300}}
    />
    <Enviroment 
    background={false}
    files={"/assets/textures.envmap.hdr"}
    />

    <PerspectiveCamera makeDefault fov={33} position={[-0,09, 16.01, -27.9]}/>
    <OrbitControls target={[0.304, 0.806, 0.427]} maxPolarAngle={Math.PI * 0.45}/>
    </>
  );
}

export default App; 