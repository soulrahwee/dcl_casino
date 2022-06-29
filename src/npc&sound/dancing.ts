import { NPC } from "@dcl/npc-scene-utils";
import { Dialog } from "node_modules/@dcl/npc-utils/index";

export function dancingGirl(x: number, y: number, z: number): void{
    const girlDance = new NPC({position: new Vector3(x, y, z), scale: new Vector3(1.8, 1.8, 1.8), rotation: new Quaternion(0, 90, 0)},'models/GirlDancing.glb',
    ()=>{
            log('Activated!')
            girlDance.playAnimation('hiphop')
            
        },{
            faceUser: true,
            idleAnim: 'LeftandRight',
            reactDistance: 9,
            onlyClickTrigger:false,
            continueOnWalkAway: true,
            onWalkAway: () => {
                log('walked away')
                onPlayerClickedObservable
                girlDance.playAnimation('LeftandRight')
              }
        }
    )
}