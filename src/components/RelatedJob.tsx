import React from 'react';
import { useQuery } from 'react-query';

import { Card, CircularProgress, Grid, Typography, Divider, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

import { fetchJobs } from '../core/services/api';
import { Job } from '../core/Interfece/jobs';

interface RelatedJobProps {
    uuid: string;
}

const RelatedJob: React.FC<RelatedJobProps> = ({ uuid }) => {
  
    const { data, isLoading, error } = useQuery(['jobs'], () => fetchJobs(1, '', uuid));

    if (isLoading) {
        return <StyledCenterBox><CircularProgress /></StyledCenterBox>;
    }

    if (error) {
        return <StyledCenterBox><Typography variant="h6" component="h3">Error:</Typography></StyledCenterBox>;
    }

    return (
        <StyleGrid item xs={12} md={3} sx={{ position: 'relative' }}>
            {data.results.jobs.map((job: Job) => (
                <StyledCard><Header6>
                    {job.title}
                </Header6>
                    {job.location.city || job.location.country && <Typography gutterBottom variant="subtitle2" >
                        {job.location.city}, {job.location.country}
                    </Typography >}
                    <Box mb={1} />
                    {job.skills.length != 0 && <Divider />}
                    <Box mb={1} />
                    {job.skills.length != 0 && <StyleText gutterBottom variant="subtitle2" >
                        {job.skills.join(',')}
                    </StyleText>}
                </StyledCard>
            ))}
        </StyleGrid>
    );
};

const StyleGrid = styled(Grid)({
    left: '0',
    overflow: 'scroll',
    height: '100vh',
    overflowY: 'auto',
    position: 'sticky',
    top: '0',
    padding: '0 10px',
    marginTop: '18px',
    '&::-webkit-scrollbar': {
        width: '4px'
    },
    '&::-webkit-scrollbar-track': {
        '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#0026af',
        outline: '1px solid slategrey',
        borderRadius: '4px'
    },

    marginBottom: '12px',
    '@media (max-width: 899px)': {
        position: 'relative',
        overflow: 'visible',
        height: '100%',
        order: 2
    },
});
const StyledCard = styled(Card)({
    background: 'rgb(255, 255, 255)',
    borderRadius: '12px',
    flex: '1 0 600px',
    marginLeft: '4px',
    maxWidth: '1024px',
    padding: '10px',
    boxShadow: '0 7px 15px 0 rgba(0, 0, 0, .13), 0 1px 4px 0 rgba(0, 0, 0, .11)',
    marginBottom: '10px'
});

const Header6 = styled(Typography)({
    fontSize: '15px', fontWeight: '600', textTransform: 'capitalize', overflowWrap: 'break-word'
});

const StyleText = styled(Typography)({
    overflowWrap: 'break-word'
});

const StyledCenterBox = styled(Box)({
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});
export default RelatedJob;
