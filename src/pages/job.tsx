import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Box, CircularProgress, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { getJobDetails } from '../core/services/api';

import JobDescriptionCard from '../components/JobDescriptionCard';
import RelatedJob from '../components/RelatedJob';

const Job: React.FC = () => {
  const { slug } = useParams();

  const { data, isLoading, error } = useQuery(
    ['post', slug],
    () => getJobDetails(slug)
  );

  if (isLoading) {
    return <StyledCenterBox><CircularProgress /></StyledCenterBox>;
  }

  if (error) {
    return <StyledCenterBox><Typography variant="h6" component="h3">Error:</Typography></StyledCenterBox>;
  }
  return <Container>
    <Box sx={{  height: '20px',}}
    />
    <Grid container spacing={2}>
      
    <RelatedJob uuid={data.results.uuid} />
    <JobDescriptionCard data={data.results} />
    </Grid>
    </Container>;
};

const StyledCenterBox = styled(Box)({
  width: '100%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});


export default Job;
