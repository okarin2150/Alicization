import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { saveState } from './action/action';
import { connect } from 'react-redux'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 340,
  },
});


class MediaCard extends React.Component{

    //const classes = useStyles();
    //axios = require('axios');
    
    constructor(){
        super()
        /*this.state={
            cards:[],
            loading:true
            



        
        }*/

    }
    componentDidMount (){
        axios.get('https://static.pushe.co/challenge/json')
            .then((response)=>{
                //handle success
                console.log('handle success',response.data)
                this.props.dd(saveState(response.data.cards[0].title,response.data.cards[0].description))
            })
            .catch(function(error){
                //handle error 
                console.log('handle error',error)
            })
    }
  

    render (){
        //let card=this.state.cards[0]
        //if (this.state.loading==false){
            return (
                <div>
                    <img src='https://i.pinimg.com/736x/2f/e5/65/2fe565c90baab74293643623e58e0c30.jpg' width='1000px' />
                    <Card>
                        <CardActionArea>
                            <CardMedia
                            //className={classes.media}
                                image='http://static.pushe.co/challenge/sky.jpg'
                                title='dante'
                                height='140'
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {this.props.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    an artful portrait of dark slayer Vergil son of the dark knight sparda
                                    {this.props.text}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </div>
                    
                
            )    

        //}
        //else  {
            //return null
        //}
        
        

        

    }
    
}
const mapDispatchToProps = (discharge) => ({
    dd: discharge
})
const mapStateToProps = (state) => ({
    title:state.title,
    text:state.text
  
})
export default connect(mapStateToProps,mapDispatchToProps)(MediaCard)
  
