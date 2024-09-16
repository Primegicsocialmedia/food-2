import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchBar from "../components/SearchBar";
import { useState } from "react";

const SearchScreen = () => {
  const [term, setTerm] = useState("");

  return (
    <View>
      <SearchBar 
      term={term} 
      onTermChange={(newTerm) => setTerm(newTerm)} 
      onTermSubmit={() => console.log('term was sumitted')}
      />
      <Text>SearchScreen</Text>
      <Text>{term}</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
