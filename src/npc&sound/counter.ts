import { ButtonStyles, NPC } from "@dcl/npc-scene-utils";
import { Dialog } from "node_modules/@dcl/npc-utils/index";

export function counter(x: number, y: number, z: number): void{
    const cashier_chat: Dialog[] =[
        {
            text:"Hello Sir/M'dam may I help you hi",
            triggeredByNext() {
                cashier.playAnimation('Talk')
            },
            buttons: [
                
                { label: `Yes!`, goToDialog: 2 },
                { label: `Not,Really!`, goToDialog: 4 },
              ],
            offsetX:60,
            offsetY:0,
            fontSize:34,
            typeSpeed:30,
        },{
            text:"Do you want to change chip for poker ?",
            isEndOfDialog: true,
            offsetX:60,
            offsetY:0,
            fontSize:34,
            typeSpeed:30,
            buttons:[
                {label: "Yes", goToDialog: 'first', triggeredActions() {
                    cashier.playAnimation('Talk', true)
                },},
            ]
        },
    ]
    const cashier = new NPC({position: new Vector3(x, y, z), scale: new Vector3(1.2, 1.2, 1.2)},'models/counter.glb',
    ()=>{
        log('activate')
        cashier.playAnimation('Wave', true, 4)
        cashier.talk(cashier_chat)
    },{
        idleAnim: 'Idle',
            faceUser: true,
            portrait: {path:"images/stick-01.png", height: 380, width: 380},
            darkUI: true,
            coolDownDuration: 1,
            hoverText: 'CHAT',
            onlyClickTrigger: false,
            onlyExternalTrigger: false,
            reactDistance: 5,
            continueOnWalkAway: false,
        onWalkAway() {
            log('Walkway')
        },
    })
    // cashier.setParent(Attachable.AVATAR)
    // cashier.setParent(Attachable.FIRST_PERSON_CAMERA)
}




