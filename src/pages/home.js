import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

//Components
import Scream from '../components/scream/Scream';
import Profile from '../components/profile/Profile';

//Redux
import { connect } from 'react-redux';
import { getScreams } from '../redux/actions/dataActions';

export class home extends Component {
  
  componentDidMount() {
    this.props.getScreams();
  }
  
  render() {
    const { screams, loading } = this.props.data;
    let recentScreamsMarkup = !loading ? (
      screams.map((scream) => <Scream key={scream.screamId} scream={scream}/>)
    ) : (
      <p>Loading...</p>
    );
    return (
      <Grid container spacing={16}>
        <Grid item sm={8} xs={12}>
          {recentScreamsMarkup}
        </Grid>
        <Grid>
          <Profile/>
        </Grid>
      </Grid>
    )
  }
}

home.propTypes = {
  getScreams: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  data: state.data
})

export default connect(mapStateToProps, { getScreams })(home);
