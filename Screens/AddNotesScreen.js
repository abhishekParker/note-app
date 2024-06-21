import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native';
import {Button, Snackbar} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {addPost} from '../store/postReducer';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AddNotesScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [visible, setVisible] = useState(false);

  const onToggleSnackBar = message => setVisible(true);

  const onDismissSnackBar = () => setVisible(false);
  const handleAdd = () => {
    dispatch(addPost({id: Date.now(), title, content}));
    onToggleSnackBar();
    setTimeout(() => {
      onDismissSnackBar();
      navigation.goBack();
    }, 1000);
  };
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
            Add Notes
          </Text>
        </View>
        <View style={{flex: 1, gap: 20, marginTop: 10}}>
          <View style={{marginTop: 15}}>
            <Text style={{color: '#000', fontSize: 14}}>Title</Text>
            <TextInput
              placeholder="title"
              placeholderTextColor={'#908b8b'}
              onChangeText={value => setTitle(value)}
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
              textAlignVertical="top"
              placeholderTextColor={'#908b8b'}
              onChangeText={value => setContent(value)}
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
        <Button mode="contained" onPress={handleAdd}>
          Add
        </Button>
      </View>
      <Snackbar visible={visible} onDismiss={onDismissSnackBar}>
        {'Note added'}
      </Snackbar>
    </>
  );
};

export default AddNotesScreen;

const styles = StyleSheet.create({});
