import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import PrimaryPinkButton from '../components/primary-pink-button'
import OutlineGrayButton from '../components/outline-gray-button'
import FeatureCard from '../components/feature-card'
import OutlineBlackButton from '../components/outline-black-button'
import ListItem from '../components/list-item'
import PrimaryBlueButton from '../components/primary-blue-button'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>DrMatched</title>
        <meta name="description" content="Healthcare at your fingertips." />
        <meta property="og:title" content="DrMatched" />
        <meta
          property="og:description"
          content="Healthcare at your fingertips."
        />
      </Helmet>
      <Header></Header>
      <div className="home-hero">
        <div id="home" className="home-container01">
          <div className="home-card">
            <h1 className="home-text">
              <span>More than Healthcare.</span>
              <br className="HeadingOne"></br>
            </h1>
            <h1 className="home-text03">Your Personal Journey to Wellness</h1>
            <span className="home-text04">
              Where Compassion Meets Care: Your Health, Our Priority, at Your
              Fingertips!
            </span>
            <div className="home-container02">
              <div className="home-container03">
                <a href="#contact" className="home-link">
                  <PrimaryPinkButton
                    button="contact us"
                    className="home-component01"
                  ></PrimaryPinkButton>
                </a>
              </div>
              <a href="#solution" className="home-link1">
                <OutlineGrayButton
                  button="read more"
                  className="home-component02"
                ></OutlineGrayButton>
              </a>
            </div>
            <div className="home-container04">
              <img
                alt="image"
                src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-pinterest.svg"
                className="home-image"
              />
              <img
                alt="image"
                src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-netflix.svg"
                className="home-image01"
              />
              <img
                alt="image"
                src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-coinbase.svg"
                className="home-image02"
              />
              <img
                alt="image"
                src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-nasa.svg"
                className="home-image03"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE5fHxkb2N0b3J8ZW58MHx8fHwxNzE0NjIyODYwfDA&amp;ixlib=rb-4.0.3&amp;h=1500"
        className="home-image04"
      />
      <section className="home-features">
        <FeatureCard
          text="Choose the best design system for your next product."
          title="Components"
          imageSrc="/cube1.svg"
        ></FeatureCard>
        <FeatureCard imageSrc="/person1.svg"></FeatureCard>
        <FeatureCard
          text="Make your code easier to maintain using variables."
          title="Less Code"
          imageSrc="/rocket1.svg"
        ></FeatureCard>
        <FeatureCard
          text="This design system is fully supported on any device."
          title="Fully Responsive"
          imageSrc="/credit%20card1.svg"
        ></FeatureCard>
      </section>
      <section id="about" className="home-container05">
        <div className="home-container06">
          <h1 className="home-text05 HeadingOne">
            Healthcare isn&apos;t just physical!
          </h1>
          <h3 className="home-text06">
            <span>
              It&apos;s about having a mental stamina that could rival a
              chaiwala&apos;s energy during rush hour.
            </span>
            <br></br>
          </h3>
        </div>
        <div className="home-container07">
          <div className="home-container08">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1650848200302-22e62d26a75a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxwc3ljaGlhdHJpc3R8ZW58MHx8fHwxNzE0NjMzNzQ3fDA&amp;ixlib=rb-4.0.3&amp;w=1100"
              className="home-image05"
            />
            <span className="home-text09">
              <span>
                &quot;Health is a state of complete physical, mental and social
                well-being and not merely the absence of disease or
                infirmity.&quot;
              </span>
              <br></br>
              <span className="home-text12">-WHO</span>
            </span>
            <div className="home-container09">
              <img
                alt="image"
                sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                src="/image%20(5)-1000w.webp"
                srcSet="/image%20(5)-1000w.webp 1200w, /image%20(5)-tablet.webp 800w, /image%20(5)-mobile.webp 480w"
                className="home-image06"
              />
            </div>
          </div>
          <div className="home-container10">
            <img
              alt="image"
              sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
              src="/photo-1607368386669-d940ce438fba-1400w.webp"
              srcSet="/photo-1607368386669-d940ce438fba-1400w.webp 1200w, /photo-1607368386669-d940ce438fba-tablet.webp 800w, /photo-1607368386669-d940ce438fba-mobile.webp 480w"
              className="home-image07"
            />
            <div className="home-container11">
              <h3 className="home-text13">
                <span>The problems with the healthcare system in India</span>
                <br className="home-text15"></br>
              </h3>
              <p>
                <br></br>
                <span>
                  In India, only about 2% of people receive timely healthcare,
                  which is a big problem. One reason is that it&apos;s hard to
                  find doctors and know when they&apos;re available. This makes
                  it tough for patients to find the right place to go for help.
                </span>
                <br></br>
                <br></br>
                <span>
                  Another big issue is getting help for mental health problems,
                  especially for teenagers. Even though more people are talking
                  about mental health these days, there&apos;s still a lot of
                  shame and embarrassment around it. This makes it really hard
                  for people to ask for help when they need it.
                </span>
                <br></br>
                <br></br>
                <span>
                  Around 7.5% of the population in India has mental health
                  disorders, but many struggle to get the support they need
                  because of the stigma.
                </span>
                <br></br>
                <br></br>
                <span>
                  Right now, there&apos;s no good app that shows you all the
                  doctors nearby and when they&apos;re free to see patients.
                  Fixing this problem is super important not just for regular
                  healthcare but also for making sure people can get help for
                  their mental health without feeling judged.
                </span>
                <br></br>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="home-testimonials">
        <div id="work" className="home-container12">
          <div className="home-container13">
            <div className="home-container14">
              <h2 className="home-text29 HeadingOne">Work with us</h2>
              <p className="home-text30">
                <span className="Lead">
                  Calling all healers-in-the-making! 🩺💉
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
              <p className="home-text33">
                <span className="home-text34">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="Body">
                  Got the skills to rock the medical world? We&apos;re scouting
                  for passionate peeps to join our doc-squad! If you&apos;re
                  ready to prescribe some serious positivity and cure the tech
                  world with your talents, slide into our inbox.
                </span>
              </p>
              <p className="home-text36">Team DrMatched</p>
              <p className="home-text37">Made with ❤️</p>
              <div className="home-container15">
                <img
                  alt="image"
                  src="/team-4-200h.webp"
                  className="home-image08"
                />
                <div className="home-container16"></div>
                <img
                  alt="image"
                  src="/team-3-200h.webp"
                  className="home-image09"
                />
                <div className="home-container17"></div>
                <img
                  alt="image"
                  src="/team-2-200h.webp"
                  className="home-image10"
                />
              </div>
            </div>
          </div>
          <div className="home-logos">
            <div className="home-container18">
              <div className="home-container19">
                <div className="home-container20">
                  <img
                    alt="image"
                    src="/Icon Sets/img-20240425-wa0026-200h.webp"
                    className="home-image11"
                  />
                </div>
                <div className="home-container21">
                  <img
                    alt="image"
                    src="/Icon Sets/img-20240425-wa0020-200h.webp"
                    className="home-image12"
                  />
                </div>
                <div className="home-container22">
                  <img
                    alt="image"
                    src="/Icon Sets/img-20240425-wa0021-200h.webp"
                    className="home-image13"
                  />
                </div>
              </div>
              <div className="home-container23">
                <div className="home-container24">
                  <img
                    alt="image"
                    src="/Icon Sets/img-20240425-wa0025-200h.webp"
                    className="home-image14"
                  />
                </div>
                <div className="home-container25">
                  <img
                    alt="image"
                    src="/Icon Sets/img-20240425-wa0027-200h.webp"
                    className="home-image15"
                  />
                </div>
                <div className="home-container26">
                  <img
                    alt="image"
                    src="/Icon Sets/img-20240425-wa0022-200h.webp"
                    className="home-image16"
                  />
                </div>
              </div>
              <div className="home-container27">
                <div className="home-container28">
                  <img
                    alt="image"
                    src="/Icon Sets/img-20240425-wa0024-200h.webp"
                    className="home-image17"
                  />
                </div>
                <div className="home-container29">
                  <img
                    alt="image"
                    src="/Icon Sets/img-20240425-wa0023-200h.webp"
                    className="home-image18"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img alt="image" src="/bottom.svg" className="home-bottom-wave-image" />
        <img alt="image" src="/waves-white.svg" className="home-image19" />
        <img alt="image" src="/top.svg" className="home-top-wave-image" />
      </section>
      <section id="solution" className="home-contaier">
        <div className="home-container30">
          <div className="home-container31">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M363.722 722.052l41.298-57.816-45.254-45.256-57.818 41.296c-10.722-5.994-22.204-10.774-34.266-14.192l-11.682-70.084h-64l-11.68 70.086c-12.062 3.418-23.544 8.198-34.266 14.192l-57.818-41.298-45.256 45.256 41.298 57.816c-5.994 10.72-10.774 22.206-14.192 34.266l-70.086 11.682v64l70.086 11.682c3.418 12.060 8.198 23.544 14.192 34.266l-41.298 57.816 45.254 45.256 57.818-41.296c10.722 5.994 22.204 10.774 34.266 14.192l11.682 70.084h64l11.68-70.086c12.062-3.418 23.544-8.198 34.266-14.192l57.818 41.296 45.254-45.256-41.298-57.816c5.994-10.72 10.774-22.206 14.192-34.266l70.088-11.68v-64l-70.086-11.682c-3.418-12.060-8.198-23.544-14.192-34.266zM224 864c-35.348 0-64-28.654-64-64s28.652-64 64-64 64 28.654 64 64-28.652 64-64 64zM1024 384v-64l-67.382-12.25c-1.242-8.046-2.832-15.978-4.724-23.79l57.558-37.1-24.492-59.128-66.944 14.468c-4.214-6.91-8.726-13.62-13.492-20.13l39.006-56.342-45.256-45.254-56.342 39.006c-6.512-4.766-13.22-9.276-20.13-13.494l14.468-66.944-59.128-24.494-37.1 57.558c-7.812-1.892-15.744-3.482-23.79-4.724l-12.252-67.382h-64l-12.252 67.382c-8.046 1.242-15.976 2.832-23.79 4.724l-37.098-57.558-59.128 24.492 14.468 66.944c-6.91 4.216-13.62 8.728-20.13 13.494l-56.342-39.006-45.254 45.254 39.006 56.342c-4.766 6.51-9.278 13.22-13.494 20.13l-66.944-14.468-24.492 59.128 57.558 37.1c-1.892 7.812-3.482 15.742-4.724 23.79l-67.384 12.252v64l67.382 12.25c1.242 8.046 2.832 15.978 4.724 23.79l-57.558 37.1 24.492 59.128 66.944-14.468c4.216 6.91 8.728 13.618 13.494 20.13l-39.006 56.342 45.254 45.256 56.342-39.006c6.51 4.766 13.22 9.276 20.13 13.492l-14.468 66.944 59.128 24.492 37.102-57.558c7.81 1.892 15.742 3.482 23.788 4.724l12.252 67.384h64l12.252-67.382c8.044-1.242 15.976-2.832 23.79-4.724l37.1 57.558 59.128-24.492-14.468-66.944c6.91-4.216 13.62-8.726 20.13-13.492l56.342 39.006 45.256-45.256-39.006-56.342c4.766-6.512 9.276-13.22 13.492-20.13l66.944 14.468 24.492-59.13-57.558-37.1c1.892-7.812 3.482-15.742 4.724-23.79l67.382-12.25zM672 491.2c-76.878 0-139.2-62.322-139.2-139.2s62.32-139.2 139.2-139.2 139.2 62.322 139.2 139.2c0 76.878-62.32 139.2-139.2 139.2z"></path>
            </svg>
          </div>
          <h2 className="home-text38 HeadingTwo">
            Streamlining Healthcare Solutions
          </h2>
          <h3 className="home-text39 HeadingTwo">
            <span className="home-text40">How To Handle Them</span>
            <br></br>
          </h3>
          <h3 className="home-text41">
            <span className="HeadingThree">
              What does
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text43">DrMatched</span>
            <span className="HeadingThree">
              {' '}
              offer to solve existing healthcare challenges?
            </span>
          </h3>
        </div>
        <div className="home-container32">
          <div className="home-container33">
            <div className="home-container34"></div>
            <div className="home-container35">
              <svg viewBox="0 0 987.4285714285713 1024" className="home-icon02">
                <path d="M438.857 508.571l312 312c-79.429 80.571-190.286 130.286-312 130.286-242.286 0-438.857-196.571-438.857-438.857s196.571-438.857 438.857-438.857v435.429zM545.714 512h441.714c0 121.714-49.714 232.571-130.286 312zM950.857 438.857h-438.857v-438.857c242.286 0 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <h1 className="home-text45 HeadingOne">Search and Discover!</h1>
              <span className="home-text46">Website visitors</span>
              <OutlineBlackButton button="get started"></OutlineBlackButton>
            </div>
          </div>
          <div className="home-container36">
            <ListItem
              newProp="Doctor Appointments"
              description="Explore our extensive directory of both online and offline doctors, providing you with a wide range of choices for your healthcare needs."
            ></ListItem>
            <ListItem
              title="2. Performance Analyze"
              newProp="Pharmacy Connect"
              description="Access a comprehensive listing of local medicine shops, ensuring you can conveniently find and order medicines from nearby stores with ease."
            ></ListItem>
            <ListItem
              title="3. Social Conversions"
              newProp="Labs Locator"
              description="Find local laboratories effortlessly, and make informed choices using our reviews and ratings platform."
            ></ListItem>
          </div>
        </div>
        <div className="home-divider"></div>
        <div className="home-container37">
          <div className="home-container38">
            <ListItem
              title="1. Always in Sync"
              description="No matter where you are, Trello stays in sync across all of your devices."
            ></ListItem>
            <ListItem
              title="2. Work With Any Team"
              description="Unify data from Facebook, Instagram, Twitter, LinkedIn, and Youtube to gain rich insights from easy-to-use reports."
            ></ListItem>
            <ListItem
              title="3. A Productivity Platform"
              description="Integrate the apps your team already uses directly into your workflow."
            ></ListItem>
          </div>
          <div className="home-container39">
            <div className="home-container40"></div>
            <div className="home-container41">
              <svg viewBox="0 0 1152 1024" className="home-icon04">
                <path d="M1088 901.166c0 45.5 26.028 84.908 64 104.184v15.938c-10.626 1.454-21.472 2.224-32.5 2.224-68.008 0-129.348-28.528-172.722-74.264-26.222 6.982-54.002 10.752-82.778 10.752-159.058 0-288-114.616-288-256s128.942-256 288-256c159.058 0 288 114.616 288 256 0 55.348-19.764 106.592-53.356 148.466-6.824 14.824-10.644 31.312-10.644 48.7zM512 0c278.458 0 504.992 180.614 511.836 405.52-49.182-21.92-103.586-33.52-159.836-33.52-95.56 0-185.816 33.446-254.138 94.178-70.846 62.972-109.862 147.434-109.862 237.822 0 44.672 9.544 87.888 27.736 127.788-5.228 0.126-10.468 0.212-15.736 0.212-27.156 0-53.81-1.734-79.824-5.044-109.978 109.978-241.25 129.7-368.176 132.596v-26.916c68.536-33.578 128-94.74 128-164.636 0-9.754-0.758-19.33-2.164-28.696-115.796-76.264-189.836-192.754-189.836-323.304 0-229.75 229.23-416 512-416z"></path>
              </svg>
              <h1 className="home-text47 HeadingOne">Talk and Meet!</h1>
              <span className="home-text48">
                <span>Website visitors</span>
                <span></span>
              </span>
              <OutlineBlackButton button="get started"></OutlineBlackButton>
            </div>
          </div>
        </div>
      </section>
      <div id="contact" className="home-contact">
        <div className="home-container42">
          <div className="home-form">
            <h2 className="home-text51 HeadingOne">
              <span>Say Hi!</span>
            </h2>
            <h3 className="home-text53 Lead">
              We&apos;d like to talk with you.
            </h3>
            <form className="home-form1">
              <label className="home-text54 Label">My name is</label>
              <input
                type="text"
                required="true"
                placeholder="Full Name"
                className="home-textinput Small input"
              />
              <label className="home-text55 Label">I&apos;m looking for</label>
              <input
                type="text"
                required="true"
                placeholder="What you love"
                className="home-textinput1 Small input"
              />
              <label className="home-text56 Label">Your message</label>
              <textarea
                rows="8"
                placeholder="I want to say that..."
                className="home-textarea Small textarea"
              ></textarea>
            </form>
            <div className="home-container43">
              <div className="home-container44">
                <PrimaryBlueButton button="send message"></PrimaryBlueButton>
              </div>
            </div>
          </div>
          <div className="home-info">
            <div className="home-container45">
              <h3 className="home-text57 HeadingTwo">
                <span>
                  Contact
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>Information</span>
              </h3>
              <span className="home-text60">
                Fill up the form and our Team will get back to you within 24
                hours.
              </span>
              <div className="home-container46">
                <div className="home-container47">
                  <svg viewBox="0 0 1024 1024" className="home-icon06">
                    <path d="M742 460l-94-94q-18-18-10-44 24-72 24-152 0-18 12-30t30-12h150q18 0 30 12t12 30q0 300-213 513t-513 213q-18 0-30-12t-12-30v-150q0-18 12-30t30-12q80 0 152-24 24-10 44 10l94 94q186-96 282-282z"></path>
                  </svg>
                  <a href="tel:+91 7278349639" className="home-link2">
                    +91-7278349639
                  </a>
                </div>
                <div className="home-container48">
                  <svg viewBox="0 0 1024 1024" className="home-icon08">
                    <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                  </svg>
                  <a
                    href="mailto:contact@drmatched.com?subject=DrMatched"
                    className="home-link3"
                  >
                    contact@drmatched.com
                  </a>
                </div>
                <div className="home-container49">
                  <svg viewBox="0 0 1024 1024" className="home-icon10">
                    <path d="M512 490q44 0 75-31t31-75-31-75-75-31-75 31-31 75 31 75 75 31zM512 86q124 0 211 87t87 211q0 62-31 142t-75 150-87 131-73 97l-32 34q-12-14-32-37t-72-92-91-134-71-147-32-144q0-124 87-211t211-87z"></path>
                  </svg>
                  <span className="home-text61 Small">West Bengal, India</span>
                </div>
              </div>
              <div className="home-container50">
                <a
                  href="https://www.facebook.com/profile.php?id=61560528043804"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link4"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon12"
                  >
                    <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/drmatched"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link5"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon14"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon16"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <a
                  href="https://www.linkedin.com/company/drmatched/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link6"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon18"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <img alt="image" src="/wave-1.svg" className="home-image20" />
            <div className="home-container51"></div>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default Home
