import React from 'react';
import style from './styles/Profile.module.css';
import PropTypes from 'prop-types';

const Profile = ({ name, tag, avatar, location, stats, alt }) => {
  const { followers, views, likes } = stats;

  return (
    <div className={style.profile}>
      <div className={style.description}>
        <img src={avatar} 
        alt={alt}
        className={style.avatar} />
        <p className={style.name}>{name}</p>
        <p className={style.tag}>@{tag}</p>
        <p className={style.location}>{location}</p>
      </div>
      <ul className={style.stats}>
        <li>
          <span className={style.label}>Followers</span>
          <span className={style.quantity}>{followers}</span>
        </li>
        <li>
          <span className={style.label}>Views</span>
          <span className={style.quantity}>{views}</span>
        </li>
        <li>
          <span className={style.label}>Likes</span>
          <span className={style.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;


Profile.defaultProps ={
  alt: "user avatar",
}
Profile.propTypes={
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
  alt: PropTypes.string,
}