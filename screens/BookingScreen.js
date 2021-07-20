import React, { Component } from "react";
import {
  ScrollView,
  Modal,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

import styles from "../styles/bookingScreen.theme";

import Hotel from "../components/Hotel";
import Cost from "../components/Cost";

import { getPriceAfterOffer, isValidBookingNumber } from "../utils/priceUtils";
import Api from "../api/api";

export default class BookingScreen extends Component {
  /**Component to render hotels booking screen
   * 
   * @state
   * - hotels: array of objects
   *      holds information about all hotels
   * - selectedHotelId: string
   *      id of the currently selected hotel to book
   * - numberOfRooms: integer
   *      holds state for Cost component
   * - numberOfNights: integer
   *      holds state for Cost component
   * - modalVisible: boolean
   *      whether or not modal is visible
   */

   // initial state to be used in state definition and reset
  initialState = {
    modalVisible: false,
    numberOfRooms: 1,
    numberOfNights: 1,
    selectedHotelId: null,
  };

  constructor(props) {
    super(props)
    const hotels = Api.getHotels()    // this would be async and would require an await in the future
    this.initialState['hotels'] = hotels
    // store a copy in state to preserve initial state
    this.state = {...this.initialState}
  }

  _resetState = () => {
    // resets state to initial state
    this.setState({...this.initialState})
  }

  setModalVisible = (visible, hotelId) => {
    /** shows and hides modal
     * @params:
     * - visible: boolean
     *      true => show, false => hide
     * - hotelId: string
     *      hotel that triggered the modal show
     **/
    if (visible) {
      this.setState({ modalVisible: true, selectedHotelId: hotelId });
    } else {
      this._resetState()
    }
  };

  onRoomsChange = (n) => {
    // updates numberOfRooms with valid user input, no update if input is invalid

    // empty strings are accepted in order for the user to be able to delete
     // and make new input
    if (n === "" || isValidBookingNumber(parseFloat(n))){
      this.setState({numberOfRooms: n})
    }
  }

  onNightsChange = (n) => {
    // updates numberOfNights with valid user input, no update if input is invalid
    if (n === "" || isValidBookingNumber(parseFloat(n)))
      this.setState({numberOfNights: n})
  }

  render() {
    const { hotels, modalVisible, numberOfRooms, numberOfNights, selectedHotelId } =
      this.state;
    const selectedHotel = hotels.filter(
      ({ id }) => id === selectedHotelId
    )[0];
    const totalPrice = modalVisible
      ? getPriceAfterOffer(
          selectedHotel.HotelPrice,
          selectedHotel.Offer,
          numberOfNights,
          numberOfRooms
        )
      : "";
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Modal
          animationType="slide"
          hardwareAccelerated={true}
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            this.setModalVisible(false);
          }}
        >
          <TouchableOpacity
            onPressOut={() => this.setModalVisible(false)}
            style={styles.centeredView}
          >
            <View style={styles.modalView}>
              <TouchableWithoutFeedback>
                <Cost
                  numberOfRooms={numberOfRooms}
                  numberOfNights={numberOfNights}
                  onRoomsChange={this.onRoomsChange}
                  onNightsChange={this.onNightsChange}
                  totalPrice={totalPrice}
                />
              </TouchableWithoutFeedback>
            </View>
          </TouchableOpacity>
        </Modal>
        <View>
          {hotels.map((hotel, index) => (
            <Hotel
              key={index}
              id={hotel.id}
              name={hotel.HotelName}
              rating={hotel.rating}
              price={hotel.HotelPrice}
              imageUri={hotel.HotelImg}
              offer={hotel.Offer}
              onReservePress={this.setModalVisible}
            />
          ))}
        </View>
      </ScrollView>
    );
  }
}
