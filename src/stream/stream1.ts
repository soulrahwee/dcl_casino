
const stream1 = new Entity()
stream1.addComponent(new GLTFShape('models/baseDarkWithCollider.glb'))
stream1.addComponent(new Transform({ scale: new Vector3(1, 1, 0) }))
engine.addEntity(stream1)

const screenStream1 = new Entity()
screenStream1.addComponent(new Transform({ position: new Vector3(6.90, 2, 45.99), rotation: Quaternion.Euler(0, 0, 0) }))
engine.addEntity(screenStream1)

const screenTransform1 = new Entity()
screenTransform1.addComponent(new Transform({ position: new Vector3(0, 2, 0) }))
screenTransform1.getComponent(Transform).rotate(Vector3.Right(), 0)
screenTransform1.setParent(screenStream1)

const screen1 = new Entity()
screen1.addComponent(new PlaneShape())
screen1.addComponent(new Transform({ scale: new Vector3(13.60, 6, 6) }))
screen1.getComponent(Transform).rotate(Vector3.Up(), 0)
screen1.setParent(screenTransform1)
screenTransform1.getComponent(Transform).scale.setAll(0.6) // You can change the scale of the screen here...

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
screen1.addComponent(screenMaterial)

export = stream1;
