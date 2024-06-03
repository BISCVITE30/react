import React from 'react';
import moment from 'moment';

const formatDate = date => moment(date).format('DD MMM YY');

const Profile = props => {
  const fullName = `${props.user.firstName} ${props.user.lastName}`;
  return (
    <div className="profile">
      <div className="profile__name">{fullName}</div>
      <div className="profile__birth">{`Was born ${formatDate(props.user.birthDate)} in ${
        props.user.birthPlace
      } `}</div>
    </div>
  );
};

export default Profile;
