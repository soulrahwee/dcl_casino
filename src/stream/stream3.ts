
const stream3 = new Entity()
stream3.addComponent(new GLTFShape('models/baseDarkWithCollider.glb'))
stream3.addComponent(new Transform({ scale: new Vector3(1, 1, 0) }))
engine.addEntity(stream3)

const screenStream3 = new Entity()
screenStream3.addComponent(new Transform({ position: new Vector3(-27.66, 1.99, 60.30), rotation: Quaternion.Euler(0, 91.10, 0) }))
engine.addEntity(screenStream3)

const screenTransform3 = new Entity()
screenTransform3.addComponent(new Transform({ position: new Vector3(0, 1.99, 0) }))
screenTransform3.getComponent(Transform).rotate(Vector3.Right(), 0)
screenTransform3.setParent(screenStream3)

const screen3 = new Entity()
screen3.addComponent(new PlaneShape())
screen3.addComponent(new Transform({ scale: new Vector3(14.02, 6.60, 6.60) }))
screen3.getComponent(Transform).rotate(Vector3.Up(), 0)
screen3.setParent(screenTransform3)
screenTransform3.getComponent(Transform).scale.setAll(0.6) // You can change the scale of the screen here...

const videoClip = new VideoClip(
    'https://player.vimeo.com/external/722840634.m3u8?s=4b5289e586153f7bffcf1ec27f93a3e12f7348c8'
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
screen3.addComponent(screenMaterial)

export = stream3;
