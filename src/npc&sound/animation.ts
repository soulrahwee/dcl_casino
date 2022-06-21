import { NPC } from "@dcl/npc-scene-utils";
import { Dialog } from "@dcl/npc-scene-utils";

export function woman(x: number, y: number, z: number): void{
    const woman_chat: Dialog[] = [
        {
            text: "Hello Dear Sir/M'dam!!! Welcome to Soul_Casino!",
            triggeredByNext() {
                woman.playAnimation('Talk', true, 4.2)
            },
            offsetX:60,
            offsetY:0,
            fontSize:34,
            typeSpeed:30,
        },{
            text:"So Let Enjoy Your Day With Soul_Casino!!!",
            offsetX:60,
            offsetY:0,
            fontSize:34,
            typeSpeed:30,
            isEndOfDialog: true
        },{
            name:'good',
            text:"Have a good day!!!",
            offsetX:60,
            offsetY:0,
            fontSize:34,
            typeSpeed:30,
            isEndOfDialog: true
        },
    ]
    const woman = new NPC({position: new Vector3(x, y, z), scale: new Vector3(1.1, 1.1, 1.1)},'models/woman.glb',
    ()=>{
        log('activation')
        woman.talk(woman_chat)
        woman.playAnimation('wave', true, 4)
        // woman.endInteraction()
    },{
        idleAnim: 'Idle',
        faceUser: true,
        darkUI: true,
        coolDownDuration: 0,
        hoverText: 'CHAT',
        reactDistance: 4,
        onlyClickTrigger: false,
        onlyExternalTrigger: false,
        continueOnWalkAway: false,
        onWalkAway() {
            log('onWalkAway')
            woman.playAnimation('wave', true, 2)
            woman.talk(woman_chat, 'good', 2)
            // woman.endInteraction()
            // woman.talk(woman_chat, true, 2)
            // woman.playAnimation('Idle')
        },
    })
}

export function cashier(x: number, y: number, z: number): void{
    const cashier_chat: Dialog[] =[
        {
            text:"Hello",
        }
    ]
    const cashier = new NPC({position: new Vector3(15, 0, 15)},'models/',
    ()=>{
        log('activate')
        cashier.talk(cashier_chat)
    },{

    }
    )
}