import React, { useLayoutEffect, useState } from "react";
import styles from "./FollowCursor.module.css"

export const FollowCursor = () => {
    const [mousePosition, setMousePosition] = useState({mouseX: 0, mouseY: 0})
    const {mouseX, mouseY} = mousePosition

    useLayoutEffect(() => {
        window.addEventListener("mousemove", (e) => {
            setMousePosition({ mouseX: e.clientX, mouseY: e.clientY })
        });
    })

    const dotPosition = () => ({left: mouseX - 4, top: mouseY - 4})

    return <span style={dotPosition()} className={styles.dot}></span>
}