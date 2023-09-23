// import React, { Suspense, useState, useEffect } from "react";
// import { Canvas } from "@react-three/fiber";
// import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
// import CanvasLoader from '../Loader';

// const Ball = (props) => {
//   const [decal] = useTexture([props.imgUrl]);
//   const [rotation, setRotation] = useState({ x: 0, y: 0 });


//   return (
//     <Float speed={1.75} rotationIntensity={0.5} floatIntensity={2}>
//       <ambientLight intensity={1} />
//       <directionalLight position={[0, 0, 3]} />
//       <mesh castShadow receiveShadow scale={2.75} >
//         <boxGeometry args={[1, 1]} />
//         <meshStandardMaterial 
//           color="#fff8eb"
//           polygonOffset
//           polygonOffsetFactor={-5}
//           flatShading
//         />
//         <Decal 
//           position={[0, 0, 0.5]}
//           rotation={[2 * Math.PI, 0, 6.25]}
//           flatShading
//           map={decal}
//         />
//       </mesh>
//     </Float>
//   );
// }

// const BallCanvas = ({ icon }) => {
//   return (
//     <Canvas 
//       frameloop='demand'
//       dpr={[1, 2]}
//       gl = {{preserveDrawingBuffer: true}}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//           autoRotate 
//           autoRotateSpeed={4}/>
//         <Ball imgUrl={icon} />
//       </Suspense>
//       <Preload all />
//     </Canvas>
//   );
// }

// export default BallCanvas;
