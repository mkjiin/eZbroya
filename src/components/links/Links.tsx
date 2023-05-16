import "./links.scss";
import wiki from "../../imgs/icons/wiki.png";
import mil from "../../imgs/icons/mil.png";
import { useAppSelector } from "../../hooks/reduxHooks";

const Links = () => {
    const { pageInfo } = useAppSelector((state) => state.infoPage);
    const { resources } = pageInfo;

    // console.log(resources.wiki)

    return (
        <div className="links">
            <div className="links__buttons">
                <a href={resources.wiki}>
                    <div className="links__button">
                        <img src={wiki} alt="wiki" />
                        <h2>Вікіпедія</h2>
                    </div>
                </a>
                <a href={resources.mil}>
                    <div className="links__button">
                        <img src={mil} alt="wiki" />
                        <h2>Мілітарний</h2>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Links;
