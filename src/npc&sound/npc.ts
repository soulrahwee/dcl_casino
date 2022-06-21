import { NPC } from '@dcl/npc-scene-utils'
import { Dialog } from '@dcl/npc-scene-utils'

export function stick(x: number, y: number, z: number): void{
    
    const stick_chat: Dialog[] = [
        {
            text:"'Hello My name's stick!!!'",
            // triggeredByNext() {
            //     stick.playAnimation('wave', true, 2)
            // },
            offsetX:60,
            offsetY:0,
            fontSize:38,
            typeSpeed: 30,
        },{
            text:'Welcome to GOLDENEYE Casino!',
            offsetX:60,
            offsetY:0,
            fontSize:38,
            typeSpeed:30,
        },
        {
            text:"Do you want to play some game with me?",
            offsetX:60,
            offsetY:0,
            fontSize:38,
            typeSpeed: 30,
            isQuestion: true,
            
            buttons: [
                {label: "Yes", goToDialog: 'yes', triggeredActions() {
                    stick.playAnimation('Duck', true)
                },},
                {label: "No", goToDialog: 'no', triggeredActions(){
                    stick.playAnimation('No',true)
                }},
            ],
        },
        {   name:'yes',
            text:'Welcome to GOLDENEYE Casino!',
            isEndOfDialog: true,
            offsetX:60,
            offsetY:0,
            fontSize:38,
            typeSpeed:30,
        },
        {
            name:'no',
            text:'Goodbye! See You Again!!!',
            isEndOfDialog: true,
            offsetX:60,
            offsetY:0,
            fontSize:38,
            typeSpeed:30,
        },{
            name:'bye',
            text:"GOODBYE GUY SEE YOU LATER!!!",
            isEndOfDialog: true,
            offsetX:60,
            offsetY:0,
            fontSize:38,
            typeSpeed:30,
        },
    ]
    const stick = new NPC({position: new Vector3(x, y, z), scale: new Vector3(0.5, 0.5, 0.5), rotation: Quaternion.Euler(0, 180, 0)},'models/stick.glb',
        ()=>{
            log('Activate')
            stick.talk(stick_chat)
            stick.playAnimation('Wave', true, 2)
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
                log('walked away')
                stick.playAnimation('Wave', true)
                stick.talk(stick_chat,'bye' , 2)
            },
        }
    )

}