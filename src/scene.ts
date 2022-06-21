export function createScene() {

    const deflatedScale = new Vector3(0.1, 0.1, 0.1)
    const scene = new Entity()
    engine.addEntity(scene)
    scene.addComponent(new GLTFShape('models/Build_Casino-rev10.glb'))
    scene.addComponent(new Transform({
        position: new Vector3(18, 0, 21.2),
        rotation: Quaternion.Euler(0, 90, 0),
        // scale: deflatedScale

    }))
}