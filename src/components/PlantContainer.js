import React from 'react'
import {Container} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const PlantContainer = () => {
    return(
        <div>
            <Container maxWidth="sm">
            <Card>
                <CardActionArea>
                    <CardMedia
                    image="/img/rhaphidophora_tetrasperma.jpeg"
                    title="rhaphidophora tetrasperma"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Mini monstera
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Mini monstera, mini split-leaf, Ginny philodendron... 
                    Rhaphidophora tetrasperma goes by many misleading names and is having a huge moment in the spotlight currently, thanks largely to social media
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
            </Container>
        </div>
    )
}
export default PlantContainer;
  