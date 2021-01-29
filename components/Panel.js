import React from 'react';
import { StyleSheet, Button, View, Dimensions} from 'react-native'

export default ({ onPressLeft, textLeft, toggleLandMarksFilter }) => {
    return (
        <View style={styles.panel}>
            <Button onPress={onPressLeft} title={textLeft} />
            <Button title="show/hide" onPress={toggleLandMarksFilter} />
        </View>
    )
}

const styles = StyleSheet.create({
    panel: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})