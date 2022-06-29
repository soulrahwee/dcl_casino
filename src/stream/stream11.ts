
const stream11 = new Entity()
stream11.addComponent(new GLTFShape('models/baseDarkWithCollider.glb'))
stream11.addComponent(new Transform({ scale: new Vector3(1, 1, 0) }))
engine.addEntity(stream11)

const screenStream11 = new Entity()
screenStream11.addComponent(new Transform({ position: new Vector3(34.20, 1.99, 96.50), rotation: Quaternion.Euler(0, -181.50, 0) }))
engine.addEntity(screenStream11)

const screenTransform11 = new Entity()
screenTransform11.addComponent(new Transform({ position: new Vector3(0, 1.99, 0) }))
screenTransform11.getComponent(Transform).rotate(Vector3.Right(), 0)
screenTransform11.setParent(screenStream11)

const screen11 = new Entity()
screen11.addComponent(new PlaneShape())
screen11.addComponent(new Transform({ scale: new Vector3(14.02, 6.60, 6.60) }))
screen11.getComponent(Transform).rotate(Vector3.Up(), 0)
screen11.setParent(screenTransform11)
screenTransform11.getComponent(Transform).scale.setAll(0.6) // You can change the scale of the screen here...

const videoClip = new VideoClip(
    'https://player.vimeo.com/external/724342125.m3u8?s=fadfc27b31be3348e90ebedc465767cd51a8db60'
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
screen11.addComponent(screenMaterial)

export = stream11;
