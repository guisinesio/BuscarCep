import React from 'react';
import Lottie from 'react-lottie'

import BlueAnimation from '../../assets/LottieJson/blue.json'

export const BlueAnimationjsx = () => {
    const defaultOption = {
        loop: false,
        autoplay: true,
        animationData: BlueAnimation
    }

    return <Lottie options={defaultOption} width={450} height={250}/>
}