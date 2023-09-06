import React from 'react';
import LinkWithText from './helper/LinkWithText';
import '../styles/footerStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div className='footLayout'>
      <div className='footWrap'>
        <img
          className='footImage'
          src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png"
          alt=""
        />

        <div>
          <LinkWithText
            className='footText'
            link="https://ntwist.com/ntwist-cloned-4582/"
            text='Home'
          />
          <LinkWithText
            className='footText'
            link="https://ntwist.com/about-us/"
            text='About Us'
          />
          <LinkWithText
            className='footText'
            link="https://ntwist.com/contact-us/"
            text='Contact Us'
          />
          <LinkWithText
            className='footText'
            link="https://ntwist.com/privacy-policy"
            text='Privacy Policy'
          />
          <LinkWithText
            className='footText'
            link="https://ntwist.com/sitemap/"
            text='Sitemap'
          />
        </div>

        <p className='footDescription'>
          9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada
        </p>

        <div>
          <a href='https://twitter.com/IncNtwist'>
            <FontAwesomeIcon
              icon={faTwitter}
              className='icon'
            />
          </a>
          <a href='https://www.linkedin.com/company/ntwist/'>
            <FontAwesomeIcon
              icon={faLinkedin}
              className='icon'
            />
          </a>
        </div>

        <span className='footDescription'>
          © 2022. Ntwist Inc.
        </span>
      </div>
    </div>
  );
}