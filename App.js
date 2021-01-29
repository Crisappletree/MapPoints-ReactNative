import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Map, Modal, Panel, Input, List } from './components'

export default function App() {
  const [landMark, setLandMark] = useState([])
  const [landMarkTemp, setLandMarkTemp] = useState({})
  const [landMarkName, setLandMarkName] = useState('')
  const [visibilityFilter, setVisibilityFilter] = useState('new_landmark') // new_landmark, all_landmarks
  const [modalVisibility, setModalVisibility] = useState(false)
  const [landMarksFilter, setLandMarksFilter] = useState(true)

  const toggleLandMarksFilter = () => setLandMarksFilter(!landMarksFilter)

  const handleLongPress = ({ nativeEvent }) => {
    setLandMarkTemp(nativeEvent.coordinate)
    setModalVisibility(true)
    setVisibilityFilter('new_landmark')
  }

  const handleChangeText = text => {
    setLandMarkName(text)
  }

  const handleSubmit = () => {
    const newLandMark = { coordinate: landMarkTemp, name: landMarkName };
    setLandMark(landMark.concat(newLandMark))
    setModalVisibility(false)
    setLandMarkName('')
  }

  const handleList = () => {
    setVisibilityFilter('all_landmarks')
    setModalVisibility(true)
  }

  return (
    <View style={styles.container}>
      <Map onLongPress = {handleLongPress} landMarks={landMark} landMarksFilter={landMarksFilter} />
      <Panel onPressLeft={handleList} textLeft={'List'} toggleLandMarksFilter={toggleLandMarksFilter} />
      <Modal visibility={modalVisibility}>
        {visibilityFilter == 'new_landmark' 
        ? 
        <View style={styles.form}>
        <Input title="Name" placeholder="Landmark name" onChangeText={handleChangeText} />
        <Button title="Submit" onPress={handleSubmit} />
        </View>
        : <List landMarks={landMark} closeModal={() => setModalVisibility(false)} />
        }
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    padding: 15,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
