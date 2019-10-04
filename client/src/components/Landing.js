import React from 'react';
import image1 from './background1.jpg';
import image2 from './background2.jpg';
import image3 from './background3.jpg';

const Landing = () => {
  return (
    <React.Fragment>
      <div id='index-banner' className='parallax-container'>
        <div className='section no-pad-bot'>
          <div className='container'>
            <h1 className='header center'>Every blood donor is a life saver</h1>
            <div className='row center'>
              <h5 className='header col s12 light'>
                Bring a life back to power. Make blood donation your
                responsibility
              </h5>
            </div>
            <div className='row center'>
              <a
                href='http://materializecss.com/getting-started.html'
                id='download-button'
                className='btn-large waves-effect waves-light red  darken-2'
              >
                Donate
              </a>
            </div>
          </div>
        </div>
        <div className='parallax'>
          <img src={image1} alt='Unsplashed background img 1' />
        </div>
      </div>

      <div className='container'>
        <div className='section'>
          <div className='row'>
            <div className='col s12 m4'>
              <div className='icon-block'>
                <h2 className='center brown-text'>
                  <i className='material-icons'>flash_on</i>
                </h2>
                <h5 className='center'>Search For Blood Swiftly</h5>

                <p className='light'>
                  Search for donors without any hassle of ringing up hospitals
                  and blood banks.
                </p>
              </div>
            </div>

            <div className='col s12 m4'>
              <div className='icon-block'>
                <h2 className='center brown-text'>
                  <i className='material-icons'>group</i>
                </h2>
                <h5 className='center'>User Experience Focused</h5>

                <p className='light'>
                  A single responsive system for a more unified user experience.
                </p>
              </div>
            </div>

            <div className='col s12 m4'>
              <div className='icon-block'>
                <h2 className='center brown-text'>
                  <i className='material-icons'>settings</i>
                </h2>
                <h5 className='center'>Easy to work with</h5>

                <p className='light'>
                  Get help at the click of a button. Start making a difference
                  right now.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='parallax-container valign-wrapper'>
        <div className='section no-pad-bot'>
          <div className='container'>
            <div className='row center'>
              <h5 className='header col s12 light'>
                A single pint can save three lives, a single gesture can create
                a million smiles
              </h5>
            </div>
          </div>
        </div>
        <div className='parallax'>
          <img src={image2} alt='Unsplashed background img 2' />
        </div>
      </div>

      <div className='container'>
        <div className='section'>
          <div className='row'>
            <div className='col s12 center'>
              <h3>
                <i className='mdi-content-send brown-text'></i>
              </h3>
              <h4>Testimonials</h4>
              <p className='left-align light'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                scelerisque id nunc nec volutpat. Etiam pellentesque tristique
                arcu, non consequat magna fermentum ac. Cras ut ultricies eros.
                Maecenas eros justo, ullamcorper a sapien id, viverra ultrices
                eros. Morbi sem neque, posuere et pretium eget, bibendum
                sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu
                mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi
                massa odio, condimentum sed ipsum ac, gravida ultrices erat.
                Nullam eget dignissim mauris, non tristique erat. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia Curae;
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='parallax-container valign-wrapper'>
        <div className='section no-pad-bot'>
          <div className='container'>
            <div className='row center'>
              <h5 className='header col s12 light'>
                Donate your blood for a reason, let the reason to be life
              </h5>
            </div>
          </div>
        </div>
        <div className='parallax'>
          <img src={image3} alt='Unsplashed background img 3' />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Landing;
