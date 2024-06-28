import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import { AmbientLight } from "three";
import Lights from "./Lights";
import Iphone from "./Iphone";
import { Suspense } from "react";
import * as THREE from "three";


const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationSize,
  item,
  size,
}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full ${index === 2 ? 'right-[-100%]' : ''}`}
    >
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0,0,4]}/>
      <Lights/>
      <OrbitControls
      makeDefault
      ref={controlledRef}
      enableZoom={false}
      enablePan={false}
      rotateSpeed={0.4}
      target={new THREE.Vector3(0,0,0)}
      onEnd={() => setRotationSize}
      />
      <group ref={groupRef} name={`${index === 1} ? 'small' : 'large'`} position={[0,0,0]}>
      <Suspense fallback={<div>Loading...</div>}>
      <Iphone/>
      </Suspense>
      </group>
    </View> 
  );
};

export default ModelView;
