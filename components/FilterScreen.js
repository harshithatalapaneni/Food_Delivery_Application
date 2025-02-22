import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Slider from '@react-native-community/slider';

const FilterScreen = ({ onPriceRangeChange }) => {
  const [priceRange, setPriceRange] = useState([0, 400]);

  const handlePriceRangeChange = (min, max) => {
    setPriceRange([min, max]);
    onPriceRangeChange([min, max]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Price Range</Text>
      <View style={styles.sliderContainer}>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={500}
          minimumTrackTintColor="#fd5c63"
          maximumTrackTintColor="#e0e0e0"
          thumbTintColor="#fd5c63"
          step={10}
          value={priceRange[0]}
          onValueChange={(value) => handlePriceRangeChange(value, priceRange[1])}
        />
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={500}
          minimumTrackTintColor="#fd5c63"
          maximumTrackTintColor="#e0e0e0"
          thumbTintColor="#fd5c63"
          step={10}
          value={priceRange[1]}
          onValueChange={(value) => handlePriceRangeChange(priceRange[0], value)}
        />
      </View>
      <View style={styles.priceRangeContainer}>
        <Text style={styles.priceRange}>₹{priceRange[0]}</Text>
        <Text style={styles.priceRange}>₹{priceRange[1]}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  sliderContainer: {
    marginVertical: 10,
  },
  slider: {
    height: 40,
  },
  priceRangeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  priceRange: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default FilterScreen;