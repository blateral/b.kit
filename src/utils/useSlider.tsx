import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import Splide, { SplideOptions } from '@splidejs/splide';

const View = styled.div``;

const Slider: FC<{
    className?: string;
}> = ({ className, children }) => {
    const additionalClasses = className ? className : '';
    return <View className={'splide ' + additionalClasses}>{children}</View>;
};

const Slides: FC<{
    className?: string;
}> = ({ className, children }) => {
    const additionalClasses = className ? className : '';
    return (
        <div className={'splide__track ' + additionalClasses}>
            <ul className="splide__list">{children}</ul>
        </div>
    );
};

const Slide: FC<{
    className?: string;
}> = ({ className, children }) => {
    const additionalClasses = className ? className : '';
    return <li className={'splide__slide ' + additionalClasses}>{children}</li>;
};

const SlideContainer: FC<{
    className?: string;
}> = ({ className, children }) => {
    const additionalClasses = className ? className : '';
    return (
        <div className={'splide__slide__container ' + additionalClasses}>
            {children}
        </div>
    );
};

const useSlider = (options?: SplideOptions) => {
    const [splide, setSplide] = useState<Splide | null>(null);
    const [currentIndex, setIndex] = useState<number>(0);
    const [slides, setSlides] = useState<number>(0);

    useEffect(() => {
        const initSlider = async () => {
            const DynamicSplide = await (await import('@splidejs/splide'))
                .default;

            const slider = new DynamicSplide('.splide', options);

            slider.on('updated', () => {
                setSlides(slider.length);
            });

            slider.on('moved', (newIndex: number) => {
                setIndex(newIndex);
            });

            slider.mount();
            setIndex(slider.index);
            setSlides(slider.length);

            setSplide(slider);
        };

        initSlider();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        View: Slider,
        Slides: Slides,
        Slide: Slide,
        SlideContainer: SlideContainer,
        slider: splide,
        length: slides,
        index: currentIndex,
    };
};

export default useSlider;

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
