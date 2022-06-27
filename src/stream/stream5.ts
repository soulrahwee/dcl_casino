
const stream5 = new Entity()
stream5.addComponent(new GLTFShape('models/baseDarkWithCollider.glb'))
stream5.addComponent(new Transform({ scale: new Vector3(1, 1, 0) }))
engine.addEntity(stream5)

const screenStream5 = new Entity()
screenStream5.addComponent(new Transform({ position: new Vector3(-27.66, 1.99, 76.90), rotation: Quaternion.Euler(0, 91.10, 0) }))
engine.addEntity(screenStream5)

const screenTransform5 = new Entity()
screenTransform5.addComponent(new Transform({ position: new Vector3(0, 1.99, 0) }))
screenTransform5.getComponent(Transform).rotate(Vector3.Right(), 0)
screenTransform5.setParent(screenStream5)

const screen5 = new Entity()
screen5.addComponent(new PlaneShape())
screen5.addComponent(new Transform({ scale: new Vector3(14.02, 6.60, 6.60) }))
screen5.getComponent(Transform).rotate(Vector3.Up(), 0)
screen5.setParent(screenTransform5)
screenTransform5.getComponent(Transform).scale.setAll(0.6) // You can change the scale of the screen here...

const videoClip = new VideoClip(
    'https://player.vimeo.com/external/724342199.m3u8?s=44028b9024f117d5ea5a923de6c05461f777401b'
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
screen5.addComponent(screenMaterial)

export = stream5;
