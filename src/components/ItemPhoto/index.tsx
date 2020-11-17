/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable no-debugger */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-restricted-globals */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-plusplus */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
/* eslint-disable no-use-before-define */
/* eslint-disable react/prefer-stateless-function */
import {
  Button,
  Card, CardActionArea, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, useMediaQuery, useTheme,
} from '@material-ui/core';
import React, { Component } from 'react';
import { Photo } from '../../store/ducks/photos/types';
import './styles/itemPhoto.css';

interface StateProps {
  photo: Photo,
}

type Props = StateProps;

const ItemPhoto: React.FC<Props> = ({ photo }) => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Card className="main">
        <CardActionArea>
          <CardMedia className="media-photo" image={photo.thumbnailUrl} onClick={handleOpen} />
        </CardActionArea>
      </Card>
      <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
        {/* <DialogTitle id="responsive-dialog-title">{photo.title}</DialogTitle> */}
        <DialogContent>
          <div className="modal-image">
            <img src={photo.url} className="full-image" />
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ItemPhoto;
