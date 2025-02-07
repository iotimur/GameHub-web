import React, { useState } from "react";
import Sorting from "./sorting/sorting";
import Leaders from "./leaders/leaders";
import NewGames from "./new-games/new-games";
import DiscountGames from "./discount-games/discount-games";
import Filter from "./filter/filter";
import mainApi from "../../_data_/service/main-api";
import { AnimationContainer, LottieWrapper, StyledText } from "../main/main-container/main.styled";
import Lottie from "lottie-react";
import { t } from "i18next";
import { useSelector } from "react-redux";
import * as getHomeSearchSelectors from "../../_data_/selectors/home-app-search";
import somethingWrong from "../../assets/Images_main/something_wrong_cat.json"; // что-то пошло не так
import errorAnimation from "../../assets/Images_main/error_dog.json"; // Анимация ошибки
// import empty from "../../assets/Images_main/sleep cat.json";

const AllCategories = () => {
    const [sortOption, setSortOption] = useState("");
    const [isLeaders, setIsLeaders] = useState(true);
    const [isNewGames, setIsNewGames] = useState(true);
    const [isDiscountGames, setIsDiscountGames] = useState(true);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSortingDropdownOpen, setIsSortingDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const allGames = useSelector(getHomeSearchSelectors.allGames);

    const handleSort = (option) => {
        setSortOption(option);
        setSelectedOption(option);
    };
    const handleFilter = (category, visible) => {
        switch (category) {
            case 'leaders':
                setIsLeaders(visible);
                break;
            case 'newGames':
                setIsNewGames(visible);
                break;
            case 'discountGames':
                setIsDiscountGames(visible);
                break;
            default:
                break;
        }
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(prev => !prev);
    };
    const toggleSortingDropdown = () => {
        setIsSortingDropdownOpen(prev => !prev);
    };

    const { isFetching, isLoading, data, error } = mainApi.useAllGamesQuery();
    console.log("Loading=", isLoading)
    console.log("error=", error)
    // Если идет загрузка, показываем анимацию загрузки или текст
    if (isFetching || isLoading) {
        return (
            <AnimationContainer style={{ textAlign: "center" }}>
                <LottieWrapper>
                    <Lottie animationData={somethingWrong} />
                </LottieWrapper>
                <StyledText>{t('main_loading')}</StyledText>
            </AnimationContainer>
        );
    }

    // Если ошибка при запросе данных, показываем анимацию ошибки
    if (error) {
        return (
            <AnimationContainer style={{ textAlign: "center" }}>
                <LottieWrapper>
                    <Lottie animationData={errorAnimation} />
                </LottieWrapper>
                <StyledText>{t('main_error')}</StyledText>
            </AnimationContainer>
        );
    }

    // Если данные пустые, показываем анимацию для пустых данных
    if (!data || data.length === 0) {
        return (
            <AnimationContainer style={{ textAlign: "center" }}>
                <LottieWrapper>
                    <Lottie animationData={somethingWrong} />
                </LottieWrapper>
                <StyledText>{t('main_empty')}</StyledText>
            </AnimationContainer>
        );
    }

    let leadersGames = [];
    leadersGames = allGames.slice(0, (allGames.length / 2));
    let newGames = [];
    newGames = allGames.slice((allGames.length / 2), allGames.length);
    let discountGames = [];
    discountGames = allGames.filter(game => game.old_price !== undefined)
        .sort((a, b) => a.title.localeCompare(b.title))
        .slice(0, allGames.length);
    console.log("err: ", error)
    return (
        <>
            <Filter
                isLeaders={isLeaders}
                isNewGames={isNewGames}
                isDiscountGames={isDiscountGames}
                onFilter={handleFilter}
                isDropdownOpen={isDropdownOpen}
                toggleDropdown={toggleDropdown}
            />
            <Sorting
                onSort={handleSort}
                selectedOption={selectedOption}
                isDropdownOpen={isSortingDropdownOpen}
                toggleDropdown={toggleSortingDropdown}
            />
            {isLeaders && <Leaders
                sortOption={sortOption} Games={leadersGames} />}
            {isNewGames && <NewGames
                sortOption={sortOption} Games={newGames} />}
            {isDiscountGames && <DiscountGames
                sortOption={sortOption} Games={discountGames} />}
        </>
    );
};

export default AllCategories;