import React, { Component } from "react";
import {
  Image,
  Text,
  Pressable,
  View,
} from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import { AirbnbRating } from "react-native-ratings";

import styles, { width, smallPhoneWidth } from "../styles/hotel.theme";

import { getPriceAfterOffer } from "../utils/priceUtils";
import hotelImages from "../api/Images";

export default class Hotel extends Component {
  /**Component to render hotel information
   * 
   * @props
   * - id: string
   *      hotel unique identifier
   * - name: string
   *      hotel name
   * - rating: integer
   *      integer in [1 .. 5]
   * - price: string
   *      original price / before applying offer
   * - offer: string                               [optional]
   *      string holding an integer followed by a %, (optional: not every hotel has an offer)
   * - imageUri onReservePress: string
   *      uri of hotel image
   * - onReservePress: function
   *      callback function to handle reservation button onPress
   */

  renderPrice = (price, offer) => {
    /** helps in rendering price
     * @params:
     * - price: string
     *      price of 1 night 1 room in the format `$ price`
     * - offer: string
     *      proposed discount in the format `offer%`
     * @returns:
     * - representation of price / or old price and new price: jsx
     **/
    if (offer === undefined) {
      return <Text>{price}</Text>;
    }
    return (
      <View style={styles.sameLine}>
        <Text style={styles.crossedOutPrice}>{price}</Text>
        <Text>    {getPriceAfterOffer(price, offer)}</Text>
      </View>
    );
  };
  
  renderReservationButton = (width) => {
    /** responsivelly renders reservation button,
      small phones are determined by smallPhoneWidth constant
     * @params:
     * - width: integer
     *      screen width
     * @returns:
     * - reservation button: jsx
     **/

    return (
      <Text style={styles.text}>
        Réserver {width >= smallPhoneWidth && "maintenant"}
      </Text>
    )
  }

  render() {
    const { id, name, rating, price, imageUri, offer, onReservePress } = this.props;
    return (
      <View>
        <Grid style={styles.grid}>
          <Row style={styles.row}>
            <Col style={styles.alignCenter}>
              <Image
                style={styles.images}
                // should be changed to source={imageUri} once images are hosted online
                source={hotelImages[imageUri]} 
              />
              {
                // styles.noOffer is the same styles.offer but with fully transparent color
              }
              <View style={offer === undefined ? styles.noOffer : styles.offer}>
                <Text style={{ color: "white" }}>{offer}</Text>
              </View>
            </Col>
            <Col style={styles.alignCenter}>
              <Text> {name} </Text>
              <AirbnbRating
                count={5}
                defaultRating={rating}
                size={20}
                showRating={false}
              />
              {this.renderPrice(price, offer)}
              <Pressable
                style={styles.reserverBtn}
                onPress={() => onReservePress(true, id)}
              >
                {this.renderReservationButton(width)}
              </Pressable>
            </Col>
          </Row>
        </Grid>
      </View>
    );
  }
}
