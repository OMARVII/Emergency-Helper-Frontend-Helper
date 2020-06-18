import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import { AntDesign } from '@expo/vector-icons';
const MakeOfferModal = ({ modalVisibility, close, clientName, requestID }) => {
    if (!modalVisibility)
        return null;
    const [loading, setLoading] = useState(false);
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [description, setDescription] = useState('');

    const [priceError, setPriceError] = useState(' ');
    const [descriptionError, setDescriptionError] = useState(' ');

    const validData = () => {
        let valid = true;
        if (from.length == 0 || to.length == 0 || isNaN(from) || isNaN(to)) {
            valid = false;
            setPriceError("Please enter valid price value")
        }
        else if (Number(from) > Number(to)) {
            valid = false;
            setPriceError("Please enter valid range")
        }
        else {
            setPriceError(" ")
        }
        if (description.trim().length == 0) {
            valid = false;
            setDescriptionError("Please enter Description")

        }
        else {
            setDescriptionError("")
        }
        return valid
    }
    const handleSubmit = async () => {
        setLoading(true);
        if (validData()) {
            //await submit()

        }
        setLoading(false);
    }
    return <Modal
        style={styles.modal}
        isVisible={modalVisibility}
        animationIn="fadeIn"
    >
        <View style={styles.container}>
            <View style={styles.closeRow}>
                <TouchableOpacity
                    onPress={() => { close() }}
                >
                    <AntDesign
                        name="close"
                        size={20}
                        color="black"
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <View style={styles.titleContainer}>

                    <Text style={styles.titleText}>Make an Offer for </Text>
                    <Text style={styles.clientName}>{clientName} </Text>
                </View>
                <View style={styles.priceRow}>
                    <TextInput
                        placeholder="From"
                        style={styles.priceInput}
                        keyboardType="numeric"
                        value={from}
                        onChangeText={(text) => { setFrom(text) }}
                    />
                    <Text style={styles.currancyStyle}>
                        ~
                    </Text>
                    <TextInput
                        placeholder="To"
                        style={styles.priceInput}
                        keyboardType="numeric"
                        value={to}
                        onChangeText={(text) => { setTo(text) }}
                    />
                    <Text style={styles.currancyStyle}>
                        EGP
                    </Text>
                </View>
                <Text adjustsFontSizeToFit style={styles.errorText}>{priceError}</Text>
                <View style={styles.descriptionRow}>
                    <TextInput
                        placeholder="Type your offer here"
                        style={styles.descriptionInput}
                        multiline
                        numberOfLines={4}
                        value={description}
                        onChangeText={(text) => { setDescription(text) }}
                    />
                    <Text style={styles.errorText}>{descriptionError}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Modal>
}
const styles = StyleSheet.create({
    modal: {
        flex: 1
    },
    container: {
        backgroundColor: 'white',
        maxHeight: Dimensions.get('screen').height * 0.45,
        flex: 1,
        borderRadius: 45,

        overflow: 'hidden',
        alignItems: 'center'
    },
    closeRow: {
        alignSelf: 'flex-end',
        flex: 1,
        marginRight: '7%',
        justifyContent: 'center',
    },
    body: {
        paddingHorizontal: '15%',
        alignItems: 'center',
        width: '100%',
        flex: 9,
    },
    titleContainer: {
        alignItems: 'center',
        flex: 2
    },
    titleText: {
        color: '#132641',
        fontSize: 20,
        fontFamily: 'Montserrat_SemiBold'
    },
    clientName: {
        color: '#132641',
        fontSize: 15,
        fontFamily: 'Montserrat'
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        flex: 1,
    },
    priceInput: {
        borderWidth: 0.2,
        borderColor: '#707070',
        borderRadius: 12,
        paddingVertical: '3%',
        paddingHorizontal: '5%',
        textAlign: 'center',
        textAlignVertical: 'center',
        width: '35%',
        fontSize: 12,
    },
    currancyStyle: {
        color: '#78849E',
        fontSize: 12,
        fontFamily: 'Montserrat_SemiBold',
    },
    descriptionRow: {
        width: '100%',
        flex: 4,
        marginTop: '5%',
        alignItems: 'center'
    },
    descriptionInput: {
        borderWidth: 0.2,
        borderColor: '#707070',
        borderRadius: 12,
        paddingVertical: Dimensions.get('screen').height * 0.01,
        paddingHorizontal: Dimensions.get('screen').width * 0.03,
        textAlign: 'left',
        textAlignVertical: 'top',
        width: '100%',
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 3,

    },
    button: {
        backgroundColor: '#132641',
        paddingVertical: Dimensions.get('screen').height * 0.01,
        paddingHorizontal: Dimensions.get('screen').width * 0.05,
        borderRadius: 100,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Montserrat',
        
    },
    errorText: {
        color: 'red',
        fontSize: 14 * (Dimensions.get('screen').width / 375),
        fontFamily: 'Montserrat'
    }
});

export default MakeOfferModal;
