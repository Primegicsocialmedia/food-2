import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = ({navigation}) => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
     
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
          navigation={navigation}
        />
        <ResultsList results={filterResultsByPrice("$$")} title="Bit Pricier"  navigation={navigation}/>
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title="Big Spender"
          navigation={navigation}
        />
      </ScrollView>
    </>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
