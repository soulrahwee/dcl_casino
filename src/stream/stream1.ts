    export function createVideoStream(){
        const stream1 = new Entity()
        // stream1.addComponent(new GLTFShape('models/baseDarkWithCollider.glb'))
        stream1.addComponent(new Transform({ scale: new Vector3(1, 1 ,0) }))
        engine.addEntity(stream1)
        // make screenstream
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

        const videoClip = new VideoClip(
            // "https://player.vimeo.com/progressive_redirect/playback/721301128/rendition/240p/file.mp4?loc=external&signature=134cfc475c1b41db4a5d6ad8a2cf6d54f769cce784e77d40474ccadf575862a6"
            'https://bafybeidqbgmk2py67li26v6zjikjfxorzjll4zkjuimgobeoc6izim43ty.ipfs.dweb.link/test1.mp4'
            )
        const videoTexture = new VideoTexture(videoClip)
        videoTexture.play()
        videoTexture.volume = 0 
        videoTexture.loop = true

        const screenMaterial = new Material()
        screenMaterial.albedoTexture = videoTexture
        screenMaterial.emissiveTexture = videoTexture
        screenMaterial.emissiveColor = Color3.White()        
        screen1.addComponent(screenMaterial)
        
    }
    


    

