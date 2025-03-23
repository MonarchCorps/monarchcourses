import { OnboardingSlidesTypes } from "./Onboarding"

export type SliderProps = {
    index: number,
    setIndex: (value: number) => void,
    children: JSX.Element,
    prev: JSX.Element,
    next: JSX.Element
}

export type SlideProps = {
    slide: OnboardingSlidesTypes,
}