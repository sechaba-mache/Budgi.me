import { useEffect, useRef, useState } from 'react';
import './drawer.css'

type drawerStates = "OPENED" | "CLOSED"

export default function Drawer() {
    const [currentDrawerState, setDrawerState] = useState<drawerStates>("CLOSED")
    const drawerElement = useRef();

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
            if(currentDrawerState === "OPENED") {
                (drawerElement.current as HTMLElement).className = "drawer animateClose";
            }
            else {
                (drawerElement.current as HTMLElement).className = "drawer animateOpen";
            }
        }
    }

    return (
    <>
        <div className='drawer' ref={drawerElement}>
            <div className='gripper' onClick={() => openDrawer()}>
                <div className='bar'></div>
            </div>
        </div>
    </>
    )
}
