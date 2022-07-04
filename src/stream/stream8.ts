
const stream8 = new Entity()
stream8.addComponent(new GLTFShape('models/baseDarkWithCollider.glb'))
stream8.addComponent(new Transform({ scale: new Vector3(1, 1, 0) }))
engine.addEntity(stream8)

const screenStream8 = new Entity()
screenStream8.addComponent(new Transform({ position: new Vector3(40.35, 1.99, 40.70), rotation: Quaternion.Euler(0, -95, 0) }))
engine.addEntity(screenStream8)

const screenTransform8 = new Entity()
screenTransform8.addComponent(new Transform({ position: new Vector3(0, 1.99, 0) }))
screenTransform8.getComponent(Transform).rotate(Vector3.Right(), 0)
screenTransform8.setParent(screenStream8)

const screen8 = new Entity()
screen8.addComponent(new PlaneShape())
screen8.addComponent(new Transform({ scale: new Vector3(14.02, 6.60, 6.60) }))
screen8.getComponent(Transform).rotate(Vector3.Up(), 0)
screen8.setParent(screenTransform8)
screenTransform8.getComponent(Transform).scale.setAll(0.6) // You can change the scale of the screen here...

const videoClip = new VideoClip(
    'https://player.vimeo.com/external/724342249.m3u8?s=6e8cbc6bf4454d8f40e8f0ceb14e393485213e8e'
)
const videoTexture = new VideoTexture(videoClip)
videoTexture.play()
videoTexture.loop = true
videoTexture.volume = 0.5

// Adjust screen material to increase the brightness and clarity
const screenMaterial = new Material()
screenMaterial.albedoTexture = videoTexture
screenMaterial.emissiveTexture = videoTexture
screenMaterial.emissiveColor = Color3.White()
screenMaterial.emissiveIntensity = 0.6
screenMaterial.roughness = 1.0
screen8.addComponent(screenMaterial)

export = stream8;
