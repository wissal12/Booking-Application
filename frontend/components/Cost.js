import React from "react";
import {TextInput, Text} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Divider } from "react-native-elements";

import styles from "../styles/cost.theme";

const Cost = ({numberOfRooms, numberOfNights, onRoomsChange, onNightsChange, totalPrice}) => {
  /**Component to render hotel cost related information given user input
   * 
   * @props
   * - numberOfRooms: integer
   *      number of rooms to book
   * - numberOfNights: integer
   *      number of nights to book
   * - onRoomsChange: function
   *      callback function to update numberOfRooms value
   * - onNightsChange: function
   *      callback function to update numberOfNights value
   */
  return (
    <Grid style={styles.grid}>
      <Row size={39}>
        <Col size={75}>
          <Text>{`Nombre des chambres\nà réserver:`}</Text>
        </Col>
        <Col size={25}>
          <TextInput
            value={numberOfRooms.toString()}
            onChangeText={onRoomsChange}
            style={styles.input}
          />
        </Col>
      </Row>
      <Row size={39}>
        <Col size={75}>
          <Text>Nombre des nuits</Text>
        </Col>
        <Col size={25}>
          <TextInput
            value={numberOfNights.toString()}
            onChangeText={onNightsChange}
            style={styles.input}
          />
        </Col>
      </Row>
      <Row size={2}>
        <Col>
          <Divider orientation="vertical" width={20} />
        </Col>
      </Row>
      <Row size={20}>
        <Col size={75}>
          <Text>Prix total</Text>
        </Col>
        <Col size={25}>
          <Text>{totalPrice}</Text>
        </Col>
      </Row>
    </Grid>
  );
};

export default Cost;
