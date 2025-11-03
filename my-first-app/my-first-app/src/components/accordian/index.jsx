//single selction accordian
//multiple selection accordian

import { useState } from "react";
import data from "./data";
import './styles.css';

export default function Accordian() {

    const [selected, setSelected] = useState(null);

    // a  const variable to enable multi selection- false means it is off aka single selction
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);

    // a const variable to store multiple selected questions
    const [multipleSelection, setMultiple] = useState([]);

    //this function will hangle the single selection of questions
    //when question is clicked, it will check if the question is already selected
    //if it is selected, it will deselect it by setting selected to null
    //if it is not selected, it will set selected to the clicked question's id

    function handleSingleSelection(getCurrentId) {
        console.log(getCurrentId);
        //if the clicked question is already selected, deselect it
        //else select the clicked question
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    function handleMultipleSelection(getCurrentId) {
        let cpyMultipleSelection = [...multipleSelection];
        const findIndexOfCurrentId = cpyMultipleSelection.indexOf(getCurrentId);

        console.log(findIndexOfCurrentId);
        if (findIndexOfCurrentId === -1) cpyMultipleSelection.push(getCurrentId);
        else cpyMultipleSelection.splice(findIndexOfCurrentId, 1);

        setMultiple(cpyMultipleSelection);


    }

    console.log(selected, multipleSelection); 
    return (
        <div className="wrapper">
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
                {enableMultiSelection
                    ? "Diabale Multi-Selection"
                    : "Enable Multi-Selection"}
            </button>
            <div className="accordian">
                {
                    data && data.length > 0 ? (
                        data.map(dataItem => (
                            <div className="item" key={dataItem.id}>
                                <div
                                    onClick={
                                        enableMultiSelection
                                            ? () => handleMultipleSelection(dataItem.id)
                                            : () => handleSingleSelection(dataItem.id)
                                    }
                                    className="title"
                                >
                                    <h3> {dataItem.question}</h3>
                                    <span>+</span>
                                </div>
                                {
                                    enableMultiSelection ?
                                        multipleSelection.indexOf(dataItem.id) !== -1 &&
                                        <div className="content">{dataItem.answer}</div>
                                        :
                                        selected === dataItem.id && <div className="content">{dataItem.answer}</div>
                                }
                            </div>
                        ))
                    ) : (
                        <div> No data found! </div>
                    )}

            </div>
        </div>
    );
}