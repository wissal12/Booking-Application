import dummyData from "./dummyData"

/*
  defines and exports all functions that need external API calls

  dev: uses dummyData for dev purposes
*/

export default {
  getHotels: () => dummyData.hotels,
}