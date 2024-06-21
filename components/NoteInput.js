import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Button} from 'react-native-paper';

const NoteInput = ({name, handleSubmit, id}) => {
  const [note, setNote] = useState({title: '', content: ''});
  const navigation = useNavigation();
  const notes = useSelector(state => state.posts.posts);

  const handleChange = useCallback((field, value) => {
    setNote(prev => ({...prev, [field]: value}));
  }, []);

  useEffect(() => {
    if (id) {
      const selectedNote = notes.find(item => item.id === id);
      setNote(selectedNote);
    }
  }, []);

  return (
    <>
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
            {name} Note
          </Text>
        </View>
        <View style={{flex: 1, gap: 20, marginTop: 10}}>
          <View style={{marginTop: 15}}>
            <Text style={{color: '#000', fontSize: 14}}>Title</Text>
            <TextInput
              placeholder="title"
              placeholderTextColor={'#908b8b'}
              onChangeText={value => handleChange('title', value)}
              value={note.title}
              style={{
                borderWidth: 1,
                paddingHorizontal: 15,
                marginTop: 10,
                borderRadius: 7,
                color: '#000',
              }}
            />
          </View>
          <View style={{marginTop: 15}}>
            <Text style={{color: '#000', fontSize: 14}}>Description</Text>
            <TextInput
              placeholder="Description"
              multiline
              numberOfLines={5}
              value={note.content}
              textAlignVertical="top"
              placeholderTextColor={'#908b8b'}
              onChangeText={value => handleChange('content', value)}
              style={{
                borderWidth: 1,
                paddingHorizontal: 15,
                marginTop: 10,
                borderRadius: 7,
                color: '#000',
              }}
            />
          </View>
        </View>
        <Button mode="contained" onPress={() => handleSubmit(note)}>
          {name}
        </Button>
      </View>
    </>
  );
};

export default NoteInput;

const styles = StyleSheet.create({});
