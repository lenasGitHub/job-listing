import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useTranslation } from "react-i18next";

import { Grid, Container, TextField, Typography, Box, Stack, Button, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';

import { fetchJobs } from '../core/services/api';
import { Job } from '../core/Interfece/jobs';

import JobCard from './JobCard';
import CustomPagination from './Pagination';

const JobList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { t } = useTranslation(['home']);

  const { data, isLoading, error, refetch } = useQuery(['post', currentPage], () => fetchJobs((currentPage -1), searchQuery));

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = () => {
    setCurrentPage(1);
    refetch();
  };
  console.log("WEfwefwef")

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (isLoading) {
    return <StyledCenterBox><CircularProgress /></StyledCenterBox>;
  }

  if (error) {
    return <StyledCenterBox><Typography variant="h6" component="h3">Error:</Typography></StyledCenterBox>;
  }

  if (!data.hasOwnProperty('results')) {
    return <StyledCenterBox>
      <Typography variant="h6" component="h3">Api Error: refetch the page</Typography></StyledCenterBox>
  }

  return (
    <Container>
      <StyledSearchBox>
        <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" justifyContent="space-between">
          <StyledInput
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder='Job Title'
            size='small'
          />
          <Button size="small" color="secondary" variant="contained" onClick={handleSearchClick}>
            Search
          </Button>
        </Stack>
      </StyledSearchBox>
      <Typography gutterBottom variant="h4" component="h1">
        {t("title", {ns: ['home']})} 
      </Typography>
      <Grid container spacing={2} alignItems="flex-end">
        {data.results.jobs.map((job: Job) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={job.id}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>
      <Box
        mt={8}
        mb={10}
      >
        <Stack spacing={{ xs: 1, sm: 2 }} useFlexGap justifyContent="center" alignItems="center">
          <CustomPagination
            currentPage={currentPage}
            totalPages={data.results.pages}
            onPageChange={handlePageChange}
          />
        </Stack>
      </Box>
    </Container>
  );
};

const StyledSearchBox = styled(Box)({
  width: 'auto',
  padding: '20px 15px 15px',
  backgroundColor: 'rgb(244, 244, 244)',
  border: '2px solid #d4d4d4',
  borderBottomLeftRadius: 12,
  borderBottomRightRadius: 12,
  marginBottom: '40px',
  position: 'sticky',
  top: 0,
  zIndex: 99,
});

const StyledCenterBox = styled(Box)({
  width: '100%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const StyledInput = styled(TextField)({
  backgroundColor: 'white'
});

export default JobList;