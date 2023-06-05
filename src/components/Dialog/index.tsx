import { DocumentNode, gql, useQuery } from '@apollo/client';
import { DialogActions, DialogContent, DialogContentText, DialogTitle, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import * as React from 'react';

const GET_PERSON = gql`
query GetPerson($personId: Int!) {
  person(id: $personId) {
    name
    height
    mass
    hair_color
    skin_color
    eye_color
    birth_year
    gender
    created
    edited
    url
  }
}`;

const GET_PLANET = gql`
query Get($planetId: Int!) {
  planet(id: $planetId) {
    name
    rotation_period
    orbital_period
    diameter
    climate
    gravity
    terrain
    surface_water
    population
    created
    edited
    url
  }
}
`;

const GET_FILM = gql`
query Get($filmId: Int!) {
  film(id: $filmId) {
    title
    episode_id
    opening_crawl
    director
    producer
    release_date
    created
    edited
    url
  }
}
`;

const GET_SPECIE = gql`
query Get($specieId: Int!) {
  specie(id: $specieId) {
    name
    classification
    designation
    average_height
    skin_colors
    hair_colors
    eye_colors
    average_lifespan
    language
    created
    edited
    url
  }
}
`;

const GET_VEHICLE = gql`
query Get($vehicleId: Int!) {
  vehicle(id: $vehicleId) {
    name
    model
    manufacturer
    cost_in_credits
    length
    max_atmosphering_speed
    crew
    passengers
    cargo_capacity
    consumables
    vehicle_class
    created
    edited
    url
  }
}
`;

const GET_STARSHIP = gql`
query Query($starshipId: Int!) {
  starship(id: $starshipId) {
    name
    model
    manufacturer
    cost_in_credits
    length
    max_atmosphering_speed
    crew
    passengers
    cargo_capacity
    consumables
    hyperdrive_rating
    MGLT
    starship_class
    created
    edited
    url
  }
}
`;


interface dialog {
  id?: string;
  get?: string;
}

const AlertDialog: React.FC<dialog> = ({ id = 1, get }) => {
  const [open, setOpen] = React.useState(false);
  const [getVar, setGetVar] = React.useState<any>();


  const { data } = useQuery((
    get == "people" ? GET_PERSON :
      get == "planets" ? GET_PLANET :
        get == "films" ? GET_FILM :
          get == "species" ? GET_SPECIE :
            get == "vehicles" ? GET_VEHICLE :
              GET_STARSHIP),
    {
      variables:
        get == "people" ? { personId: +id } :
          get == "planets" ? { planetId: +id } :
            get == "films" ? { filmId: +id } :
              get == "species" ? { specieId: +id } :
                get == "vehicles" ? { vehicleId: +id } :
                  { starshipId: +id }
    }
  );
  const handleClickOpen = () => {
    setOpen(true);

  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ paddingTop: '20px', paddingBottom: '10px' }}>
      <Button variant="text" color="secondary" onClick={handleClickOpen}>
        Saiba Mais
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{data?.person?.name}{data?.planet?.name}{data?.film?.title}{data?.specie?.name}{data?.vehicle?.name}</DialogTitle>
        <DialogContent
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          {data?.person && <>
            <DialogContentText id="alert-dialog-description">
              birth_year: {data?.person?.birth_year}
            </DialogContentText>
            <DialogContentText id="alert-dialog-description">
              eye_color: {data?.person?.eye_color}
            </DialogContentText>
            <DialogContentText id="alert-dialog-description">
              hair_color: {data?.person?.hair_color}
            </DialogContentText>
            <DialogContentText id="alert-dialog-description">
              mass: {data?.person?.mass}
            </DialogContentText>
          </>
          }
          {data?.planet && <>
            <DialogContentText id="alert-dialog-description">
              climate: {data?.planet?.climate}
            </DialogContentText>
            <DialogContentText id="alert-dialog-description">
              gravity: {data?.planet?.gravity}
            </DialogContentText>
            <DialogContentText id="alert-dialog-description">
              rotation_period: {data?.planet?.rotation_period}
            </DialogContentText>
            <DialogContentText id="alert-dialog-description">
              terrain: {data?.planet?.terrain}
            </DialogContentText>
          </>
          }
          {data?.film && <>
            <DialogContentText id="alert-dialog-description">
              episode_id: {data?.film?.episode_id}
            </DialogContentText>
            <DialogContentText id="alert-dialog-description">
              director: {data?.film?.director}
            </DialogContentText>
            <DialogContentText id="alert-dialog-description">
              producer: {data?.film?.producer}
            </DialogContentText>
            <DialogContentText id="alert-dialog-description">
              release_date: {data?.film?.release_date}
            </DialogContentText>
          </>
          }
          {data?.specie && <>
            <DialogContentText id="alert-dialog-description">
              classification: {data?.specie?.classification}
            </DialogContentText>
            <DialogContentText id="alert-dialog-description">
              skin_colors: {data?.specie?.skin_colors}
            </DialogContentText>
            <DialogContentText id="alert-dialog-description">
              eye_colors: {data?.specie?.eye_colors}
            </DialogContentText>
            <DialogContentText id="alert-dialog-description">
              language: {data?.specie?.language}
            </DialogContentText>
          </>
          }
          {data?.vehicle && <>
            <DialogContentText id="alert-dialog-description">
              model: {data?.vehicle?.model}
            </DialogContentText>
            <DialogContentText id="alert-dialog-description">
              max_atmosphering_speed: {data?.vehicle?.max_atmosphering_speed}
            </DialogContentText>
            <DialogContentText id="alert-dialog-description">
              cargo_capacity: {data?.vehicle?.cargo_capacity}
            </DialogContentText>
            <DialogContentText id="alert-dialog-description">
              vehicle_class: {data?.vehicle?.vehicle_class}
            </DialogContentText>
          </>
          }
        </DialogContent>
        <DialogActions>
          <Grid container justifyContent="space-around">
            <Grid item>
              <Button variant="text" color="secondary" onClick={handleClose}>
                Cancelar
              </Button>
            </Grid>
            <Grid item>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AlertDialog;