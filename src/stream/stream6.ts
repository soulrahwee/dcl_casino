
const stream6 = new Entity()
stream6.addComponent(new GLTFShape('models/baseDarkWithCollider.glb'))
stream6.addComponent(new Transform({ scale: new Vector3(1, 1, 0) }))
engine.addEntity(stream6)

const screenStream6 = new Entity()
screenStream6.addComponent(new Transform({ position: new Vector3(-7.05, 1.99, 82.39), rotation: Quaternion.Euler(0, -131.10, 0) }))
engine.addEntity(screenStream6)

const screenTransform6 = new Entity()
screenTransform6.addComponent(new Transform({ position: new Vector3(0, 1.99, 0) }))
screenTransform6.getComponent(Transform).rotate(Vector3.Right(), 0)
screenTransform6.setParent(screenStream6)

const screen6 = new Entity()
screen6.addComponent(new PlaneShape())
screen6.addComponent(new Transform({ scale: new Vector3(14.02, 6.60, 6.60) }))
screen6.getComponent(Transform).rotate(Vector3.Up(), 0)
screen6.setParent(screenTransform6)
screenTransform6.getComponent(Transform).scale.setAll(0.6) // You can change the scale of the screen here...

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
screen6.addComponent(screenMaterial)

export = stream6;
