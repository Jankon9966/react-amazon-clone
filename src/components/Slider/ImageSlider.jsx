import React from "react";
import "../../css/ImageSlider.css";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { sliderActions } from "../../redux/slices/slider-slice";
import { SLIDER_IMAGES } from "../../utils/slider/dummySliderData";


const ImageSlider = () => {
  const imageValue = useSelector((state) => state.slider.value);
  const dispatch = useDispatch();

  const nextImage = () => {
    dispatch(sliderActions.showNextImage(imageValue + 1));
  };

  const previousImage = () => {
    dispatch(sliderActions.showPreviousImage(imageValue - 1));
  };

  return (
    <div className="slider">
      <div className="left_arrow">
        <AiOutlineLeft onClick={previousImage} fontSize={50} cursor="pointer" />
      </div>
      {SLIDER_IMAGES.map((item) => {
        return (
          <div key={item.id}>
            {Number(item.id) === imageValue && <img src={item.image} alt="Slider..." />}
          </div>
        );
      })}
      <div className="right_arrow">
        <AiOutlineRight onClick={nextImage} fontSize={50} cursor="pointer" />
      </div>
    </div>
  );
};

export default ImageSlider;
