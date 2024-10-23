import { useState } from "react";
import "./styles.css";
export default function App() {
    return (
        <div className="App">
            <TipCalculator></TipCalculator>
        </div>
    );
}
function TipCalculator() {
    const [bill, setBill] = useState("");
    const [perc1, setPerc1] = useState(0);
    const [perc2, setPerc2] = useState(0);

    const tip = ((perc1 + perc2) / 2 / 100) * bill;

    function handleReset() {
        setBill("");
        setPerc1(0);
        setPerc2(0);
    }
    return (
        <div>
            <BillInput
                bill={bill}
                onSetBill={setBill}
            ></BillInput>
            <SelectPercentage
                perc={perc1}
                onSelectHandler={setPerc1}
            >
                How did you like the service?
            </SelectPercentage>
            <SelectPercentage
                perc={perc2}
                onSelectHandler={setPerc2}
            >
                How did your friend like the service?
            </SelectPercentage>
            {bill > 0 && (
                <>
                    <OutPut
                        bill={bill}
                        tip={tip}
                    />
                    <Reset onReset={handleReset}></Reset>
                </>
            )}
        </div>
    );
}
function BillInput({ bill, onSetBill }) {
    return (
        <div>
            <span>How much was the bill?</span>
            <input
                type="text"
                placeholder="Bill value"
                onChange={e => onSetBill(Number(e.target.value))}
                value={bill}
            ></input>
        </div>
    );
}
function SelectPercentage({ perc, onSelectHandler, children }) {
    return (
        <div>
            <label>{children}</label>
            <select
                value={perc}
                onChange={e => onSelectHandler(Number(e.target.value))}
            >
                <option value={0}>Dissatisfied(0%)</option>
                <option value={5}>It was okay(5%)</option>
                <option value={10}>It was good(5%)</option>
                <option value={20}>Absolutely amazing(20%)</option>
            </select>
        </div>
    );
}
function OutPut({ bill, tip }) {
    return (
        <h3>
            <b>
                You pay ${bill + tip} (${bill} +$
                {tip} tip){" "}
            </b>
        </h3>
    );
}
function Reset({ onReset }) {
    return <button onClick={onReset}>Reset</button>;
}
