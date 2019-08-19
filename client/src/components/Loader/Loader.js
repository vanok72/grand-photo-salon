import React from 'react';
import PropTypes from 'prop-types';
import style from './Loader.less';

const Loader = props => {
  const { isUseWall } = props;
  return (
    <div>
      {isUseWall && <div className={style.lds_ring2} />}
      <div className={style.lds_ring}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

Loader.propTypes = {
  isUseWall: PropTypes.bool.isRequired,
};
export default Loader;
