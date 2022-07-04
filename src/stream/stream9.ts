
const stream9 = new Entity()
stream9.addComponent(new GLTFShape('models/baseDarkWithCollider.glb'))
stream9.addComponent(new Transform({ scale: new Vector3(1, 1, 0) }))
engine.addEntity(stream9)

const screenStream9 = new Entity()
screenStream9.addComponent(new Transform({ position: new Vector3(40.35, 1.99, 54), rotation: Quaternion.Euler(0, -95, 0) }))
engine.addEntity(screenStream9)

const screenTransform9 = new Entity()
screenTransform9.addComponent(new Transform({ position: new Vector3(0, 1.99, 0) }))
screenTransform9.getComponent(Transform).rotate(Vector3.Right(), 0)
screenTransform9.setParent(screenStream9)

const screen9 = new Entity()
screen9.addComponent(new PlaneShape())
screen9.addComponent(new Transform({ scale: new Vector3(14.02, 6.60, 6.60) }))
screen9.getComponent(Transform).rotate(Vector3.Up(), 0)
screen9.setParent(screenTransform9)
screenTransform9.getComponent(Transform).scale.setAll(0.6) // You can change the scale of the screen here...

const videoClip = new VideoClip(
    'https://player.vimeo.com/external/724342187.m3u8?s=10228391efc99bcc8f127307fde482d68459a9a6'
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
screen9.addComponent(screenMaterial)

export = stream9;
