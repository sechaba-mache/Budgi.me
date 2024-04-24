import { useEffect, useRef, useState } from 'react';
import './drawer.css'

type drawerStates = "OPENED" | "CLOSED"
type animation = "animateClose" | "animateOpen"

export default function Drawer(props: { header?: JSX.Element, content: JSX.Element }) {
    const [currentDrawerState, setDrawerState] = useState<drawerStates>("CLOSED")
    const drawerElement = useRef();
    const openAnimation: animation =  "animateOpen";
    const closeAnimation: animation =  "animateClose"

    useEffect(() => {}, [])

    function openDrawer() {
        if(drawerElement. current) {
            currentDrawerState === "OPENED" ? setDrawerState("CLOSED") : setDrawerState("OPENED");
            animateDrawer();
        }
        return undefined;
    }

    function animateDrawer() {
        if(drawerElement.current) {
            const classToRemove = animationToRemove();

            if(classToRemove) {
                (drawerElement.current as HTMLElement).classList.remove(classToRemove);
            }

            if(currentDrawerState === "OPENED") {
                (drawerElement.current as HTMLElement).classList.add(closeAnimation);
            }
            else {
                (drawerElement.current as HTMLElement).classList.add(openAnimation);
            }
        }
    }

    function animationToRemove() {
        if(drawerElement.current) {

            if((drawerElement.current as HTMLElement).classList.contains(openAnimation))
                return openAnimation;

            else if((drawerElement.current as HTMLElement).classList.contains(closeAnimation))
                return closeAnimation;

        }
        return undefined;
    }

    return (
    <>
        <div className='drawer shadow-[rgba(0,0,0,0.24)_8px_-2px_8px] flex flex-col w-full h-[95%] rounded-t-[22px] bg-white absolute z-50 overflow-y-scroll' ref={drawerElement}>
            <div className='flex items-center justify-center min-h-10 w-full sticky top-0 bg-white' onClick={() => openDrawer()}>
                <div className='w-14 h-2 rounded-lg bg-[#023047]'></div>
                <div className='flex gap-1 absolute right-5 top-5'>
                    <img src="./src/assets/icons/pen-solid.svg" />
                    <span className='font-semibold text-xs text-[#8ECAE6]'>Edit</span>
                </div>
            </div>
            <div className='px-4 pb-5'>
                {props.header}
                {props.content}
            </div>
        </div>
    </>
    )
}
