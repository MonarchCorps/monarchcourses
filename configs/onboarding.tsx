import { IsIPAD, windowHeight, windowWidth } from "@/themes/App";
import { OnboardingSlidesTypes } from "@/types/Onboarding";
import { Image } from "react-native";

import One from "@/assets/images/onboarding/1.png";
import Two from "@/assets/images/onboarding/2.png";
import Three from "@/assets/images/onboarding/3.png";

export const onBoardingSlides: OnboardingSlidesTypes[] = [
    {
        color: "#40E0D0",
        title: "Explore Our Community",
        image: (
            <Image
                source={One}
                style={{
                    width: IsIPAD ? windowWidth(310) : windowWidth(430),
                    height: IsIPAD ? windowHeight(260) : windowHeight(300),
                    resizeMode: "contain",
                }}
            />
        ),
        subTitle:
            "Find the perfect course to enhance your career prospects and skill set",
    },
    {
        color: "#A7F893",
        title: "Set Your Own Goal",
        image: (
            <Image
                source={Two}
                style={{
                    width: IsIPAD ? windowWidth(310) : windowWidth(430),
                    height: IsIPAD ? windowHeight(260) : windowHeight(300),
                    resizeMode: "contain",
                }}
            />
        ),
        subTitle:
            "Personalize your study plan with flexible timelines that suit you best",
    },
    {
        color: "#FFC0CB",
        title: "Complete full Course",
        image: (
            <Image
                source={Three}
                style={{
                    width: IsIPAD ? windowWidth(310) : windowWidth(430),
                    height: IsIPAD ? windowHeight(260) : windowHeight(300),
                    resizeMode: "contain",
                }}
            />
        ),
        subTitle:
            "Achieve certification by completing courses with dedicated effort",
    },
];