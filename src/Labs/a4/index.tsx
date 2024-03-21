import PassingFunctions from "./PassingFunctions";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ReduxExamples from "./ReduxExamples";

function Assignment4() {
    function sayHello() {
        alert("Hello");
    }
    return (
        <div>
            <h1>Labs</h1>
            <h1>Assignment 4</h1>
            <ReduxExamples/>
            <ClickEvent/>
            <PassingDataOnEvent/>
            <PassingFunctions theFunction={sayHello} />
            <EventObject/>
            <Counter/>
            <BooleanStateVariables/>
            <StringStateVariables/>
            <DateStateVariable/>
            <ObjectStateVariable/>
            <ArrayStateVariable/>

        </div>
    );
}
export default Assignment4;