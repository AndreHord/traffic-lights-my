import React, { useState } from "react";
import { motion } from "framer-motion";

const Light = ({ tlColor = "red", clickCount = 0, handleClick }) => {
    const [isClick, setIsClick] = useState(false);
    const lightStyle = {
        backgroundColor: tlColor,
        borderRadius: "50%",
        width: "80px",
        height: "80px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
    };

    return (
        <motion.div
            style={lightStyle}
            animate={{ opacity: isClick ? 0.5 : 1, scale: isClick ? 0.8 : 1 }}
            onClick={() => {
                setIsClick(!isClick);
                handleClick();
            }}
        >
            <div>{tlColor}</div>
            <div>{clickCount}</div>
        </motion.div>
    );
};

export default Light;
