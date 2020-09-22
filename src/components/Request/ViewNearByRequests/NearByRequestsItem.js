import React from 'react';
import { Image, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Star from 'react-native-vector-icons/Foundation';
import normalize from 'react-native-normalize';

const NearByRequestsItem = ({ request, openModal }) => {
    const rate=request.clientRate
    const rated=(Math.round(rate * 100) / 100).toFixed(2);
    return (
        <View style={styles.container}>
              <View style={styles.rateContainer}>
                                   <Text style={styles.ratenumberStyle}> {rated} </Text>
                                   <Star name="star" style={styles.starStyle} />
                                </View>
            <View style={styles.topHalf}>
                
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                    <Image
                        source={{ uri: request.clientPicture }}

                        style={styles.clientImage}
                    />
                    <Text style={styles.clientName}>
                        {request.clientName}
                    </Text>
                  
                </View>
               
                <TouchableOpacity
                    style={styles.makeOfferButton}
                    onPress={() => {
                        openModal();
                    }}
                >
                    <Text style={styles.makeOfferText}>
                        Make an offer
                </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottomHalf}>

                <Text style={styles.description}>
                    <Text style={{ fontFamily: 'Montserrat_Medium', color: '#687486' }}>

                        {"Problem's description: "}
                    </Text>
                    {request.description}  
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        shadowColor: "#C2C9D1",
        shadowOffset: {
            width: 4,
            height: 5,
        },
        shadowOpacity: 0.8,
        shadowRadius: 4.00,
        elevation: 10,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: 'rgba(194,201,209,0.4)',
        backgroundColor: 'white',
        paddingHorizontal: '8%',
        paddingVertical: '6%',
        //padding:'8%'
    },
    topHalf: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1
    },
    bottomHalf: {
        paddingTop: '2%',
        paddingLeft: '2%',
        flex: 9
    },
    clientImage: {
        borderRadius: 100,
        height: 55,
        width: 53,
        marginRight: '3%'
    },
    clientName: {
        fontSize: 15,
        fontFamily: 'Montserrat_Bold'
    },
    description: {
        fontSize: 12,
        fontFamily: 'Montserrat',
        color: '#B1B7C0'
    },
    makeOfferButton: {
        backgroundColor: '#132641',
        borderRadius: 50,
        padding: '3.5%'

    },
    makeOfferText: {
        color: 'white',
        fontSize: 11,
        fontFamily: 'Montserrat_SemiBold'
    },
    rateContainer:{
        flexDirection:'row',
        left:normalize(218),
        position:'absolute',
        top:12
    },
    starStyle:{
        color:'#132641',
        fontSize:17,
        marginLeft:5,
        top:-1
    },
    ratenumberStyle:{
        fontFamily: "Montserrat_Medium",
        color:'#132641',
        fontSize:13
    }
});

export default NearByRequestsItem