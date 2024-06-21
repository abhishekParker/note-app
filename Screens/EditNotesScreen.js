import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TextInput} from 'react-native';
import {Button, Snackbar} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {addPost, updatePost} from '../store/postReducer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NoteInput from '../components/NoteInput';

const EditNotesScreen = ({navigation, route}) => {
  const dispatch = useDispatch();
  // const notes = useSelector(state => state.posts.posts);
  const {id: currentId} = route.params;
  const [visible, setVisible] = useState(false);

  const onToggleSnackBar = message => setVisible(true);

  const onDismissSnackBar = () => setVisible(false);
  const handleEdit = note => {
    dispatch(updatePost({id: currentId, ...note}));
    onToggleSnackBar();
    setTimeout(() => {
      onDismissSnackBar();
      navigation.goBack();
    }, 1000);
  };

  // useEffect(() => {
  //   const selectedNote = notes.find(item => item.id === currentId);
  //   setTitle(selectedNote.title);
  //   setContent(selectedNote.content);
  // }, []);
  return (
    <>
      <NoteInput handleSubmit={handleEdit} name={'Update'} id={currentId} />

      <Snackbar visible={visible} onDismiss={onDismissSnackBar}>
        {'Note Edited'}
      </Snackbar>
    </>
  );
};

export default EditNotesScreen;

const styles = StyleSheet.create({});
