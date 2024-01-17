import * as Icon from 'react-bootstrap-icons';

const SocialMediaIcons = () => {
  return (
    <div className='social-media-section'>
      <a href='#' className='tx-white-hover me-2'>
        <Icon.Facebook></Icon.Facebook>
      </a>
      <a href='#' className='tx-white-hover me-2'>
        <Icon.Instagram></Icon.Instagram>
      </a>
      <a href='#' className='tx-white-hover me-2'>
        <Icon.Twitter></Icon.Twitter>
      </a>
      <a href='#' className='tx-white-hover me-2'>
        <Icon.Youtube></Icon.Youtube>
      </a>
    </div>
  );
};

export default SocialMediaIcons;
