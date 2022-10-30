import React from 'react';
import {RequestStatusType} from '../../../../app/app-reducer';
import {Button} from '../../../../common/components/Button/Button';
import {CityType} from '../../weather-reducer';
import styles from './CitySelector.module.scss'

type CitySelectorPropsType = {
    city: string | undefined
    callBack: (city: CityType) => void
    status: RequestStatusType
}

const arrCity: CityType[] = ['Minsk', 'Moscow', 'Bratislava']

export const CitySelector = ({city, callBack, status}: CitySelectorPropsType) => {

    return <div className={styles.citySelector}>
        {arrCity.map((el, index) => {

            const onClickButtonHandler = () => callBack(el)

            return <Button
                key={index}
                className={el === city ? styles.active : ''}
                onClick={onClickButtonHandler}
                disabled={status === 'loading'}
            >
                {el}
            </Button>
        })}
    </div>
}