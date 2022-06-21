
export function sound(x: number, y: number, z: number):void{
    const sound = new Entity()
    // sound.addComponent(new BoxShape())
    sound.addComponent(new Transform({
        position: new Vector3(x, y, z),
        scale: new Vector3( 2, 2, 2)
    }))
    const clip = new AudioClip("sounds/jazz-walk-preview-full.mp3")
    const song = new AudioSource(clip)
    sound.addComponent(song)
    engine.addEntity(sound)
    song.loop = true
    song.playing = false
    song.volume = 1
}