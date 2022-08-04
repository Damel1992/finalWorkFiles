import React, {useState,useEffect} from 'react';
import { getPadTime } from './getPadTime';
import styles from './Timer.module.scss';

function Timer() {
    const [timeLeft, setTimeLeft] = useState(3 * 60);
    const [isCounting, setIsCouting] = useState(false);

    const minutes = getPadTime(Math.floor(timeLeft / 60));
    const seconds = getPadTime(timeLeft - minutes * 60);

    useEffect(() => {
        const interval = setInterval(() => {
            isCounting &&
                setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0))
        }, 1000);
        if(timeLeft === 0) setIsCouting(false);
        return () => {
            clearInterval(interval);
        };
    },[timeLeft,isCounting]);

    const handleStart = () => {
        if (timeLeft === 0) setTimeLeft(3 * 60);
        setIsCouting(true);
    };
    const handleStop= () => {
        setIsCouting(false);
    };
    const handleReset = () => {
        setIsCouting(false);
        setTimeLeft(3 * 60);
    };
 
    return (
        <div>
            <div className={styles.tabloTimer}>
                <span className={styles.numTimer}>{minutes}</span>
                <span className={styles.numTimer}>:</span>
                <span className={styles.numTimer}>{seconds}</span>
            </div>
            <div className={styles.btnTimer}>
                {isCounting ? (
                    <button type="button" onClick={handleStop} class="btn-primary">Stop</button>
                ) : (
                    <button type="button" onClick={handleStart} class="btn-primary">Start</button>
                    
                )}
                <button type="button"onClick={handleReset}  class="btn-primary">Reset</button>
            </div>
        </div>
    );
}

export default Timer;