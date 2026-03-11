import { useState } from "react";


export default function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');

    function randomColourUtility(length) {
        return Math.floor(Math.random() * length);
    }


    function handleCreateRandomHexColour() {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";

        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColourUtility(hex.length)]
        }
        setColor(hexColor);
    }



    function handleCreateRandomRBGColour() {

    }
    return (

        <div style={{
            width: '100vw',
            height: '100vh',
            background: color,
        }}
        >
            <button onClick={() => setTypeOfColor('hex')}>Create Hex Colour</button>
            <button onClick={() => setTypeOfColor('rgb')}>Create RGB Colour</button>
            <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColour : handleCreateRandomRGBColour}> Generate Random Colour</button>
        </div>
    );
}