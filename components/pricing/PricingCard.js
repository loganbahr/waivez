import * as React from 'react';
import {styled} from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {red} from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const ExpandMore = styled((props) => {
    const {expand, ...other} = props;
    return <IconButton {...other} />;
})(({theme, expand}) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function WaivezPricingCard(props) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{
            maxWidth: 400,
            minWidth: 400,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#7F00FF',
            borderRadius: '40px 40px 40px 40px'
        }}>
            <CardHeader
                title={props.title}
                subheader={props.subheader}
                sx={{
                    textAlign: 'center',
                    color: 'white'
                }}
            >
            </CardHeader>
            <CardContent id='card-content'>
                <Typography>
                    {props.cardContent}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon/>
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography sx={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '1.3rem',
                        lineHeight: '2.5rem',
                        textAlign: 'center',
                        color: 'white'
                    }}>
                        {props.cardDetails}
                    </Typography>

                </CardContent>
            </Collapse>
        </Card>
    );
}
