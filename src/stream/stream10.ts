
const stream10 = new Entity()
stream10.addComponent(new GLTFShape('models/baseDarkWithCollider.glb'))
stream10.addComponent(new Transform({ scale: new Vector3(1, 1, 0) }))
engine.addEntity(stream10)

const screenStream10 = new Entity()
screenStream10.addComponent(new Transform({ position: new Vector3(40.33, 1.99, 68.10), rotation: Quaternion.Euler(0, -95, 0) }))
engine.addEntity(screenStream10)

const screenTransform10 = new Entity()
screenTransform10.addComponent(new Transform({ position: new Vector3(0, 1.99, 0) }))
screenTransform10.getComponent(Transform).rotate(Vector3.Right(), 0)
screenTransform10.setParent(screenStream10)

const screen10 = new Entity()
screen10.addComponent(new PlaneShape())
screen10.addComponent(new Transform({ scale: new Vector3(14.02, 6.60, 6.60) }))
screen10.getComponent(Transform).rotate(Vector3.Up(), 0)
screen10.setParent(screenTransform10)
screenTransform10.getComponent(Transform).scale.setAll(0.6) // You can change the scale of the screen here...

const videoClip = new VideoClip(
    'https://player.vimeo.com/external/724342222.m3u8?s=bc748bd486bc48e65dd161b200bab7376b586a63'
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
screen10.addComponent(screenMaterial)

export = stream10;
