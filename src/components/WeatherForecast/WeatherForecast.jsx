import './WeatherForecast.css';


const WeatherForecast =(props) => {
   
    return (
        <section className='weather'>
        <article>
       <h2>{props.day} {props.time}</h2>
          <img src={props.img} alt={props.imgAlt}/>
          <p>{props.conditions}</p>
       </article>
       </section>
       )
      };
  export default WeatherForecast;