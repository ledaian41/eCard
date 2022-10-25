import React from 'react';
import Image from 'next/future/image';
import { FaFacebookSquare, FaLinkedin, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import styles from './GradientCard.module.css';

export default function GradientCard( { avatar, title, subtitle, description, phoneNumber, email, sns } ) {
  return (
    <div className={ styles.gradientCard }>
      <Image className={ styles.avatar } src={ avatar } width={ 160 } height={ 160 } alt={ title } />
      <div>
        <h3 className={ styles.title }>{title}</h3>
        <h5 className={ styles.subtitle }>{subtitle}</h5>
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
          { phoneNumber && (
            <a href={ sns.zalo }>
              <div className={ styles.item }>
                <Image src="/zalo.svg" width={ 28 } height={ 28 } alt={ phoneNumber } title="Zalo" />
                <span>
                  {phoneNumber}
                </span>
              </div>
            </a>
          ) }
          { sns.facebook && (
            <a href={ sns.facebook }>
              <div className={ styles.item }>
                <FaFacebookSquare title={ sns.facebook } size={ 24 } color="#4267B2" />
                <span>
                  Facebook
                </span>
              </div>
            </a>
          ) }
          { sns.instagram && (
            <a href={ sns.instagram }>
              <div className={ styles.item }>
                <FaInstagram size={ 24 } title={ sns.instagram } color="#e1306c" />
                <span>
                  Instagram
                </span>
              </div>
            </a>
          ) }
        </div>
      </div>
    </div>
  );
}
