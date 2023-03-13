// @ts-nocheck

import { Vector3 } from "three";
import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Text3D, Center, SpotLight, useDepthBuffer } from "@react-three/drei";
import { useLocales } from "@/locales";
import { useMediaQuery } from "react-responsive";

function MovingSpot({ vec = new Vector3(), distance = 16, ...props }) {
  const light = useRef();
  const viewport = useThree((state) => state.viewport);
  useFrame((state) => {
    light.current.target.position.lerp(
      vec.set(
        (state.mouse.x * viewport.width) / 2,
        (state.mouse.y * viewport.height) / 2,
        0
      ),
      0.1
    );
    light.current.target.updateMatrixWorld();
  });
  return (
    <SpotLight
      castShadow
      ref={light}
      penumbra={0.5}
      distance={distance}
      angle={1.2}
      attenuation={5}
      anglePower={3}
      intensity={2}
      {...props}
    />
  );
}

function DesktopScene() {
  const { t } = useLocales();
  const depthBuffer = useDepthBuffer({ frames: 1 });
  return (
    <>
      <MovingSpot
        depthBuffer={depthBuffer}
        color="#0c8cbf"
        position={[3, 3, 2]}
        distance={30}
      />
      <MovingSpot
        depthBuffer={depthBuffer}
        color="#b00c3f"
        position={[1, 3, 0]}
        distance={30}
      />
      {/* <Light /> */}
      <ambientLight intensity={0.015} />
      <Center position={[0, 0, 0]}>
        <Text3D
          size={0.4}
          letterSpacing={0.01}
          height={0.05}
          font="/fonts/Microsoft_YaHei_Regular.json"
        >
          {t(`Hi, I'm Yr`)}
          <meshStandardMaterial color="white" />
        </Text3D>
        <Text3D
          size={0.3}
          letterSpacing={0.01}
          height={0.05}
          font="/fonts/Microsoft_YaHei_Regular.json"
          position={[0, -0.7, 0]}
        >
          {t(`Full Stack Development Engineer`)}
          <meshStandardMaterial color="white" />
        </Text3D>
        <Text3D
          size={0.3}
          letterSpacing={0.01}
          height={0.05}
          font="/fonts/Microsoft_YaHei_Regular.json"
          position={[0, -1.4, 0]}
        >
          {t(`Interest in Robotics Software and Real Time 3D`)}
          <meshStandardMaterial color="white" />
        </Text3D>
      </Center>
    </>
  );
}

function MobileScene() {
  const { t } = useLocales();
  const depthBuffer = useDepthBuffer({ frames: 1 });
  return (
    <>
      <MovingSpot
        depthBuffer={depthBuffer}
        color="#0c8cbf"
        position={[3, 3, 2]}
        distance={30}
      />
      <MovingSpot
        depthBuffer={depthBuffer}
        color="#b00c3f"
        position={[1, 3, 0]}
        distance={30}
      />
      {/* <Light /> */}
      <ambientLight intensity={0.015} />
      <Center position={[0, 0, 0]}>
        <Text3D
          size={0.25}
          letterSpacing={-0.01}
          height={0.1}
          font="/fonts/Microsoft_YaHei_Regular.json"
        >
          {t(`Hi, I'm Yr`)}
          <meshStandardMaterial color="white" />
        </Text3D>
        <Text3D
          size={0.15}
          letterSpacing={-0.01}
          height={0.1}
          font="/fonts/Microsoft_YaHei_Regular.json"
          position={[0, -0.5, 0]}
        >
          {t(`Full Stack Development Engineer`)}
          <meshStandardMaterial color="white" />
        </Text3D>
        <Text3D
          size={0.15}
          letterSpacing={-0.01}
          height={0.1}
          font="/fonts/Microsoft_YaHei_Regular.json"
          position={[0, -0.8, 0]}
        >
          {t(`Interest in Robotics Software and Real Time 3D`)}
          <meshStandardMaterial color="white" />
        </Text3D>
      </Center>
    </>
  );
}

export default function Hero() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  if (isDesktopOrLaptop) {
    return (
      <Canvas style={{ width: innerWidth, height: innerHeight }}>
        <DesktopScene />
      </Canvas>
    );
  } else {
    return (
      <Canvas style={{ width: innerWidth, height: innerHeight }}>
        <MobileScene />
      </Canvas>
    );
  }
}
