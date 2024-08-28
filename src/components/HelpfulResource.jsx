import React from 'react';
import PropTypes from 'prop-types';
import OpenLink from './OpenLink';
import CopyLink from './CopyLink';


function HelpfulResource({ link, label }) {
  return (
    <div className="helpful-resource">
      <p>{label}</p>
      <OpenLink link={link} target="_blank" rel="noopener noreferrer" />
      <CopyLink link={link} target="_blank" rel="noopener noreferrer" />
    </div>
  );
}

HelpfulResource.propTypes = {
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default HelpfulResource;
