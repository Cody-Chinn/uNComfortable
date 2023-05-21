import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardHeader } from '@mui/material';

function EpisodeCard({title, description}) {
    return (
        <Card style={{'marginTop': '1em', 'marginBottom': '1em'}}>
            <CardHeader title={title}></CardHeader>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                   {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Play</Button>
            </CardActions>
        </Card>
    )
}

export default EpisodeCard;