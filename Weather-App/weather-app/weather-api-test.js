
import { WeatherAPI } from "./weather-api.js";

function testConstructURL(){

  const weatherAPIObj = new WeatherAPI();
  weatherAPIObj.constructURL("Mumbai");
}

async function testInvokeURL(){

  const weatherAPIObj = new WeatherAPI();
  weatherAPIObj.constructURL("Nagpur");
  const responseJSON = await weatherAPIObj.invokeURL();
  // weather-object create
  // responseJSON invokeURL()
  console.log(responseJSON);
}
testInvokeURL();
