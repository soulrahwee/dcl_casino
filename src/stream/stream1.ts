    export function createVideoStream(){
        const stream1 = new Entity()
        // stream1.addComponent(new GLTFShape('models/baseDarkWithCollider.glb'))
        stream1.addComponent(new Transform({ scale: new Vector3(1, 1 ,0) }))
        engine.addEntity(stream1)

        const screenStream1 = new Entity()
        screenStream1.addComponent(new Transform({ position: new Vector3(22.8, 1.3, 43.7), rotation: Quaternion.Euler(0, 90, 0), scale: new Vector3(1.4, 1, 1.4)}))
        engine.addEntity(screenStream1)

        const screenTransform1 = new Entity()
        screenTransform1.addComponent(new Transform({ position: new Vector3(0, 0.99, 0)}))
        screenTransform1.getComponent(Transform).rotate(Vector3.Right(), 0)
        screenTransform1.setParent(screenStream1)

        const screen1 = new Entity()
        screen1.addComponent(new PlaneShape())
        screen1.addComponent(new Transform({ scale: new Vector3(5.45, 2.90, 2.90) }))
        screen1.getComponent(Transform).rotate(Vector3.Up(), 0)
        screen1.setParent(screenTransform1)
        screenTransform1.getComponent(Transform).scale.setAll(0.6) // You can change the scale of the screen here...

        const videoClip = new VideoClip('https://bafybeidqbgmk2py67li26v6zjikjfxorzjll4zkjuimgobeoc6izim43ty.ipfs.dweb.link/test1.mp4')
        const videoTexture = new VideoTexture(videoClip)

        const screenMaterial = new Material()
        screenMaterial.albedoTexture = videoTexture
        screenMaterial.emissiveTexture = videoTexture
        screenMaterial.emissiveColor = Color3.White()        
        screen1.addComponent(screenMaterial)

        videoTexture.reset()
        videoTexture.seek = 10
        videoTexture.play()
        videoTexture.volume = 0 
        videoTexture.loop = true
    }
    


    

