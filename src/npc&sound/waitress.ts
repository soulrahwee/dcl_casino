import { NPC, TrackUserFlag, ButtonStyles } from '@dcl/npc-scene-utils';
import { Dialog } from "node_modules/@dcl/npc-utils/index";

export function woman(x: number, y: number, z: number): void{
    const woman_chat: Dialog[] = [
        {   
            // one
            name:'conversation-one',
            text: '<color="white">Hello Dear Sir/M"dam!!! Welcome to Goldeneyes_Casino!</color>',
            triggeredByNext() {
                woman.playAnimation('Talk', true, 4.2)
                woman.followPath()
            },
            offsetX:60,
            offsetY:0,
            fontSize:34,
            typeSpeed:30,
            
        },{
            // two
            name:'conversation-two',
            text: "Do You Want To Explore Our Goldeneyes_Casino?",
            isQuestion: true,
            offsetX:60,
            offsetY:0,
            fontSize:34,
            typeSpeed:30,
            buttons: [
              { label: 'Yes,Places', goToDialog: 'conversation-three', triggeredActions() {
                  woman.playAnimation('Talk',true, 4)
              }, },
              { label: 'No,Thanks', goToDialog: 'conversation-four', triggeredActions() {
                  woman.playAnimation('Talk', true, 4)
              }, }
            ]
        },{
            // three
            name:'conversation-three',
            text:'So Let Enjoy Your Day With Goldeneyes_Casino!!!',
            triggeredByNext() {
                woman.playAnimation('Talk', true, 4.2)
            },
            offsetX:60,
            offsetY:0,
            fontSize:34,
            typeSpeed:30,
        },{
            name:'conversation-threeI',
            text:"Have a nice day for you Sri/M'dam!",
            offsetX:60,
            offsetY:0,
            fontSize:34,
            typeSpeed:30,
            isEndOfDialog: true,
        },{
            name:'conversation-four',
            text:"It's Okay, We'll meet again!!!",
            triggeredByNext() {
                woman.playAnimation('wave', true, 4)
            },
            offsetX:60,
            offsetY:0,
            fontSize:34,
            typeSpeed:30,
        },{
            name:'conversation-fourI',
            text:"Goodbye, See you later!:)",
            isEndOfDialog: true,
            offsetX:60,
            offsetY:0,
            fontSize:34,
            typeSpeed:30,
            isFixedScreen: true,
        },{
            name:'conversation-end',
            text:"Have a good day!!!",
            offsetX:60,
            offsetY:0,
            fontSize:34,
            typeSpeed:30,
            isEndOfDialog: true
        },
    ]
    const woman = new NPC({position: new Vector3(x, y, z), scale: new Vector3(1.1, 1.1, 1.1), rotation: new Quaternion(0,90,0)},'models/woman.glb',
    ()=>{
        log('activation')
        woman.talk(woman_chat)
        woman.playAnimation('wave', true, 4)
        
    },{
        idleAnim: 'Idle',
        portrait:{path: 'images/woman-1.png', height:350, width: 350},
        turningSpeed: 2,
        faceUser: true,
        darkUI: true,
        coolDownDuration: 2,
        hoverText:'CHAT',
        reactDistance: 4,
        onlyETrigger: false,
        onlyClickTrigger: false,
        onlyExternalTrigger: false,
        continueOnWalkAway: false,
        onWalkAway() {
            log('WalkAway')
            woman.playAnimation('wave', true, 4)
            woman.talk(woman_chat, 'conversation-end', 2)
        },
    })
}
