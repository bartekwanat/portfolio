import React, { Component } from 'react';
import * as THREE from 'three';

 class ThreeD extends Component {
    componentDidMount() {
        const color1 = 0xff5757;
        var bgColor = 0x000000;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 2 / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 0, 250);
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
        });
        renderer.setClearColor(bgColor);
        renderer.setSize(window.innerWidth / 2, window.innerHeight);

        this.mount.appendChild(renderer.domElement);

        const group = new THREE.Object3D();

        const radius = window.innerWidth / 15;
        const separation = 7;

        for (let s = 0; s <= 180; s += separation) {
            let radianS = (s * Math.PI) / 180;
            let pZ = radius * Math.cos(radianS);

            for (var t = 0; t < 360; t += separation) {
                var radianT = (t * Math.PI) / 180;
                var pX = radius * Math.sin(radianS) * Math.cos(radianT);
                var pY = radius * Math.sin(radianS) * Math.sin(radianT);

                const geometory = new THREE.SphereGeometry(0.5, 10, 10);
                const material = new THREE.MeshBasicMaterial({
                    color: 0xff5757,
                });

                const mesh = new THREE.Mesh(geometory, material);
                mesh.position.x = pX;
                mesh.position.y = pY;
                mesh.position.z = pZ;
                group.add(mesh);
            }
        }

        const light = new THREE.PointLight(0xffffff, 1, 100);
        light.position.set(100, 100, 0);
        light.castShadow = true; // default false
        scene.add(light);

        scene.add(group);
        function update() {
            var rotateX = group.rotation.x + 0.0005;
            var rotateY = group.rotation.y + 0.00125;
            var rotateZ = group.rotation.z + 0.0025;
            group.rotation.set(rotateX, rotateY, rotateZ);

            camera.lookAt(scene.position);
            renderer.render(scene, camera);

            requestAnimationFrame(update);
        }
        const handleResize = () => {
            const { innerWidth, innerHeight } = window;
            renderer.setSize(innerWidth / 2, innerHeight);
            camera.aspect = innerWidth / 2 / innerHeight;
            camera.updateProjectionMatrix();
        };
        handleResize();
        update();
    }

    render() {
        return <div ref={(ref) => (this.mount = ref)} />;
    }
}
export default ThreeD;