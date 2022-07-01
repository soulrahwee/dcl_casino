import { DialogWindow, NPC } from "../../node_modules/@dcl/npc-utils/index"
import { Dialog } from "../../node_modules/@dcl/npc-utils/utils/types"
import * as ui from '@dcl/ui-scene-utils'


export function counter(x: number, y: number, z: number):void{
    // ui
    const myEntity = new Entity()
    myEntity.addComponent(new BoxShape())
    engine.addEntity(myEntity)
    myEntity.addComponent(
        new OnPointerDown((e) => {
            log("myEntity was clicked", e)
            
        },{
            button: ActionButton.PRIMARY
        })
    )

    // Dialog chat
    const counter_chat: Dialog[] = [
        {   
            name:'conversation-one',
            text:"Do you want to buy chips?",
            // audio:'sound/ShapeOfYou.mp3',
            // portrait:{path:'images/counter.png', height: 280, width: 280},
            offsetX:60,
            offsetY:0,
            fontSize:34,
            typeSpeed:30,
            isQuestion: true,
            isEndOfDialog:true,
            buttons:[
                {label: "Yes", goToDialog: 'yes',triggeredActions() {
                    counter.playAnimation('Head_nod', true, 4)
                    // dialopwindow.closeDialogWindow(counter_chat,'conversation-one')
                    chip()
                },},
                {label: "No", goToDialog: 'end',triggeredActions() {
                    counter.playAnimation('Head_nod')
                },}
            ]
        },{
            name: 'yes',
            text:"Thank you dear Sir/M'dam!",
            offsetX:60,
            offsetY:0,
            fontSize:34,
            typeSpeed:30,
            isEndOfDialog:true

        },{
            name: 'end',
            text:"See you later!!!",
            offsetX:60,
            offsetY:0,
            fontSize:34,
            typeSpeed:30,
            isEndOfDialog: true
        }
    ]

    // NPC
    const counter = new NPC({position: new Vector3(x, y, z),scale: new Vector3(1.2, 1.2, 1.2)}, 'models/counter.glb',
    ()=>{
        log("activate")
        dialopwindow.openDialogWindow(counter_chat,'conversation-one')
        // counter.talk(counter_chat,'conversation-one')
        counter.playAnimation('Wave', true, 4.8)
    },{
        idleAnim:'Idle',
        portrait: {path:'images/counter.png', height: 280, width: 280},
        faceUser: true,
        darkUI:true,
        reactDistance: 4,
        coolDownDuration:2,
        onlyClickTrigger:false,
        onlyExternalTrigger:false,
        dialogSound:'sound/hi.mp3',
        continueOnWalkAway: false,
        onWalkAway() {
            // counter.playAnimation('Wave')
            counter.talk(counter_chat,'end',2)
            dialopwindow.closeDialogWindow()
            counter.playAnimation('Idle')
        },
    })
    // 
    counter.addComponent(new Transform({rotation:new Quaternion(0,90,0)}))
    // dialog window
    let dialopwindow = new DialogWindow({path:'images/counter.png', height: 280, width: 280},true)
    
    // exchange chip
    let amount = new ui.UICounter(0, -100, 510, Color4.Yellow(),64,true)
    amount.hide()
    // chip ui
    let chipUI = new ui.MediumIcon('images/casino-chip.png',-10, 500, 64, 64)
    chipUI.hide()

    function chip(){
        dialopwindow.closeDialogWindow()
        let fill = new ui.CustomPrompt(ui.PromptStyles.DARK,0, 0, false)
        fill.addText("Select your choices!",-10, 130,Color4.Red(),30)
        fill.addCheckbox("Places check it before selecting!!!",
            -180,70,
            ()=>{
                log('Checked')
                buttonOne.enable()
                buttonTwo.enable()
                buttonThree.enable()
                buttonFour.enable()
                buttonFive.enable()
                buttonSix.enable()
            },
            ()=>{
                log('Uncheck')
                buttonOne.grayOut()
                buttonTwo.grayOut()
                buttonThree.grayOut()
                buttonFour.grayOut()
                buttonFive.grayOut()
                buttonSix.grayOut()
            },
            false,
        )
        
        let buttonOne = fill.addButton(
            "1$/1C",-100,10,
            ()=>{
                fill.hide()
                alert("one")
            },
            ui.ButtonStyles.ROUNDGOLD
        )
        let buttonTwo = fill.addButton(
            "5$/5C",-100,-60,
            ()=>{
                alert("Two")
                fill.hide()
            },
            ui.ButtonStyles.ROUNDGOLD
        )
        let buttonThree = fill.addButton(
            "10$/10C",-100,-130,
            ()=>{
                alert("Three")
                fill.hide()
            },
            ui.ButtonStyles.ROUNDGOLD
        )
        let buttonFour = fill.addButton(
            "20$/20C",100,10,
            ()=>{
                alert("Four")
                fill.hide()
            },
            ui.ButtonStyles.ROUNDGOLD
        )
        let buttonFive = fill.addButton(
            "50$/50C",100,-60,
            ()=>{
                alert("Five")
                fill.hide()
            },
            ui.ButtonStyles.ROUNDGOLD
        )
        let buttonSix = fill.addButton(
            "100$/100C",100,-130,
            ()=>{
                alert("Six")
                fill.hide()
            },
            ui.ButtonStyles.ROUNDGOLD
        )
        buttonOne.grayOut()
        buttonTwo.grayOut()
        buttonThree.grayOut()
        buttonFour.grayOut()
        buttonFive.grayOut()
        buttonSix.grayOut()
    } 
    function alert(e: string){
        new ui.OptionPrompt(
            'Verify!!!',
            'Are you sure want to buy chips?',
            ()=>{
              log(`Yes`)
              switch (e) {
                case "one":
                    amount.increase(1)
                    // dialopwindow.openDialogWindow(counter_chat,'yes')
                    counter.talk(counter_chat,'yes',4)
                    chipUI.show()
                    amount.show()
                break;
                case "Two":
                    amount.increase(5)
                    counter.talk(counter_chat,'yes',4)
                    chipUI.show()
                    amount.show()
                break;
                case "Three":
                    amount.increase(10)
                    counter.talk(counter_chat,'yes',4)
                    chipUI.show()
                    amount.show()
                break;
                case "Four":
                    amount.increase(20)
                    counter.talk(counter_chat,'yes',4)
                    chipUI.show()
                    amount.show()
                break;
                case "Five":
                    amount.increase(50)
                    counter.talk(counter_chat,'yes',4)
                    chipUI.show()
                    amount.show()
                break;
                case "Six":
                    amount.increase(100)
                    counter.talk(counter_chat,'yes',4)
                    chipUI.show()
                    amount.show()
                break;
              }
            },
            () => {
              log(`No`)
                chip()
            },
            'Yes',
            'No',
            true
        )
    }
}

