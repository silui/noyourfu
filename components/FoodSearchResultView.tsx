import React, { useEffect, useState } from 'react';

import { FlatList, StyleSheet, View, Text  } from 'react-native'
import { ListItem, Avatar } from '@rneui/themed';
import Entypo from '@expo/vector-icons/Entypo';
import { router } from 'expo-router';


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });



  const renderItemHelper = ({ item }) => (
    <ListItem onPress={()=> router.push('/food/'+item.uid)}>
        <Avatar size="large" source={item.image_link}/>
        <ListItem.Content>
            <ListItem.Title style={{fontSize:25}}>{item.food_name}</ListItem.Title>
            <ListItem.Subtitle><Entypo name="location" size={20} color="#f3ce45" />{item.restaurant_name}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron /> 
    </ListItem>
)


const FoodSearchResultView = ({value, inputDataSet}) => {
    
    const [filteredData, setFilteredData] = useState(value);

    useEffect(() => {
    const filtered = inputDataSet.filter(item => 
        item.food_name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
    }, [value]);
    return (
        <View style={styles.container}>
            <FlatList data={filteredData} renderItem={renderItemHelper}/>
        </View>
    );
}

export default FoodSearchResultView;