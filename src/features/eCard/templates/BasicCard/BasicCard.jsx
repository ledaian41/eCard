import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { FaFacebookSquare, FaLinkedin, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import Avatar from '@common/Avatar';
import ColorStyle from '@common/ColorStyle';
import Footer from '@common/Footer';
import colorPalette from './colorPalette.json';
import styles from './BasicCard.module.css';

export default function BasicCard( { avatar, title, subtitle, description, phoneNumber, email, sns, theme } ) {
  return (
    <>
      <ColorStyle colorPalette={ colorPalette[theme] } />
      <div className={ styles.basicCard }>
        <Avatar src={ avatar } alt={ title } />
        <div>
          <h3 className={ styles.title }>{title}</h3>
          <h4 className={ styles.subtitle }>{subtitle}</h4>
          <p className={ styles.description }>{description}</p>
          <div className={ styles.list }>
            { phoneNumber && (
              <a href={ `tel:${ phoneNumber }` }>
                <div className={ styles.item }>
                  <FaPhoneAlt title={ phoneNumber } size={ 24 } color="#73e119ff" />
                  <span>
                    {phoneNumber}
                  </span>
                </div>
              </a>
            ) }
            { email && (
              <a href={ `mailto:${ email }` }>
                <div className={ styles.item }>
                  <SiGmail title={ email } size={ 24 } color="#c71610" />
                  <span>
                    {email}
                  </span>
                </div>
              </a>
            ) }
          </div>
        </div>
        <div className={ styles.navbar }>
          <a href={ sns.zalo }>
            <Image src="/zalo.svg" width={ 38 } height={ 38 } alt={ phoneNumber } />
          </a>
          <a href={ sns.facebook }>
            <FaFacebookSquare size={ 40 } title={ sns.facebook } color="#4267B2" />
          </a>
          <a href={ sns.instagram }>
            <FaInstagram size={ 40 } title={ sns.instagram } color="#e1306c" />
          </a>
          <a href={ sns.linkedin }>
            <FaLinkedin size={ 40 } title={ sns.linkedin } color="#0077b5" />
          </a>
        </div>
        <Footer />
      </div>
    </>
  );
}

BasicCard.propTypes = {
  theme: PropTypes.string,
};

BasicCard.defaultProps = {
  theme: 'theme-1',
};
