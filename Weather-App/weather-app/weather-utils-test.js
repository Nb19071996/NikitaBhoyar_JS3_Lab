
import { WeatherAPI } from "./weather-api.js";
import { WeatherUtils } from "./weather-utils.js";

async function testResponseConversion(){

  const weatherAPIObj = new WeatherAPI();
  weatherAPIObj.constructURL("Nagpur");
  const responseJSON = await weatherAPIObj.invokeURL();

  const responseObj = WeatherUtils.convertResponse(responseJSON);
  console.log(responseObj);

}

testResponseConversion();