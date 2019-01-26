import React from 'react';
import Flexbox from 'flexbox-react';
import Translate from 'react-translate-component'
import { Link } from 'react-router-dom'
import './FooterLinks.css'

const urlPrefix = '/static/';

const footerLinks = [
  'contact',
  'about',
  'imprint',
  'privacy-policy',
  'affiliate-disclaimer'
]

const FooterLinks = () => {
  return (
    <Flexbox className="FooterLinks">
      { footerLinks.map((link, index) => (
        <Flexbox marginLeft="10px" key={index}>
          <Link to={`${urlPrefix}${link}`}>
            <Translate content={`${link}.title`} />
          </Link>
        </Flexbox>
      ))}
    </Flexbox>
  )
}

export default FooterLinks;
