
const stream13 = new Entity()
stream13.addComponent(new GLTFShape('models/baseDarkWithCollider.glb'))
stream13.addComponent(new Transform({ scale: new Vector3(1, 1, 0) }))
engine.addEntity(stream13)

const screenStream13 = new Entity()
screenStream13.addComponent(new Transform({ position: new Vector3(21.90, 1.99, 60.50), rotation: Quaternion.Euler(0, -139, 0) }))
engine.addEntity(screenStream13)

const screenTransform13 = new Entity()
screenTransform13.addComponent(new Transform({ position: new Vector3(0, 1.99, 0) }))
screenTransform13.getComponent(Transform).rotate(Vector3.Right(), 0)
screenTransform13.setParent(screenStream13)

const screen13 = new Entity()
screen13.addComponent(new PlaneShape())
screen13.addComponent(new Transform({ scale: new Vector3(14.02, 6.60, 6.60) }))
screen13.getComponent(Transform).rotate(Vector3.Up(), 0)
screen13.setParent(screenTransform13)
screenTransform13.getComponent(Transform).scale.setAll(0.6) // You can change the scale of the screen here...

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
screen13.addComponent(screenMaterial)

export = stream13;
