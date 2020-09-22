import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList, Dimensions } from 'react-native';
import HistoryCard from '../components/Support&History/historyCard'
import MainHeader from '../components/global/MainHeader'
import SubHeaderText from '../components/global/SubHeaderText'
import { viewHistory } from '../utils/History'
import HeaderButton from '../components/global/HeaderButton'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

const History = () => {

  const [history, setHistory] = useState([]);
 
  const getHistory = async () => {

  
    await viewHistory().then((result) => {
      setHistory(result);
     
    });
  };

  useEffect(() => {
    getHistory();
  }, []);

  return (

    <View style={styles.container}>
      <MainHeader headerText='History' name='calendar-o' />
      <SubHeaderText SubHeaderText='Your History' />
      {history.length == 0 ? <Text style={styles.nodataText}>No previous requests till now</Text> :
        <FlatList
          data={history}
          keyExtractor={(item, index) => 'key' + index}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <View >
                <HistoryCard item={item} refresh={()=>getHistory()}/>
              </View>
            )
          }}
        />
      }
    </View >
  );


}
History.navigationOptions = (props) => {
  return {
    title: '',
    headerTransparent: true,
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}   >
          <Item title="menu" iconName='menu' onPress={() => { props.navigation.toggleDrawer() }} />
        </HeaderButtons>
      )
    },

  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    flex: 1
  },
  nodataText: {
    fontSize: 16,
    fontFamily: "Montserrat_SemiBold",
    color: "#132641",
    alignSelf: 'center',
    marginTop: "5%",
  }
})

export default History;




