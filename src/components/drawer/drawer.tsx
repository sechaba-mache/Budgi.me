import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useEffect, useRef, useState } from 'react';
import './drawer.css'

type drawerStates = "OPENED" | "CLOSED"

export default function Drawer(props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) {
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
            <div className='px-4 pb-5'>
                {props.children}
            </div>
        </div>
    </>
    )
}
