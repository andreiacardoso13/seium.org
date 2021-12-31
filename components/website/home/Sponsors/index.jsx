import { useState } from 'react';

import Image from 'next/image'

import Tab from './Tab';

import styles from './style.module.css';

export default function Sponsors(props) {
    const [val, setValue] = useState(true);

    const changeValLeft = function() {
        if(val != true)
            setValue(true);
    }

    const changeValRight = function() {
        if(val == true)
            setValue(false);
    }

    return (
        <div className="spacing bg-tertiary text-white py-20">
            <h2 className="text-6xl font-iextrabold py-10 flex justify-center"> Our amazing sponsors </h2>
            <div className="flex justify-center">
                <Tab tabName="Exclusive & Gold" selected={val} onSelect={changeValLeft}></Tab>
                <Tab tabName="Silver & Bronze" selected={!val} onSelect={changeValRight}></Tab>
            </div>

            <div className={styles.blockWrapper}>
                <div className={styles.leftBlock}>
                    <p className={` text-3xl text-iextrabold text-white`}> {val ? "Exclusive" : "Silver"}</p>
                    <div className= 'mt-10 grid-cols-1'>
                    <Image className={`${val ? "visible" : "invisible"} `} src="/images/sponsors/accenture.svg" width={250} height={50} alt="Accenture"/>
                    </div>
                </div>

                <div className={styles.rightBlock}>
                <h5 className={` text-3xl text-iextrabold text-white`}> {val ? "Gold" : "Bronze"}</h5>
                </div>

            </div>
        </div>
    );
}