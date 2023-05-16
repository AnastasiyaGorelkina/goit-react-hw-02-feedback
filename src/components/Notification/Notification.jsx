import PropTypes from 'prop-types';
import Notific from './Notification.styled';

const Notification = ({ massege }) => {
  return <Notific>{massege}</Notific>;
};

Notification.propTypes = {
  massege: PropTypes.string.isRequired,
};

export default Notification;