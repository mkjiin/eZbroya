import './youTube.scss'
import { useSelector } from 'react-redux'

const YouTube = () => {
  const { pageInfo } = useSelector(state => state.infoPage);
  const { resources } = pageInfo;
  const isLargeScreen = window.innerWidth > 1349 && window.innerWidth < 1462;

  return (
    <div className='youtube'>
      <div className='youtube__wrapper'>
        <iframe
          width={isLargeScreen ? "1315" : "1328"}
          height="650"
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
