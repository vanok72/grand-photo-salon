import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import SideBar from '../../navigation/SideBar/SideBar';
import style from './Layout.less';

const Layout = props => {
  const { children } = props;
  return (
    <Container fluid className={style.root}>
      <Row className={[style.root, 'flex-xl-nowrap']}>
        <SideBar />
        <Col as="main" className={style.main} xl={9} key="2">
          {children}
        </Col>
      </Row>
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
};
export default Layout;
