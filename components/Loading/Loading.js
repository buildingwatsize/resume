import React from 'react'
import Lottie from 'react-lottie'
import { ClassCombiner } from 'utils';

import styles from './Loading.module.css'

const defaultOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};
const getOptions = (json = '') => {
  return {
    ...defaultOptions,
    animationData: json,
  }
}

const Loading = ({ json, width, height, text, minWidth = "300px", fullscreen = false, className = '', style = {} }) => {
  return (
    <div className={ClassCombiner(["flexJustifyCenter flexColumn", `${fullscreen ? styles.loading : ""}`, className])} style={{ ...style }}>
      <div className="noInteraction">
        <Lottie
          options={getOptions(json)}
          width={width}
          height={height}
          style={{ minWidth: minWidth }}
        />
      </div>
      <div className={styles.loadingText}>{text}</div>
    </div >
  )
}

export default Loading