// シーン、カメラ、レンダラーのセットアップ
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 立方体のジオメトリ
const geometry = new THREE.BoxGeometry(1, 1, 1);

// シェーダーマテリアル（ホログラムエフェクト）
const material = new THREE.ShaderMaterial({
    uniforms: {
        time: { value: 0.0 },
        color1: { value: new THREE.Color(0x00ffff) },
        color2: { value: new THREE.Color(0xff00ff) }
    },
    vertexShader: `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        uniform float time;
        uniform vec3 color1;
        uniform vec3 color2;
        varying vec2 vUv;
        void main() {
            float wave = sin(vUv.y * 10.0 + time) * 0.5 + 0.5;
            gl_FragColor = vec4(mix(color1, color2, wave), 1.0);
        }
    `,
    transparent: true
});

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// ライトの追加
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(2, 2, 2);
scene.add(light);

camera.position.z = 2;

// アニメーションループ
function animate() {
    requestAnimationFrame(animate);
    material.uniforms.time.value += 0.05;
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

// ウィンドウリサイズ対応
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
