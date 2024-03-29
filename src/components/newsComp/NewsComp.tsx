import "./newsComp.scss";
import { Carousel } from "antd";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { Slide, fetchedSlider } from "./newsSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { reset } from "../weaponList/weaponSlice";

const NewsComp = () => {
    const { slider } = useAppSelector((state) => state.slider);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchedSlider());
    }, []);

    const renderSlider = (arr: Slide[]) => {
        return arr.map(({ sliderPhoto, id, name, type }) => {
            const formattedName = name.replace(/\s+/g, "__");
            return (
                <div key={id}>
                    <Link
                        to={`/${encodeURIComponent(type)}/${encodeURIComponent(
                            formattedName
                        )}/${encodeURIComponent(id - 1)}`}
                        className="news__link"
                        onClick={() => dispatch(reset())}
                    >
                        <img
                            src={sliderPhoto}
                            alt="tank"
                            className="news__link_img"
                        />
                        <div className="news__link_overlay">
                            <h2 className="news__more">
                                Дізнатися більше про {name}
                            </h2>
                        </div>
                    </Link>
                </div>
            );
        });
    };

    const slides = renderSlider(slider);

    return (
        <div className="news">
            <Carousel dotPosition="bottom">{slides}</Carousel>
        </div>
    );
};

export default NewsComp;

// country: {
//     countryFilter: 'nt',
//     countryFilterIcon: 'sl.png',
//     countryOrigin: 'ussr',
//     countryOriginIcon: 'ussr.png',
//     countryModification: 'slovenia'
// }

// country: {
//     countryFilter: 'ua',
//     countryFilterIcon: 'ua.png',
//     countryOrigin: 'ussr',
//     countryOriginIcon: 'ussr.png',
//     countryModification: ''
// }

// country: {
//     countryFilter: 'ua',
//     countryFilterIcon: 'ua.png',
//     countryOrigin: 'ua',
//     countryOriginIcon: '',
//     countryModification: ''
// }

// country: {
//     countryFilter: 'nt',
//     countryFilterIcon: 'usa.png',
//     countryOrigin: 'usa',
//     countryOriginIcon: '',
//     countryModification: ''
// }
