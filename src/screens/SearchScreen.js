import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async () => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: term,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      console.log(err);
      setErrorMessage("Something went wrong");
    }
  };

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
      <Text>SearchScreen</Text>
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
