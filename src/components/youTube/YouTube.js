import './youTube.scss'
import { useSelector } from 'react-redux'

const YouTube = () => {
  const { pageInfo } = useSelector(state => state.infoPage);
  const { resources } = pageInfo;
  const screenWidth = window.innerWidth;
  const isLargeScreen = screenWidth > 1348 && screenWidth < 1462;
  const isMediumScreen = screenWidth > 990 && screenWidth < 1349;
  const isSmallScreen = screenWidth > 767 && screenWidth < 991;
  const isXSmallScreen = screenWidth <= 767;

  return (
    <div className='youtube'>
      <div className='youtube__wrapper'>
        <iframe
          width={
            isLargeScreen
              ? "1315"
              : isMediumScreen
              ? "950"
              : isSmallScreen
              ? "721"
              : isXSmallScreen
              ? "545"
              : "1328"
          }
          height={
            isLargeScreen || isMediumScreen
              ? "650"
              : isSmallScreen
              ? "500"
              : isXSmallScreen
              ? "294"
              : "550"
          }
          src={`https://www.${resources.youtube}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        <hr />
      </div>
    </div>
  );
};

export default YouTube;

