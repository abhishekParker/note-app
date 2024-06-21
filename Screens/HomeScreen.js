import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import NotesCard from '../components/NotesCard';
import {Button, FAB, IconButton, Snackbar} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {deletePost} from '../store/postReducer';

const HomeScreen = ({navigation}) => {
  const notes = useSelector(state => state.posts.posts);
  const [allNotes, setAllNotes] = useState(notes ? notes : null);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);

  const onToggleSnackBar = () => setVisible(true);

  const onDismissSnackBar = () => setVisible(false);

  const handleDelete = id => {
    dispatch(deletePost(id));
    onToggleSnackBar('Note Added');
    setTimeout(() => {
      onDismissSnackBar();
    }, 1000);
  };

  const renderItem = ({item}) => {
    return (
      <NotesCard
        title={item?.title}
        content={item?.content}
        id={item?.id}
        handleDelete={handleDelete}
      />
    );
  };

  useEffect(() => {
    const filteredNotes = notes.filter(note => note.title.includes(search));
    setAllNotes(filteredNotes);
  }, [search]);

  useEffect(() => {
    setAllNotes(notes);
  }, [notes]);
  // console.log('notes ->', notes);
  return (
    <>
      <View
        style={{
          paddingHorizontal: 20,
          paddingTop: 30,
          flex: 1,
          backgroundColor: 'white',
        }}>
        <Text style={{fontSize: 23, fontWeight: '500', color: '#000'}}>
          Notes
        </Text>
        <TextInput
          placeholder="Search..."
          onChangeText={value => setSearch(value)}
          placeholderTextColor={'#000'}
          style={{
            borderWidth: 1,
            paddingHorizontal: 15,
            marginTop: 10,
            borderRadius: 7,
            color: '#000',
          }}
        />
        <View style={styles.cardsContainer}>
          {allNotes.length ? (
            <FlatList
              data={allNotes ? allNotes : notes}
              renderItem={renderItem}
              contentContainerStyle={{
                gap: 15,
                backgroundColor: 'white',
                paddingVertical: 20,
                paddingBottom: 65,
              }}
            />
          ) : (
            <Text
              style={{
                color: '#000',
                alignSelf: 'center',
                fontSize: 18,
                fontWeight: '700',
                marginTop: '50%',
              }}>
              No Notes Found
            </Text>
          )}
        </View>

        <FAB
          icon="plus"
          style={styles.fab}
          onPress={() => navigation.navigate('AddNotesScreen')}
        />
      </View>
      <Snackbar visible={visible} onDismiss={onDismissSnackBar}>
        {'Note Deleted'}
      </Snackbar>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  cardsContainer: {
    marginVertical: 15,
    gap: 20,
    flex: 1,
  },

  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    borderRadius: 50,
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    backgroundColor: '#ec2442',
  },
});
