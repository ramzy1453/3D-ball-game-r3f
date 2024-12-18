import { boxGeometry } from "@/libs/geometries.ts";
import { floor1Material } from "@/libs/materials.ts";
import { BlockProps } from "@/types/Block";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export default function EndBlock({ position }: BlockProps) {
  const bligha = useGLTF("assets/bligha.glb");
  bligha.scene.children.forEach((mesh) => {
    mesh.castShadow = true;
  });

  return (
    <group position={position}>
      <mesh
        receiveShadow
        position={[0, 0, 0]}
        scale={[4, 0.2, 4]}
        material={floor1Material}
        geometry={boxGeometry}
      ></mesh>

      <RigidBody
        type="fixed"
        colliders="hull"
        restitution={0.2}
        friction={0}
        position={[0, 0.3, 0]}
      >
        <primitive
          scale={0.5}
          rotation={[0, Math.PI / 8, 0]}
          object={bligha.scene}
        ></primitive>
      </RigidBody>
    </group>
  );
}
