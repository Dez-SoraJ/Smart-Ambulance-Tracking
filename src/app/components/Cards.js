import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia, { cardMediaClasses } from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useRouter } from 'next/navigation';

const cardStyle = {
  maxWidth: 345,
  marginBottom: '1rem', // Add margin bottom to create space between rows
  flex: '1 1 calc(33.333% - 2rem)', // Adjust flex basis for responsiveness
  marginRight: '1rem',
  marginLeft: '1rem',
  marginTop:'3cm',
};
const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '2rem',
    justifyContent: 'center',
    // overflowX: 'hidden', // Prevent horizontal scrolling
    // overflowY:'auto',
  };
export default function ActionAreaCard() {
  return (
    <div style={containerStyle}>
      <Card sx={cardStyle}>
        <CardActionArea>
          <CardMedia
            component="img"
            style={{ height: 140, width: '100%', objectFit: 'cover' }} // Set fixed height for cards
            image="https://5.imimg.com/data5/NW/HW/MY-8229651/advanced-life-support-ambulance-1000x1000.jpg"
            alt="Advanced Life Support Ambulance"
          />
          <CardContent>
            <Typography  gutterBottom variant="h5" component="div">
              Advanced Life Support Ambulance
            </Typography>
            <Typography sx={{fontSize:'1rem'}} variant="body2" color="text.secondary">
              Efficiently dispatch advanced life support teams to critical emergencies, ensuring swift and expert medical care.
            </Typography>
          </CardContent>
          <a href={"/book"} className="bg-orange-600 flex items-center justify-center" style={{ color: 'white', padding: '10px 20px', width: '60%', borderRadius: '5px',margin:'auto',marginBottom:'1rem'}}>Book Now</a>
        </CardActionArea>
      </Card>

      <Card sx={cardStyle}>
        <CardActionArea>
          <CardMedia
            component="img"
            style={{ height: 140, width: '100%', objectFit: 'cover' }}
            image="https://5.imimg.com/data5/AH/WO/MY-8229651/img-20180923-wa0003-1000x1000.jpg"
            alt="Basic Life Support Ambulance"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Basic Life Support Ambulance
            </Typography>
            <Typography sx={{fontSize:'1rem'}} variant="body2" color="text.secondary">
            Deploy basic life support units for timely intervention in emergencies, 
            delivering essential medical aid when every second counts.
            </Typography>
          </CardContent>
          <a href={"/book"} className="bg-orange-600 flex items-center justify-center" style={{ color: 'white', padding: '10px 20px', width: '60%', borderRadius: '5px',margin:'auto',marginBottom:'1rem'}}>Book Now</a>
        </CardActionArea>
      </Card>
      
      <Card sx={cardStyle}>
        <CardActionArea>
          <CardMedia
            component="img"
            style={{ height: 140, width: '100%', objectFit: 'cover' }}
            image="https://imgs.search.brave.com/R-Qyput5slIiyC76ppQd_J64HZk5mJHBlP2gGuDfKEA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQw/OTY5ODgzNS9waG90/by9hbWJ1bGFuY2Ut/c3RhZmYtYW5kLWRv/Y3Rvci1oZWxwLXRv/LXRyYW5zZmVyLXNl/bmlvci1mZW1hbGUt/cGF0aWVudC1mcm9t/LWFtYnVsYW5jZS1j/YXIuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPS12SGlVb1dI/LTg0TlJzV3JjaHB2/Z2FkcldSYTExUzZH/NWNfa1ZDT2t0cWM9"
            alt="Patient Transfer Ambulance"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Patient Transfer Ambulance
            </Typography>
            <Typography sx={{fontSize:'1rem'}} variant="body2" color="text.secondary">
            Enable prompt and safe patient transport, 
            ensuring seamless transition between medical facilities for optimal care continuity.
            </Typography>
          </CardContent>
          <a href={"/book"} className="bg-orange-600 flex items-center justify-center" style={{ color: 'white', padding: '10px 20px', width: '60%', borderRadius: '5px',margin:'auto',marginBottom:'1rem'}}>Book Now</a>
        </CardActionArea>
      </Card>
      <style>
        {`
          @media (max-width: 480px) {
            .MuiCard-root {
              flex-basis: calc(100% - 2rem);
            }
          }
        `}
      </style>
    </div>
  );
}


    

