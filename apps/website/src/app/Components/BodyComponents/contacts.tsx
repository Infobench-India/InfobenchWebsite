import React, { useState } from 'react';
import { Box, Grid, Container, Typography, Button } from '@material-ui/core';
import { useStyles } from './BodyStyles';
import { RenderInputText } from '../common/formComponent';

export default function Contact() {
  const classes = useStyles();
  const [state, setState] = useState({
    data: {
      firstname: String,
      email: String,
      messages: String,
    },
  });

  const handleOnChange = ({ target }: any) => {
    let { data } = state;
    data = [target.name] = target.value;
    setState({ data });
  };
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log('submitted', state.data);
  };

  return (
    <Box className={classes.section} id="Contact">
      <Container>
        <Grid container spacing={10}>
          <Grid item xs={12} sm={7}>
            <Typography variant="h4">Contact Us</Typography>
            <br />
            <form onSubmit={handleSubmit}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item xs={12} sm={12} style={{ marginBottom: '16px' }}>
                  {RenderInputText({
                    label: 'First Name',
                    name: 'firstname',
                    state: state,
                    onChange: handleOnChange,
                    multiline: false,
                    rows: '2',
                  })}
                </Grid>
                <Grid item xs={12} sm={12} style={{ marginBottom: '16px' }}>
                  {RenderInputText({
                    label: 'E-mail',
                    name: 'email',
                    state: state,
                    onChange: handleOnChange,
                    multiline: false,
                    rows: '2',
                  })}
                </Grid>
                <Grid item xs={12} sm={12} style={{ marginBottom: '16px' }}>
                  {RenderInputText({
                    label: 'Messages',
                    name: 'messages',
                    state: state,
                    onChange: handleOnChange,
                    multiline: true,
                    rows: '5',
                  })}
                </Grid>
                <Grid item xs={12} sm={8} style={{ marginBottom: '16px' }}>
                  <Button
                    variant="outlined"
                    type="submit"
                    fullWidth={true}
                    className={classes.submitBtn}
                  >
                    Submit
                  </Button>
                </Grid>
                <Grid item xs={10} sm={12} style={{ marginBottom: '16px' }}>
                  <Typography className={classes.font}>
                    {' '}
                    This site is protected by reCAPTCHA and Google Privacy
                    Policy and Terms of Service apply.
                  </Typography>

                  <Typography className={classes.font1}>
                    {' '}
                    We look forward to a wonderful relationship together and
                    success for all concerned.
                  </Typography>

                  <Typography className={classes.font2}>
                    {' '}
                    Pune, Maharashtra, India{' '}
                  </Typography>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
