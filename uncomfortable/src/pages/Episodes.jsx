import * as React from 'react';
import { Typography, Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import EpisodeCard from '../components/EpisodeCard.jsx';
import testEpisodeList from '../Test Data/testEpisodeList';
import testFilterList from '../Test Data/testFilterList';

function Episodes({isDesktopResolution}) {
    return (
        <div>
            {/** Episode list */}
            <Grid container spacing={2} display="flex" justifyContent="center">
                {(isDesktopResolution &&
                    <Grid xs={2} md={2}>
                        <Typography variant='h6' style={{ 'margin-top': '1em', 'margin-bottom': '1em' }}>Topics</Typography>
                        {testFilterList['tags'].map((tag) => (
                            <Card style={{ 'margin-top': '1em', 'margin-bottom': '1em' }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 14 }}>
                                        {tag}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))
                        }
                    </Grid>
                )}

                <Grid xs={8} md={6}>
                    {testEpisodeList.map((episode) => (
                        <EpisodeCard
                            title={"Episode " + episode.number + ": " + episode.title}
                            description={episode.description}>
                        </EpisodeCard>
                    ))}
                </Grid>
            </Grid>
        </div>
    )
}

export default Episodes;