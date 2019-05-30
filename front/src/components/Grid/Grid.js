import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { getHouses, getCharacter } from '../../api';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 200,
    width: 200
  },
  modal: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none',
    top: '5%',
    left: '32%'
  }
});


class GuttersGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: [],
      spacing: '2',
      isOpen: false,
      loading: false
    };
  }
  componentDidMount() {
    this.houses();
  }

  houses = async () => {
    getHouses(1, 50).then((response) => {
      this.setState({ houses: response });
    })
  }

  searchCurrentLord = async (currentLord) => {
    console.log('currentLord', currentLord)
    this.setState({ loading: true });
    try {
      if (currentLord === '') {
        this.setState({
          error: true,
        });
      } else {
        const data = await getCharacter(currentLord);
        console.log(data);
        this.setState({
          error: false,
          name: data[0].name,
          gender: data[0].gender,
          culture: data[0].culture,
          born: data[0].born,
          died: data[0].died,
          titles: data[0].titles,
          aliases: data[0].aliases,
          father: data[0].father,
          mother: data[0].mother,
          spouse: data[0].spouse,
          allegiances: data[0].allegiances
        });
      }
      this.setState({
        isOpen: true,
        loading: false,
      });
    } catch (e) {
      console.log(`Error ${e}`);
    }
  }

  handleCloseModal = () => {
    this.setState({ isOpen: false });
  }

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (
      <div>
        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
              {this.state.houses.map(house => (
                <Grid key={house.name} item>
                  <Paper
                    className={classes.paper}
                    onClick={() => this.searchCurrentLord(house.currentLord)}
                  >
                    <div>
                      <h1>{house.name}</h1>
                    </div>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Modal
          aria-labelledby="house-character"
          aria-describedby="current-lord"
          open={this.state.isOpen}
        >
          <div className={classes.modal}>
            {
              this.state.error
                ? 
              <div>
                <p>There is no current lord</p>
              </div>
              :
              <div>
                <h1>Lord's House Information</h1>
                <p>Name: {this.state.name}</p>
                <p>Gender: {this.state.gender}</p>
                <p>Culture: {this.state.culture}</p>
                <p>Born: {this.state.born}</p>
                <p>Died: {this.state.died}</p>
                <p>Titles: {this.state.titles}</p>
                <p>Aliases: {this.state.aliases}</p>
                <p>Father: {this.state.father}</p>
                <p>Mother: {this.state.mother}</p>
                <p>Spouse: {this.state.spouse}</p>
                <p>Allegiances: {this.state.allegiances}</p>
              </div>
            }
            <Button
              variant="contained"
              color="secondary"
              onClick={this.handleCloseModal}
            >
              Cerrar
            </Button>
          </div>
        </Modal>
      </div>
    );
  }
}

GuttersGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GuttersGrid);