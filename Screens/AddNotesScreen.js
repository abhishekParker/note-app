import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native';
import {Button, Snackbar} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {addPost} from '../store/postReducer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NoteInput from '../components/NoteInput';

const AddNotesScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  const onToggleSnackBar = message => setVisible(true);

  const onDismissSnackBar = () => setVisible(false);
  const handleAdd = note => {
    dispatch(addPost({id: Date.now(), ...note}));
    onToggleSnackBar();
    setTimeout(() => {
      onDismissSnackBar();
      navigation.goBack();
    }, 1000);
  };
  return (
    <>
      <NoteInput handleSubmit={handleAdd} name={'Add'} />
      <Snackbar visible={visible} onDismiss={onDismissSnackBar}>
        {'Note added'}
      </Snackbar>
    </>
  );
};

export default AddNotesScreen;

const styles = StyleSheet.create({});
