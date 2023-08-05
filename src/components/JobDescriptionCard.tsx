import React from 'react';

import { Card, CardContent, Typography, Button, Divider, Stack, CardActions, Grid, Box } from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { styled } from '@mui/material/styles';

import { JobDescriptionProps } from '../core/Interfece/jobs';
import { formatDate } from '../core/utils/share';

const JobDescriptionCard: React.FC<JobDescriptionProps> = ({ data }) => {
  var date = new Date(data.posted_at)

  return (
    <Grid item xs={12} md={9}>
      <StyledCard>
        <CardContent>
        <Stack sx={{ flexDirection: { xs: "column", md: "row"}, alignItems: { xs: "start", md: "center"}  }} alignItems="start">
          <Typography sx={{ fontSize: '28px', fontWeight: '600' }} component="h1">
            {data.title}
          </Typography>
          <Box ml={3}/>
          <Tags>{data.career_level}</Tags>
          </Stack>

          <Typography gutterBottom variant="subtitle2" >
          Posted On: {formatDate(data.posted_at)}
          </Typography>
          <Box mb={3}></Box>

          {data.requirements && <>
            <Header3 gutterBottom>
              Description
            </Header3>
            <div dangerouslySetInnerHTML={{ __html: data.description }} />
          </>}
          <Box mb={3}></Box>

          {data.requirements && <>
            <Header3 gutterBottom>
              Requirements
            </Header3>
            <div dangerouslySetInnerHTML={{ __html: data.requirements }} />
          </>}

          <Box mb={4}></Box>
          <Header3 gutterBottom>
            Summary
          </Header3>
          <StyleBox>
            <Stack
              justifyContent="space-between"
              alignItems="center"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
              sx={{ flexDirection: { xs: "column", md: "row"} }}
            >
              <Box sx={{ width: '100%' }}>
                <Stack sx={{ flexDirection: { xs: "column", md: "row"}, alignItems: { xs: "start", md: "center"} }} justifyContent="space-between" alignItems="center">
                  <Header6>
                    {'Salary range:'}
                  </Header6>
                  <HeaderLight6 variant="subtitle1" >
                    {data.salary.min ? `${data.salary.min} - ${data.salary.max}` : '--'}
                  </HeaderLight6>
                </Stack>
                <Stack sx={{ flexDirection: { xs: "column", md: "row"}, alignItems: { xs: "start", md: "center"} }} justifyContent="space-between">
                  <Header6>
                    {'Industry:'}
                  </Header6>
                  <HeaderLight6 variant="subtitle1">
                    {data.industry.length != 0 ? data.industry.join(',') : '--'}
                  </HeaderLight6>
                </Stack>
                <Stack sx={{ flexDirection: { xs: "column", md: "row"}, alignItems: { xs: "start", md: "center"} }} justifyContent="space-between">
                  <Header6>
                    {'Experience Required:'}
                  </Header6>
                  <HeaderLight6 variant="subtitle1">
                    {data.years_of_experience.length != 0 ? data.years_of_experience.join(',') : '--'}
                  </HeaderLight6>
                </Stack>
              </Box>
              <Box sx={{ width: '100%' }}>
                <Stack sx={{ flexDirection: { xs: "column", md: "row"}, alignItems: { xs: "start", md: "center"} }} justifyContent="space-between">
                  <Header6>
                    {'Major:'}
                  </Header6>
                  <HeaderLight6 variant="subtitle1">
                    {data.major.length != 0 ? data.major.join(',') : '--'}
                  </HeaderLight6>
                </Stack>
                <Stack sx={{ flexDirection: { xs: "column", md: "row"}, alignItems: { xs: "start", md: "center"} }} justifyContent="space-between">
                  <Header6>
                    {'Career Level:'}
                  </Header6>
                  <HeaderLight6 variant="subtitle1">
                    {data.career_level.length != 0 ? data.career_level.join(',') : '--'}
                  </HeaderLight6>
                </Stack>
                <Stack sx={{ flexDirection: { xs: "column", md: "row"}, alignItems: { xs: "start", md: "center"} }} justifyContent="space-between">
                  <Header6>
                    {'Minimum GPA:'}
                  </Header6>
                  <HeaderLight6 variant="subtitle1">
                    {data.gpa ? data.gpa : '--'}
                  </HeaderLight6>
                </Stack>
              </Box>
            </Stack>
          </StyleBox>

          <Header3 mt={3} gutterBottom>
            Required Skills
          </Header3>
          <Stack
            useFlexGap
            direction="row"
            alignItems="center"
            flexWrap="wrap"
            spacing={2}
            mb={2}
          >
            {data.skills.length != 0 ? data.skills.map((skill: string) => (<Tags>{skill}</Tags>)) : <Typography variant="subtitle2" >
              {'There is No Skills'}
            </Typography>}
          </Stack>
          <Divider />

          <Header3 mt={2} gutterBottom>
            Languages
          </Header3>
          <Stack
            useFlexGap
            direction="row"
            alignItems="center"
            spacing={2}
            mb={2}
          >
            {data.languages.length != 0 ? data.languages.map((language: string) => (<Tags>{language}</Tags>)) : <Typography variant="subtitle2" >
              {'There is No Languages'}
            </Typography>}
          </Stack>
          <Divider />
        </CardContent>
        <CardActions>
          <Stack useFlexGap  justifyContent="space-between" sx={{ flexDirection: { xs: "column", md: "row"}, alignItems: { xs: "start", md: "center"}, width: '100%' }}>
            <Stack  spacing={{ xs: 1 }} useFlexGap direction={'row'} alignItems="center">
              <Typography variant="subtitle1" >
                {'Share'}
              </Typography>
              <StyleSocial><FacebookIcon /></StyleSocial>
              <StyleSocial><TwitterIcon /></StyleSocial>
              <StyleSocial><LinkedInIcon /></StyleSocial>
            </Stack>
            <Button size="large" color="secondary" sx={{ padding: '8px 20px', minWidth: '120px', width: { xs: "100%", md: "auto"}, marginTop: { xs: '20px', md: 'unset' } }} variant="contained" >
              Apply
            </Button>
          </Stack>
        </CardActions>
      </StyledCard>
    </Grid>
  );
};


const StyledCard = styled(Card)({
  background: 'rgb(255, 255, 255)',
  borderRadius: '12px',
  flex: '1 0 600px',
  marginLeft: '4px',
  maxWidth: '1024px',
  padding: '10px',
  boxShadow: '0 7px 15px 0 rgba(0, 0, 0, .13), 0 1px 4px 0 rgba(0, 0, 0, .11)',
  marginBottom: '12px'
});

const Tags = styled(Typography)({
  boxShadow: '0 1px 4px 1px rgba(0,0,0,.15)',
  background: 'rgb(240, 242, 245)',
  borderRadius: '20px',
  padding: '3px 10px',
  fontSize: '14px'
});

const Header6 = styled(Typography)({
  fontSize: '15px', fontWeight: '600',
  marginLeft: '6px'
});

const HeaderLight6 = styled(Typography)({
  fontSize: '15px',
  '@media (min-width: 600px)': {
    textAlign: 'end',
    marginRight: '10px'
  },
});
const Header3 = styled(Typography)({
  fontSize: '18px', fontWeight: '600'
});

const StyleBox = styled(Box)({
  padding: '12px',
  border: '1.5px solid #e9ecef',
  borderRadius: '6px'
});

const StyleSocial = styled(Box)({
  height: '40px',
  width: '40px',
  display: 'flex',
  borderRadius: '999px',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#333',
  color: '#fff',
  fontSize: '14px'
});
export default JobDescriptionCard;