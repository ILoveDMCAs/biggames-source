import { CounterComponentItem } from 'components';
import { HTMLAttributes, useEffect, useState, useMemo } from 'react';
import { useStore } from 'store/context';
import { observer } from 'mobx-react-lite';

function calcDate(date: string) {
    return new Date(date).getTime();
}

function CounterComponment({ ...rest }: HTMLAttributes<HTMLDivElement>): JSX.Element {
    const { state } = useStore();
    
    const [day, setDay] = useState<number | string>(0);
    const [hour, setHour] = useState<number | string>(0);
    const [minute, setMinute] = useState<number | string>(0);
    const [second, setSecond] = useState<number | string>(0);
    const [showPopup, setPopUp] = useState<boolean>(false);

    const counterDate = useMemo(() => calcDate(state.counterDate), [state.counterDate]);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (!showPopup) {
            interval = setInterval(() => {
                const countDown = counterDate - new Date().getTime();
                // console.log(countDown);
                if (countDown >= 0) {
                    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
                    setDay(days);
                    setHour(hours);
                    setMinute(minutes);
                    setSecond(seconds);
                } else {
                    setPopUp(true);
                    setDay('0');
                    setHour('0');
                    setMinute('0');
                    setSecond('0');
                }
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [day, hour, minute, second, showPopup, counterDate]);

    return (
        <div {...rest}>
            <CounterComponentItem
                isDisabled={showPopup || day <= 0}
                time={day >= 10 ? day : `0${day}`}
                category="DAYS"
            />

            <CounterComponentItem
                isDisabled={showPopup || hour <= 0}
                time={hour >= 10 ? hour : `0${hour}`}
                category="HOURS"
            />
            <CounterComponentItem
                isDisabled={showPopup}
                time={minute >= 10 ? minute : `0${minute}`}
                category="MINUTES"
            />
            <CounterComponentItem
                isDisabled={showPopup}
                time={second >= 10 ? second : `0${second}`}
                category="SECONDS"
            />
            {!showPopup ? null : (
                <p className="absolute top-14 whitespace-nowrap text-center border-4 border-white bg-counterRed text-white px-4 py-4 rounded-full font-bold text-xl left-[50%] lg:left-[45%] transform-gpu translate-x-[-50%] translate-y-[-50%]">
                    {state.counterEndText}
                </p>
            )}
        </div>
    );
}

export default observer(CounterComponment);
