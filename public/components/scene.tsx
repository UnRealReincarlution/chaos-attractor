import { Canvas, MeshProps, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Vector } from './vector'

const LORENZ_SIGMA = 10;
const LORENZ_RHO = 28;
const LORENZ_BETA = 8/3;
const LORENZ_DELTA = 0.01;

const Sphere: React.FC<MeshProps> = ({ position }) => {
	console.log(position);

	const [ state, setState ] = useState(new Vector(position[0], position[1], position[2]));
	const mesh = useRef<THREE.Mesh>(null!);

	useFrame(() => {
		console.log(state);

		setState(state.rk4(LORENZ_DELTA, nextPoint));
	})

	return (
		<mesh
			position={[state.x, state.y, state.z]}
			ref={mesh}
		>

			<sphereGeometry args={[.05, 3]} />
			<meshStandardMaterial color={'#fff'} />
		</mesh>
	)
}

const Scene = () => {
	const points = [ 
		new Vector(rand(10), rand(10), rand(10))
	];

    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />

			{
				points.map(e => (
					<Sphere position={[e.x, e.y, e.z]} key={Math.random() * 100}/> 
				))
			}
        </Canvas>
    )
}

var lorenzSystem = function (pos, sigma, rho, beta) {
	var x = sigma * (pos.y - pos.x),
		y = pos.x * (rho - pos.z) - pos.y,
		z = pos.x * pos.y - (beta * pos.z);

	return new Vector(x, y, z);
};

var nextPoint = function (x) {
	return lorenzSystem(x, LORENZ_SIGMA, LORENZ_RHO, LORENZ_BETA);
};

function rand(n) {
	return Math.floor(Math.random() * n) + 1;
}

export default Scene;