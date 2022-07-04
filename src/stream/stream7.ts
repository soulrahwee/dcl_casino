
const stream7 = new Entity()
stream7.addComponent(new GLTFShape('models/baseDarkWithCollider.glb'))
stream7.addComponent(new Transform({ scale: new Vector3(1, 1, 0) }))
engine.addEntity(stream7)

const screenStream7 = new Entity()
screenStream7.addComponent(new Transform({ position: new Vector3(7, 2, 60.40), rotation: Quaternion.Euler(0, 91.50, 0) }))
engine.addEntity(screenStream7)

const screenTransform7 = new Entity()
screenTransform7.addComponent(new Transform({ position: new Vector3(0, 2, 0) }))
screenTransform7.getComponent(Transform).rotate(Vector3.Right(), 0)
screenTransform7.setParent(screenStream7)

const screen7 = new Entity()
screen7.addComponent(new PlaneShape())
screen7.addComponent(new Transform({ scale: new Vector3(13.60, 6, 6) }))
screen7.getComponent(Transform).rotate(Vector3.Up(), 0)
screen7.setParent(screenTransform7)
screenTransform7.getComponent(Transform).scale.setAll(0.6) // You can change the scale of the screen here...

const videoClip = new VideoClip(
    'https://player.vimeo.com/external/724342293.m3u8?s=3f20063fef87ef1ab342964e29d9c1b4390d8b0e'
)
const videoTexture = new VideoTexture(videoClip)
videoTexture.play()

videoTexture.loop = true

// Adjust screen material to increase the brightness and clarity
const screenMaterial = new Material()
screenMaterial.albedoTexture = videoTexture
screenMaterial.emissiveTexture = videoTexture
screenMaterial.emissiveColor = Color3.White()
screenMaterial.emissiveIntensity = 0.6
screenMaterial.roughness = 1.0
screen7.addComponent(screenMaterial)

export = stream7;
