import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import Splide, { Options } from '@splidejs/splide';

const View = styled.div``;

const useSlider = ({
    options,
    beforeMount,
}: {
    options?: Options;
    beforeMount?: (slider: Splide) => void;
}) => {
    const [splide, setSplide] = useState<Splide | null>(null);
    const [currentIndex, setIndex] = useState<number>(0);
    const [slides, setSlides] = useState<number>(0);

    useEffect(() => {
        const initSlider = async () => {
            const slider = new Splide('.splide', options);

            slider.on('updated' as any, () => {
                setSlides(slider.length);
            });

            slider.on('moved', (newIndex: number) => {
                setIndex(newIndex);
            });

            beforeMount && beforeMount(slider);

            slider.mount();
            setIndex(slider.index);
            setSlides(slider.length);

            setSplide(slider);
        };

        initSlider();

        return () => {
            if (splide) splide?.destroy(true);
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        slider: splide,
        length: slides,
        index: currentIndex,
    };
};

export default useSlider;

export const Slider: FC<{
    className?: string;
}> = ({ className, children }) => {
    const additionalClasses = className ? className : '';
    return <View className={'splide ' + additionalClasses}>{children}</View>;
};

export const Slides: FC<{
    className?: string;
}> = ({ className, children }) => {
    const additionalClasses = className ? className : '';
    return (
        <div className={'splide__track ' + additionalClasses}>
            <ul className="splide__list">{children}</ul>
        </div>
    );
};

export const Slide: FC<{
    className?: string;
}> = ({ className, children }) => {
    const additionalClasses = className ? className : '';
    return <li className={'splide__slide ' + additionalClasses}>{children}</li>;
};

export const SlideContainer: FC<{
    className?: string;
}> = ({ className, children }) => {
    const additionalClasses = className ? className : '';
    return (
        <div className={'splide__slide__container ' + additionalClasses}>
            {children}
        </div>
    );
};

export const Arrows: FC<{
    className?: string;
}> = ({ className, children }) => {
    const additionalClasses = className ? className : '';
    return (
        <div className={'splide__arrows ' + additionalClasses}>{children}</div>
    );
};

export const Arrow: FC<{
    direction?: 'prev' | 'next';
    onClick?: (ev: React.SyntheticEvent<HTMLButtonElement>) => void;
    className?: string;
}> = ({ direction = 'prev', onClick, className, children }) => {
    const additionalClasses = className ? className : '';
    return (
        <button
            onClick={onClick}
            className={
                `splide__arrow splide__arrow--${
                    direction === 'prev' ? 'prev' : 'next'
                } ` + additionalClasses
            }
        >
            {children}
        </button>
    );
};
