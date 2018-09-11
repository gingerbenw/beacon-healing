/**
 *
 * Felicity
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'redux';

// Images
import Background from 'images/background3.jpg';
import FelicityPraying from './felicity-pray.jpg';

/* eslint-disable react/prefer-stateless-function */
export class Felicity extends React.PureComponent {
  render() {
    return (
      <PageWrapper id="post" className="wrapper bg-img" bg={Background}>
        <div className="inner">
          <article className="box">
            <header>
              <h1>Felicity Wilson</h1>
              <p>Continuing the work of The Beacon</p>
            </header>
            <div className="content">
              <span className="image fit">
                <img src={FelicityPraying} alt="Felicity praying" />
              </span>
              <p>
                Having been appointed the sole and official representative of
                The Beacon by Charles Siddle, Felicity is dedicated to
                continuing and expanding the work he started. He was sadly
                unable to realise many of his ideas before his passing, but
                Felicity, who was trained by, and worked so closely with him, is
                fully aware of these and will devote her time and efforts to
                carrying them out.
              </p>
              <p>
                Her work as part of a veterinary team in horse practice and at a
                referral clinic, coupled with the association she has had with
                other vets pioneering complimentary therapies for both horses
                and small animals, has given her an all round approach to animal
                health and management, using the best possible combination of
                scientific and natural therapies. She is a Riding and Natural
                Horsemanship instructor, a Championship Show judge and lives
                with her children, horses, cats, dogs, guinea pigs and rabbits!
              </p>
              <p>
                Having been brought up in a farming community in Wiltshire, both
                domestic pets and wild animals have featured prominently in her
                life. From childhood her gift was evident. On one occasion
                having found a badger pitifully entangled in a cruel snare, she
                brought it home leading it like a dog on a lead. Her parents
                were amazed that she could handle a terrified badger without
                getting hurt. She then gave the badger the treatment it needed
                and returned it to it&#39;s own environment.
              </p>
              <p>
                In recent years Felicity&#39;s priority has become healing,
                instigated by Charles, who she is aware is still guiding her
                along her pathway of healing and in the further development of
                The Beacon.
              </p>
              <p>
                Felicity has found that many pets are suffering, along with
                their owners, from adverse energies in their homes, stables,
                kennels etc. Geopathic and electromagnetic stress are two of the
                major problems that affect the animals even more than their
                owners. The harmonisation of these energies, using either
                scientific or natural techniques, is the cornerstone of the
                holistic approach and supports the healing work, promoting good
                health for all concerned.
              </p>
              <p>
                A deep love of animals, and a tireless devotion to channelling
                the healing and facilitating workshops takes Felicity all around
                the country as she is always willing to travel to carry out her
                work. Clients range from polecats and pumas to rabbits and
                guinea pigs, in fact any animal, bird, fish or reptile.
              </p>

              <p>
                <em>
                  All pictures of animals featured on this Website, are ones who
                  have received the benefit of healing energies channelled by
                  Felicity.
                </em>
              </p>

              {/* <img src="" alt="Felicity with Sausage" />
										<img src="" alt="Felicity Healing" />
										<img src="" alt="Puma Project" />
										<img src="" alt="Felicity with Cat Fred" />
										<img src="" alt="Felicity with Smay - Charles' favourite riding horse" />  */}
            </div>
            <footer>
              {/* <ul className="actions">
                  <li>
                    <a href="#" className="button alt icon fa-chevron-left">
                      <span className="label">Previous</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="button alt icon fa-chevron-right">
                      <span className="label">Next</span>
                    </a>
                  </li>
                </ul> */}
            </footer>
          </article>
        </div>
      </PageWrapper>
    );
  }
}

Felicity.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Felicity);

const PageWrapper = styled.div`
  background: url(${props => props.bg});
`;
