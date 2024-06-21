import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const ViewNoteScreen = ({id, route}) => {
  const navigation = useNavigation();
  const notes = useSelector(state => state.posts.posts);
  const [note, setNote] = useState({title: '', content: ''});
  const {id: currentId} = route.params;
  console.log('id->', currentId);

  useEffect(() => {
    const selectedNote = notes.find(note => note.id === currentId);
    setNote(selectedNote);
  }, []);
  return (
    <View style={{flex: 1, padding: 15}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-sharp" color="black" size={20} />
        </TouchableOpacity>
        <Text
          style={{
            color: '#000',
            fontSize: 28,
            fontWeight: '700',
            marginLeft: 15,
          }}>
          Preview Note
        </Text>
      </View>
      <View style={styles.previewContainer}>
        <Text style={{color: '#000', fontSize: 24, fontWeight: '500'}}>
          {note.title}
        </Text>
        <Text
          style={{color: '#000', fontSize: 15, lineHeight: 18, marginTop: 15}}>
          {note.content}
        </Text>
      </View>
    </View>
  );
};

export default ViewNoteScreen;

const styles = StyleSheet.create({
  previewContainer: {
    marginVertical: '20%',
  },
});
