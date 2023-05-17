import { Carousel } from "antd";
import "./additionalInfoSecPage.scss";
import logo from "../../imgs/icons/ukraine.png";
import { useAppSelector } from "../../hooks/reduxHooks";
import { ImgArray, UaInfoArray } from "../../pages/infoPage/infoPageSlice";

const AdditionalInfoSecPage = () => {
    const { pageInfo } = useAppSelector((state) => state.infoPage);

    const { img, uaInfo, name } = pageInfo;

    const renderList = (arr: UaInfoArray) => {
        return arr.map((el, i) => {
            return (
                <li className="info__ua__text-item" key={i}>
                    <h2 className="info__ua__text">{el}</h2>
                </li>
            );
        });
    };

    const renderSlider = (arr: ImgArray) => {
        const cuttedArr = arr.slice(0, 3);

        return cuttedArr.map((el, i) => {
            return (
                <div key={i}>
                    <img src={el} alt="sliderPhoto" className="info__ua__img" />
                </div>
            );
        });
    };

    const listItem = renderList(uaInfo);
    const slides = renderSlider(img);

    return (
        <div className="info">
            <div className="info__wrapper">
                <div className="info__ua">
                    <div className="info__ua__title">
                        <h2 className="info__ua__title-dynamic">{name}</h2>
                        <h2 className="info__ua__title-static">та Україна</h2>
                        <img
                            src={logo}
                            alt="ua"
                            className="info__ua__title-logo"
                        />
                    </div>
                    <div className="info__ua__text-block">
                        <ul className="info__ua__text-ul">{listItem}</ul>
                    </div>
                </div>
                <Carousel className="info__carousel">{slides}</Carousel>
            </div>
        </div>
    );
};

export default AdditionalInfoSecPage;
