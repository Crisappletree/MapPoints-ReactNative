import React from 'react';
import { FlatList, Text, View, Button, StyleSheet, Dimensions } from 'react-native'

export default ({ landMarks, closeModal }) => {
    return (
        <>
            <View style={styles.list}>
                <FlatList 
                    data={landMarks.map(x => x.name)}
                    renderItem={({ item }) => <View style={styles.item}><Text>{item}</Text></View> }
                    keyExtractor={item => item}
                />
            </View>
            <View style={styles.button}>
                <Button 
                    title='Close' 
                    onPress={closeModal} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingBottom: 15,
    },
    list: {
        height: Dimensions.get('window').height - 500,
    },
    item: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        height: 50,
        justifyContent: 'center',
        padding: 15
    }
});