import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { yearChanging } from '../../weaponList/weaponSlice';
import { useState } from 'react';

const StyledSlider = styled(Slider)`
  color: #D9D9D9;

  .MuiSlider-thumb {
    background-color: #D9D9D9;
    pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
  }
  .MuiSlider-track {
    background-color: #D9D9D9;
    border: none
  }

  .MuiSlider-rail {
    background-color: #D9D9D9;
  }
  .MuiSlider-mark {
    color: #000000;
  }
  .MuiSlider-root {
    width: 260px
  }
`;
  
const YearFilter = () => {
    const [activeThumb, setActiveThumb] = useState(null);
    const marks = [
        {
        value: 1,
        label: '< 1970',
        },
        {
          value: 20,
          label: '1970',
        },
        {
          value: 40,
          label: '1980',
        },
        {
          value: 60,
          label: '1990',
        },
        {
          value: 80,
          label: '2000',
        },
        {
          value: 100,
          label: '2010 +',
        },
      ];
    
    const dispatch = useDispatch();

    const handleChange = (value) => {
        // console.log(`handleClick called with value: ${value.target.value}`);
        dispatch(yearChanging(value.target.value));
        setActiveThumb(value)
      };
    

      return (
        <div className="content__form">
          <h5 className="content__form__title">Рік виготовлення</h5>
          <Box sx={{ width: "100%" }}>
            <StyledSlider
              track={false}
              aria-label="Restricted values"
              step={null}
              marks={marks}
              onChange={handleChange}
              disableSwap={true}
              sx={{
                width: "260px",
                "@media (max-width: 1462px)": {
                  width: "220px",
                  marginLeft: "10px",
                },
              }}
            />
          </Box>
        </div>
      );
      
}

export default YearFilter;

{/* <ul className='content__sec-filters__buttons-country'>
                <li className={`content__sec-filters__button-country`}>
                    <div className='content__sec-filters__button-country-name'>Україна</div>
                </li>
                
            </ul> */}