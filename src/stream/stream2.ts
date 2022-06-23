
const stream2 = new Entity()
stream2.addComponent(new GLTFShape('models/baseDarkWithCollider.glb'))
stream2.addComponent(new Transform({ scale: new Vector3(1, 1, 0) }))
engine.addEntity(stream2)

const screenStream2 = new Entity()
screenStream2.addComponent(new Transform({ position: new Vector3(-10, 0.99, 40), rotation: Quaternion.Euler(0, 90, 0) }))
engine.addEntity(screenStream2)

const screenTransform2 = new Entity()
screenTransform2.addComponent(new Transform({ position: new Vector3(0, 0.99, 0) }))
screenTransform2.getComponent(Transform).rotate(Vector3.Right(), 0)
screenTransform2.setParent(screenStream2)

const screen2 = new Entity()
screen2.addComponent(new PlaneShape())
screen2.addComponent(new Transform({ scale: new Vector3(5.45, 2.90, 2.90) }))
screen2.getComponent(Transform).rotate(Vector3.Up(), 0)
screen2.setParent(screenTransform2)
screenTransform2.getComponent(Transform).scale.setAll(0.6) // You can change the scale of the screen here...

const videoClip = new VideoClip(
    ''
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
screen2.addComponent(screenMaterial)

export = stream2;
