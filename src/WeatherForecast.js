import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import { useState, useEffect } from "react";

export default function WeatherForecast(forecast) {
  return (
    <div className="WeatherForecast grid-container">
      {forecast && (
        <>
          {forecast.info.map((day, index) => {
            return (
              <div key={index}>
                {index < 6 && (
                  //   <div className="col-2">
                  <WeatherForecastDay data={day} />
                  //   </div>
                )}
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

/* export default function WeatherForecast(props) {
    let [loaded, setLoading] = useState(false);
    let [forecast, setForecast] = useState(null);

    // useEffect(() => {
    //     let city = props.city;
    //     let apiKey = "1059t88f30693a8921307c53o34fadfb";
    //     let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
    //     axios.get(apiUrl).then(handleResponse);
    // }, [])

    useEffect(() => {
        setLoading(false);
    }, [props.city]);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoading(true);
        // console.log(forecast);
    }

    if (loaded) {
        return(
            <div className="WeatherForecast">
                <div className="row">
                    {forecast.map((day, index) => {
                        return (
                            <>
                            {index < 6 && 
                                <div className="col-2" key={index}>
                                    <WeatherForecastDay data={day}/>
                                </div>
                            }
                            </>
                        )
                    })}
                </div>
            </div>             
        );
    } else {
        let city = "Lisbon";
        let apiKey = "1059t88f30693a8921307c53o34fadfb";
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
        
        return null;
        
    }
}
*/
