import { useEffect, useState } from "react";


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



    function handleCreateRandomRgbColour() {
        const r = randomColourUtility(256);
        const g = randomColourUtility(256);
        const b = randomColourUtility(256);

        setColor(`rgb(${r}, ${g}, ${b})`);
    }

    useEffect(() => {
        if (typeOfColor === "rgb") handleCreateRandomRgbColour();
        else handleCreateRandomHexColour();
    }, [typeOfColor]);

    return (

        <div style={{
            width: '100vw',
            height: '100vh',
            background: color,
        }}
        >
            <button onClick={() => setTypeOfColor('hex')}>Create Hex Colour</button>
            <button onClick={() => setTypeOfColor('rgb')}>Create RGB Colour</button>
            <button onClick={typeOfColor === "hex"
                ? handleCreateRandomHexColour
                : handleCreateRandomRgbColour
            }
            >
                Generate Random Colour</button>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                foontssize: '60px',
                margineTop: '50px',
                flexDirection: 'column',
                gap: '20px'

            }}>
                <h3>{typeOfColor === 'rgb' ? 'RGB Color ' : 'HEX Color '} </h3>
                <h1>{color}</h1>

            </div>

        </div>
    );
}