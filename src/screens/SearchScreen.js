import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults()

 const filterResultsByPrice = (price) => {
    return results.filter(result => {
        return result.price === price;
    })
 }
 

  return (
    <View style={{marginLeft: 10}}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ResultsList results={filterResultsByPrice('$')} title='Cost Effective'/>
      <ResultsList results={filterResultsByPrice('$$')} title='Bit Pricier'/>
      <ResultsList results={filterResultsByPrice('$$$')} title='Big Spender'/>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
