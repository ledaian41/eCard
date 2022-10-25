import React from 'react';
import Image from 'next/future/image';
import { FaFacebookSquare, FaLinkedin, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import Footer from '@common/Footer';
import styles from './BasicCard.module.css';

export default function BasicCard( { avatar, title, subtitle, description, phoneNumber, email, sns } ) {
  return (
    <div className={ styles.basicCard }>
      <Image className={ styles.avatar } src={ avatar } width={ 160 } height={ 160 } alt={ title } />
      <div>
        <h3 className={ styles.title }>{title}</h3>
        <h5 className={ styles.subtitle }>{subtitle}</h5>
        <p className={ styles.description }>{description}</p>
        <div className={ styles.list }>
          { phoneNumber && (
            <a href={ `tel:${ phoneNumber }` }>
              <div className={ styles.item }>
                <FaPhoneAlt title={ phoneNumber } color="#73e119ff" />
                <span>
                  {phoneNumber}
                </span>
              </div>
            </a>
          ) }
          { email && (
            <a href={ `mailto:${ email }` }>
              <div className={ styles.item }>
                <SiGmail title={ email } color="#c71610" />
                <span>
                  {email}
                </span>
              </div>
            </a>
          ) }
        </div>
      </div>
      <div className={ styles.navbar }>
        <a>
          <Image src="/zalo.svg" width={ 38 } height={ 38 } alt={ phoneNumber } />
        </a>
        <a>
          <FaFacebookSquare size={ 40 } title={ sns.facebook } color="#4267B2" />
        </a>
        <a>
          <FaInstagram size={ 40 } title={ sns.instagram } color="#e1306c" />
        </a>
        <a>
          <FaLinkedin size={ 40 } title={ sns.linkedin } color="#0077b5" />
        </a>
      </div>
      <Footer />
    </div>
  );
}
