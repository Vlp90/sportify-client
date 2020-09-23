import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import apiHandler from "../../api/apiHandler"


class Search extends Component {

  state={
    sports:[],
  };



  componentDidMount=()=>{
    apiHandler
    .getSports()
    .then((apiRes) => {
     this.setState({
       sports: apiRes
     })
    })
    .catch((apiError) => {
      console.log(apiError)
    })
  }


  render() {
    
  return (
    <div >
    <Autocomplete
    
      onChange={(e, v)=>this.props.clbk(e, v)}
      id="combo-box-demo"
      options={this.state.sports}
      getOptionLabel={(option) => option.sport}
      style={{ width: "100%" }}
      renderInput={(params) => <TextField {...params} label="Rechercher sport..." variant="outlined" />}
    />
</div>

  
  );
  }
  }
  export default Search;


// const sports= [
// {title : "Aérobic"},
// {title :"Airsoft"},
// {title :"Athlétisme"},
// {title :"Aviron"},
// {title :"Babyfoot"},
// {title :"Badminton"},
// {title:"Basket-ball"},
// {title:"Baseball"},
// {title:"Biathlon"},
// {title:"Billard"},
// {title:"Bloc"},
// {title:"BMX"},
// {title:"Bodyboard"},
// {title:"Boomerang"},
// {title:"Bowling"},
// {title:"Boxe française"},
// {title:"Boxe anglaise"},
// {title:"Boxe thaï"},
// {title:"Canoë"},
// {title:"Canoë-kayak"},
// {title:"Canyoning"},
// {title:"Capoeira"},
// {title:"Catch"},
// {title:"Course à pied"},
// {title:"Course d'orientation"},
// {title:"Cricket"},
// {title:"Croquet"},
// {title:"Crosse"},
// {title:"Crossfit"},
// {title:"Culturisme"},
// {title:"Curling"},
// {title:"Cyclisme"},
// {title:"Cross"},
// {title:"Danse"},
// {title:"Deltaplane"},
// {title:"Double Dutch"},
// {title:"Équitation"},
// {title:"Escalade"},
// {title:"Escrime"},
// {title:"Football"},
// {title:"Football américain"},
// {title:"Futsal"},
// {title:"Golf"},
// {title:"Grappling"},
// {title:"Gymnastique"},
// {title:"Gymnastique rythmique"},
// {title:"Hakko-Ryu"},
// {title:"Haltérophilie"},
// {title:"Handball"},
// {title:"Hockey"},
// {title:"Hockey sur gazon"},
// {title:"Hockey sur glace"},
// {title:"Horse-ball"},
// {title:"Hurling"},
// {title:"Hapkido"},
// {title:"Iaïdo"},
// {title:"Jeu de paume"},
// {title:"Ju-Jitsu"},
// {title:"Joutes nautiques"},
// {title:"Judo"},
// {title:"Javelot tir sur cible"},
// {title:"Jiu-jitsu brésilien"},
// {title:"Karaté"},
// {title:"Kayak"},
// {title:"Kempo"},
// {title:"Kendo"},
// {title:"Kenjutsu"},
// {title:"Kick-boxing"},
// {title:"Kitesurfing"},
// {title:"Karting"},
// {title:"Kin-ball"},
// {title:"Kobudo"},
// {title:"Kung fu"},
// {title:"Krav maga"},
// {title:"Kyudo"},
// {title:"Lancer de disque"},
// {title:"Lancer de javelot"},
// {title:"Lancer de marteau"},
// {title:"Lancer de poids"},
// {title:"Luge de course"},
// {title:"Lutte"},
// {title:"Musculation"},
// {title:"Marathon"},
// {title:"MMA"},
// {title:"Natation"},
// {title:"Natation synchronisée"},
// {title:"Nautisme"},
// {title:"Netball"},
// {title:"Paddle"},
// {title:"Padel"},
// {title:"Paintball"},
// {title:"Parkour"},
// {title:"Patinage"},
// {title:"Patinage artistique"},
// {title:"Patinage de vitesse"},
// {title:"Patinage synchronisé"},
// {title:"Pêche sportive"},
// {title:"Pelote basque"},
// {title:"Pétanque"},
// {title:"Pilates"},
// {title:"Ping-Pong"},
// {title:"Planche à voile"},
// {title:"Plongée en apnée"},
// {title:"Plongée"},
// {title:"Plongeon"},
// {title:"Plumfoot"},
// {title:"Polo"},
// {title:"Qi gong"},
// {title:"Quidditch"},
// {title:"Qwan Ki Do"},
// {title:"Rafting"},
// {title:"Ringuette"},
// {title:"Rink hockey"},
// {title:"Roller"},
// {title:"Roller in line hockey"},
// {title:"Rugby"},
// {title:"Roller derby"},
// {title:"Sambo"},
// {title:"Saut à la perche"},
// {title:"Saut en hauteur"},
// {title:"Saut en longueur"},
// {title:"Shinty"},
// {title:"Skateboard"},
// {title:"Skeleton"},
// {title:"Ski"},
// {title:"Ski alpin"},
// {title:"Ski de fond"},
// {title:"Ski nordique"},
// {title:"Ski nautique"},
// {title:"Slamball"},
// {title:"Snowboard"},
// {title:"Softball"},
// {title:"Spéléologie"},
// {title:"Squash"},
// {title:"Step"},
// {title:"Sumo"},
// {title:"Surf"},
// {title:"Taekwondo"},
// {title:"Tae Bo"},
// {title:"Tai-chi-chuan"},
// {title:"Taihojutsu"},
// {title:"Tchoukball"},
// {title:"Tennis"},
// {title:"Tennis léger"},
// {title:"Twirling"},
// {title:"Tennis de table"},
// {title:"Tir à l'arc"},
// {title:"Triathlon"},
// {title:"Triple saut"},
// {title:"Tango"},
// {title:"Tricking"},
// {title:"Taïso"},
// {title:"Trottinette freestyle"},
// {title:"ULM"},
// {title:"Ultimate"},
// {title:"Varappe"},
// {title:"Voile"},
// {title:"Volley-ball"},
// {title:"Voltige en cercle"},
// {title:"VTT"},
// {title:"Wakeboard"},
// {title:"Water-polo"},
// {title:"Wing chun"},
// {title:"Waveboard"},
// {title:"Yoga"},
// {title:"Yoseikan Budo"},
// {title:"Zen Hakko Kaï"},
// {title:"Zumba"},
// ];



