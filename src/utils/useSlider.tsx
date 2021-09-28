import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import Splide, { SplideOptions } from '@splidejs/splide';

const View = styled.div``;

const Slider: FC<{
    className?: string;
}> = ({ className, children }) => {
    return <View className={'splide ' + className}>{children}</View>;
};

const Slides: FC<{
    className?: string;
}> = ({ className, children }) => {
    return (
        <div className={'splide__track ' + className}>
            <ul className="splide__list">{children}</ul>
        </div>
    );
};

const Slide: FC<{
    className?: string;
}> = ({ className, children }) => {
    return <li className={'splide__slide ' + className}>{children}</li>;
};

const SlideContainer: FC<{
    className?: string;
}> = ({ className, children }) => {
    return (
        <div className={'splide__slide__container ' + className}>
            {children}
        </div>
    );
};

const Arrows: FC<{
    className?: string;
}> = ({ className, children }) => {
    return <div className={'splide__arrows ' + className}>{children}</div>;
};

const ArrowPrev: FC<{
    className?: string;
}> = ({ className, children }) => {
    return (
        <button className={'splide__arrow splide__arrow--prev ' + className}>
            {children}
        </button>
    );
};

const ArrowNext: FC<{
    className?: string;
}> = ({ className, children }) => {
    return (
        <button className={'splide__arrow splide__arrow--next ' + className}>
            {children}
        </button>
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
        Arrows: Arrows,
        ArrowPrev: ArrowPrev,
        ArrowNext: ArrowNext,
        slider: splide,
        length: slides,
        index: currentIndex,
    };
};

export default useSlider;
