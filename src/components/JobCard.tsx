import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Card, CardContent, Typography, Button, List, ListItem, Divider, ListItemText, Stack } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { styled } from '@mui/material/styles';

import { JobCardProps } from '../core/Interfece/jobs';

const JobCard: React.FC<JobCardProps> = ({ job }) => {
    const navigate = useNavigate();
    
    return (
        <StyledCard>
            <CardContent>
                <Stack spacing={{ xs: 1 }} useFlexGap direction={'row'} alignItems="center">
                    <Typography sx={{ fontSize: '17px', fontWeight: '600' }}  variant="h6" component="h3" noWrap>
                        {job.title}
                    </Typography>
                    {job.is_top && <StarIcon color="action" /> }
                </Stack>
                <List>
                    {job.location.country ? <ListItem disablePadding>
                        <StyledListItemText primary={job.location.country} />
                    </ListItem> : <StyledListItemText primary='N.A' />}
                    <Divider />
                    {job.career_level.length != 0 ? <ListItem disablePadding>
                        <StyledListItemText primary={job.career_level.join(',')} />
                    </ListItem> : <StyledListItemText primary='N.A' />}
                    <Divider />
                    {job.skills.length != 0 ? <ListItem disablePadding>
                        <StyledListItemText primary={job.skills.join(',')} />
                    </ListItem> : <StyledListItemText primary='N.A' />}
                </List>
            </CardContent>
            <StyledButton size="small" color="primary" onClick={() => navigate(`/job/${job.uri}`)}>
                View
            </StyledButton>
        </StyledCard>
    );
};


const StyledButton = styled(Button)({
    border: '1px solid',
    borderRadius: '6px',
    color: 'blue',
    padding: '6px 20px',
    float: 'right',
    margin: '16px',
    '&:hover': {
        backgroundColor: '#0026af',
        color: '#fff',
    },
});

const StyledListItemText = styled(ListItemText)({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: '70%'
});

const StyledCard = styled(Card)({
    boxShadow: '0 7px 15px 0 rgba(0, 0, 0, .13), 0 1px 4px 0 rgba(0, 0, 0, .11)',
    borderRadius: '12px'
});

export default JobCard;