
const stream12 = new Entity()
stream12.addComponent(new GLTFShape('models/baseDarkWithCollider.glb'))
stream12.addComponent(new Transform({ scale: new Vector3(1, 1, 0) }))
engine.addEntity(stream12)

const screenStream12 = new Entity()
screenStream12.addComponent(new Transform({ position: new Vector3(18.99, 1.99, 80.88), rotation: Quaternion.Euler(0, 138.80, 0) }))
engine.addEntity(screenStream12)

const screenTransform12 = new Entity()
screenTransform12.addComponent(new Transform({ position: new Vector3(0, 1.99, 0) }))
screenTransform12.getComponent(Transform).rotate(Vector3.Right(), 0)
screenTransform12.setParent(screenStream12)

const screen12 = new Entity()
screen12.addComponent(new PlaneShape())
screen12.addComponent(new Transform({ scale: new Vector3(14.02, 6.60, 6.60) }))
screen12.getComponent(Transform).rotate(Vector3.Up(), 0)
screen12.setParent(screenTransform12)
screenTransform12.getComponent(Transform).scale.setAll(0.6) // You can change the scale of the screen here...

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
screen12.addComponent(screenMaterial)

export = stream12;
