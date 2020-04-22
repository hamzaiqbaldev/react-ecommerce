import React, { Component } from "react";
import {connect} from 'react-redux';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from "../../components/menu-item/menu-item.component";

import "./directory.styles.scss";

const DirectoryComponent = ({sections}) => (
        <div className="directory-menu">
            {
                sections.map(({ id, ...otherSectionProps }) => {                    
                    return(<MenuItem key={id} {...otherSectionProps} />);
                })
            }
        </div>
);

const mapStateToProps = state => ({
  sections: selectDirectorySections(state)
});

export default connect(mapStateToProps)(DirectoryComponent);
