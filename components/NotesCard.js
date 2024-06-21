import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Button, Card} from 'react-native-paper';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FA from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {deletePost} from '../store/postReducer';
import {useNavigation} from '@react-navigation/native';

export default function NotesCard({title, content, id, handleDelete}) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <Card style={{backgroundColor: '#ffffff'}}>
      <Text style={{color: '#000', fontSize: 18, padding: 15}}>{title}</Text>
      <Card.Content>
        <Text variant="bodyMedium" style={{color: '#6c6c6ce6'}}>
          {content.length > 100 ? content.slice(0, 100) + '...' : content}
        </Text>
      </Card.Content>
      <Card.Actions>
        <TouchableOpacity
          style={{marginRight: 5}}
          onPress={() => navigation.navigate('ViewNoteScreen', {id})}>
          <Ionicons name="eye" color="black" size={25} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('EditNotesScreen', {id})}>
          <FA name="edit" color="black" size={20} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDelete(id)}>
          <MaterialIcon name="delete-outline" color="red" size={25} />
        </TouchableOpacity>
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({});
