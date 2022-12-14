import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { FaFacebookSquare, FaLinkedin, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import Avatar from '@common/Avatar';
import ColorStyle from '@common/ColorStyle';
import Footer from '@common/Footer';
import colorPalette from './colorPalette.json';
import styles from './GradientCard.module.css';

export default function GradientCard( { avatar, title, subtitle, description, phoneNumber, email, sns, theme } ) {
  return (
    <>
      <ColorStyle colorPalette={ colorPalette[theme] } />
      <div className={ styles.gradientCard }>
        <Avatar src={ avatar } alt={ title } />
        <div>
          <h3 className={ styles.title }>{title}</h3>
          <h4 className={ styles.subtitle }>{subtitle}</h4>
          <p className={ styles.description }>{description}</p>
          <div className={ styles.list }>
            { phoneNumber && (
              <a href={ `tel:${ phoneNumber }` }>
                <div className={ styles.item }>
                  <FaPhoneAlt title={ phoneNumber } size={ 26 } color="#73e119ff" />
                  <span>
                    {phoneNumber}
                  </span>
                </div>
              </a>
            ) }
            { email && (
              <a href={ `mailto:${ email }` }>
                <div className={ styles.item }>
                  <SiGmail title={ email } size={ 26 } color="#c71610" />
                  <span>
                    {email}
                  </span>
                </div>
              </a>
            ) }
            { phoneNumber && (
              <a href={ sns.zalo }>
                <div className={ styles.item }>
                  <Image src="/zalo.svg" width={ 26 } height={ 26 } alt={ phoneNumber } title="Zalo" />
                  <span>
                    {phoneNumber}
                  </span>
                </div>
              </a>
            ) }
            { sns.facebook && (
              <a href={ sns.facebook }>
                <div className={ styles.item }>
                  <FaFacebookSquare title={ sns.facebook } size={ 26 } color="#4267B2" />
                  <span>
                  Facebook
                  </span>
                </div>
              </a>
            ) }
            { sns.instagram && (
              <a href={ sns.instagram }>
                <div className={ styles.item }>
                  <FaInstagram size={ 26 } title={ sns.instagram } color="#e1306c" />
                  <span>
                  Instagram
                  </span>
                </div>
              </a>
            ) }
            { sns.linkedin && (
              <a href={ sns.linkedin }>
                <div className={ styles.item }>
                  <FaLinkedin size={ 26 } title={ sns.linkedin } color="#0077b5" />
                  <span>
                  Linkedin
                  </span>
                </div>
              </a>
            ) }
          </div>
        </div>
        <Footer style={ { marginTop: 'auto', paddingTop: '2rem' } } />
      </div>
    </>
  );
}

GradientCard.propTypes = {
  theme: PropTypes.string,
};

GradientCard.defaultProps = {
  theme: 'theme-1',
};
