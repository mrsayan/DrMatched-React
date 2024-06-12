import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import SecondaryButton from '../components/secondary-button'
import FooterGray from '../components/footer-gray'
import './coming-soon.css'

const ComingSoon = (props) => {
  return (
    <div className="coming-soon-container">
      <Helmet>
        <title>ComingSoon - DrMatched</title>
        <meta name="description" content="Healthcare at your fingertips." />
        <meta property="og:title" content="ComingSoon - DrMatched" />
        <meta
          property="og:description"
          content="Healthcare at your fingertips."
        />
      </Helmet>
      <Header></Header>
      <div className="coming-soon-container1">
        <div className="coming-soon-main">
          <div className="coming-soon-container2">
            <h1 className="coming-soon-text HeadingOne">You Work With</h1>
            <h1 className="coming-soon-text1">Soft Design System</h1>
            <p className="coming-soon-text2 Lead">
              <span className="coming-soon-text3">
                The time is now for it be okay to be great. Subscribe now and
                get notified when it&apos;s launched!
              </span>
            </p>
            <div className="coming-soon-container3">
              <input
                type="text"
                placeholder="Email here"
                className="coming-soon-textinput Small input"
              />
              <SecondaryButton button="Subscribe"></SecondaryButton>
            </div>
          </div>
          <div className="coming-soon-grid">
            <img
              alt="image"
              sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
              src="/iphone-3-1000w.webp"
              srcSet="/iphone-3-1000w.webp 1200w, /iphone-3-tablet.webp 800w, /iphone-3-mobile.webp 480w"
              className="coming-soon-image"
            />
            <img
              alt="image"
              sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
              src="/iphone-2-1000w.webp"
              srcSet="/iphone-2-1000w.webp 1200w, /iphone-2-tablet.webp 800w, /iphone-2-mobile.webp 480w"
              className="coming-soon-image01"
            />
            <img
              alt="image"
              sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
              src="/iphone-4-1000w.webp"
              srcSet="/iphone-4-1000w.webp 1200w, /iphone-4-tablet.webp 800w, /iphone-4-mobile.webp 480w"
              className="coming-soon-image02"
            />
            <img
              alt="image"
              sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
              src="/iphone-1-1000w.webp"
              srcSet="/iphone-1-1000w.webp 1200w, /iphone-1-tablet.webp 800w, /iphone-1-mobile.webp 480w"
              className="coming-soon-image03"
            />
            <img
              alt="image"
              sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
              src="/iphone-2-1000w.webp"
              srcSet="/iphone-2-1000w.webp 1200w, /iphone-2-tablet.webp 800w, /iphone-2-mobile.webp 480w"
              className="coming-soon-image04"
            />
            <img
              alt="image"
              sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
              src="/iphone-4-1000w.webp"
              srcSet="/iphone-4-1000w.webp 1200w, /iphone-4-tablet.webp 800w, /iphone-4-mobile.webp 480w"
              className="coming-soon-image05"
            />
            <img
              alt="image"
              sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
              src="/iphone-1-1000w.webp"
              srcSet="/iphone-1-1000w.webp 1200w, /iphone-1-tablet.webp 800w, /iphone-1-mobile.webp 480w"
              className="coming-soon-image06"
            />
            <img
              alt="image"
              sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
              src="/iphone-3-1000w.webp"
              srcSet="/iphone-3-1000w.webp 1200w, /iphone-3-tablet.webp 800w, /iphone-3-mobile.webp 480w"
              className="coming-soon-image07"
            />
            <img
              alt="image"
              sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
              src="/iphone-2-1000w.webp"
              srcSet="/iphone-2-1000w.webp 1200w, /iphone-2-tablet.webp 800w, /iphone-2-mobile.webp 480w"
              className="coming-soon-image08"
            />
            <img
              alt="image"
              sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
              src="/iphone-4-1000w.webp"
              srcSet="/iphone-4-1000w.webp 1200w, /iphone-4-tablet.webp 800w, /iphone-4-mobile.webp 480w"
              className="coming-soon-image09"
            />
            <img
              alt="image"
              sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
              src="/iphone-1-1000w.webp"
              srcSet="/iphone-1-1000w.webp 1200w, /iphone-1-tablet.webp 800w, /iphone-1-mobile.webp 480w"
              className="coming-soon-image10"
            />
            <img
              alt="image"
              sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
              src="/iphone-3-1000w.webp"
              srcSet="/iphone-3-1000w.webp 1200w, /iphone-3-tablet.webp 800w, /iphone-3-mobile.webp 480w"
              className="coming-soon-image11"
            />
            <img
              alt="image"
              sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
              src="/iphone-4-1000w.webp"
              srcSet="/iphone-4-1000w.webp 1200w, /iphone-4-tablet.webp 800w, /iphone-4-mobile.webp 480w"
              className="coming-soon-image12"
            />
            <img
              alt="image"
              sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
              src="/iphone-1-1000w.webp"
              srcSet="/iphone-1-1000w.webp 1200w, /iphone-1-tablet.webp 800w, /iphone-1-mobile.webp 480w"
              className="coming-soon-image13"
            />
            <img
              alt="image"
              sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
              src="/iphone-3-1000w.webp"
              srcSet="/iphone-3-1000w.webp 1200w, /iphone-3-tablet.webp 800w, /iphone-3-mobile.webp 480w"
              className="coming-soon-image14"
            />
            <img
              alt="image"
              sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
              src="/iphone-2-1000w.webp"
              srcSet="/iphone-2-1000w.webp 1200w, /iphone-2-tablet.webp 800w, /iphone-2-mobile.webp 480w"
              className="coming-soon-image15"
            />
          </div>
        </div>
      </div>
      <FooterGray></FooterGray>
    </div>
  )
}

export default ComingSoon
