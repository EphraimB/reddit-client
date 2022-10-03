import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MessageIcon from '@mui/icons-material/Message';
import Badge from '@mui/material/Badge';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Stack 
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={4}
        >
          <Stack>
            <IconButton
              size="small"
              aria-label="upvote"
              color="inherit"
            >
              <ArrowDropUpIcon />
            </IconButton>
            <Typography variant="subtitle1" color="text.primary">
              35.8k
            </Typography>
            <IconButton
              size="small"
              aria-label="downvote"
              color="inherit"
            >
              <ArrowDropDownIcon />
            </IconButton>
          </Stack>
          <Typography variant="body2" color="text.secondary">
            7 hours ago by CoolGuy
          </Typography>
          <IconButton
                size="large"
                aria-label="show 0 new notifications"
                color="inherit"
              >
                <Badge badgeContent={0} color="error">
                  <MessageIcon />
                </Badge>
            </IconButton>
          </Stack>
      </CardActions>
    </Card>
  );
}